import { useState, Fragment, useRef } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import AppLayout from "../components/AppLayout";
import { useChatStore } from "stores/chats";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MailIcon from "@mui/icons-material/Mail";
import Grid from "@mui/material/Grid";
import { useMediaQuery } from "@react-hook/media-query";
import {
  Icon,
  IconButton,
  ListItemButton,
  ListItemIcon,
  Modal,
  Paper,
  TextField,
} from "@mui/material";
import { gql, useMutation, useQuery } from "@apollo/client";
import { User } from "generated";
import { Chat, ChatSession } from "../generated";
import { useUserStore } from "stores/user";

export default function Chats() {
  const {
    chatUsers,
    sessions,
    lastChatMap,
    sendConversation,
    getSession,
    conversations,
    addConversation,
    addSessions,
    conversationId,
    setConversationId,
    getUsers,
    setOnNewConversation,
  } = useChatStore();

  const { user } = useUserStore();

  const isDesktop = useMediaQuery("only screen and (min-width: 400px)");
  const isMobile = !isDesktop;

  const session = conversationId ? getSession(conversationId) : undefined;

  const [chatContent, setChatContent] = useState("");

  const sendChatHandler = () => {
    if (chatContent.length == 0 || !session?.id) return;

    sendConversation(session.id, chatContent, () => {
      setChatContent("");
    });
  };

  const [showSendModal, setShowSendModal] = useState(false);

  const [searchPeople, setSearchPeople] = useState("");

  const { data: { findChatTarget } = {}, loading } = useQuery<{
    findChatTarget: User[];
  }>(
    gql`
      query FindChatTarget($name: String!) {
        findChatTarget(name: $name) {
          id
          name
          profilePicturePath
        }
      }
    `,
    {
      variables: { name: searchPeople },
    }
  );

  const [handleCreate] = useMutation<{
    createNewSession: ChatSession;
  }>(gql`
    mutation CreateNewSession($to: String!) {
      createNewSession(to: $to) {
        id
        participantsIds
        lastReadAt
      }
    }
  `);

  const lastChatElementRef = useRef<HTMLDivElement>(null);

  const scroll = () => {
    setTimeout(() => {
      if (lastChatElementRef.current) {
        lastChatElementRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 200);
  };

  const setConversationHandler = (id: string) => {
    setConversationId(id);
    setOnNewConversation(scroll);
    scroll();
  };

  return (
    <AppLayout>
      <Modal
        open={showSendModal}
        onClose={() => setShowSendModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="h6" component="h6">
            Pilih Target
          </Typography>

          <TextField
            value={searchPeople}
            onChange={(e) => setSearchPeople(e.target.value)}
            placeholder="Cari target ..."
            fullWidth
            size="small"
          />

          <List
            sx={{
              width: "100%",
              maxWidth: { xs: "100%", sm: 400 },
              bgcolor: "background.paper",
            }}
          >
            {findChatTarget?.map((e) => (
              <Fragment key={e.id}>
                <ListItemButton
                  onClick={() => {
                    handleCreate({ variables: { to: e.id } }).then((x) => {
                      if (!x?.data?.createNewSession) return;
                      addSessions(x.data?.createNewSession);
                      setConversationHandler(`${x.data?.createNewSession.id}`);
                      setShowSendModal(false);
                    });
                  }}
                  selected={conversationId === e.id}
                  sx={{ width: "100%" }}
                >
                  <ListItemAvatar>
                    <Avatar
                      alt={e.name}
                      src={e.profilePicturePath ?? "fallback"}
                    />
                  </ListItemAvatar>
                  <ListItemText primary={e.name} />
                </ListItemButton>
                <Divider variant="inset" component="li" />
              </Fragment>
            ))}
          </List>
        </Box>
      </Modal>
      {!conversationId && (
        <Button
          fullWidth
          sx={{ mt: 2 }}
          onClick={() => {
            setShowSendModal(!showSendModal);
          }}
          startIcon={<Icon>{"send"}</Icon>}
        >
          {"KIRIM PESAN BARU"}
        </Button>
      )}
      {!conversationId && (isDesktop || isMobile) && (
        <List
          sx={{
            width: "100%",
            maxWidth: { xs: "100%", sm: 400 },
            bgcolor: "background.paper",
          }}
        >
          {sessions.map((e) => (
            <Fragment key={e.id}>
              <ListItemButton
                onClick={() => {
                  setConversationHandler(e.id);
                }}
                selected={conversationId === e.id}
                sx={{ width: "100%" }}
              >
                {getUsers(e.participantsIds)?.map((e) => (
                  <ListItemAvatar key={e?.id}>
                    <Avatar
                      alt={e?.name}
                      src={e?.profilePicturePath ?? "fallback"}
                    />
                  </ListItemAvatar>
                ))}
                {getUsers(e.participantsIds)?.map((e) => (
                  <ListItemText
                    key={e?.id}
                    primary={e?.name}
                    secondary={
                      <Typography variant="caption" noWrap>
                        {e && lastChatMap[e.id]?.content}
                      </Typography>
                    }
                  />
                ))}
              </ListItemButton>
              <Divider variant="inset" component="li" />
            </Fragment>
          ))}
        </List>
      )}
      {conversationId && session && (
        <Box
          sx={{
            display: "flex",
            minHeight: "100vh",
            paddingBottom: 10,
            flexDirection: "column",
            backgroundColor: "lightgray",
          }}
        >
          <Paper
            sx={{
              p: 2,
              width: "100%",
              display: "flex",
              gap: 2,
              alignContent: "center",
              position: "fixed",
            }}
          >
            <IconButton
              onClick={() => {
                setConversationId("");
              }}
            >
              <Icon>{"arrow_back"}</Icon>
            </IconButton>
            {getUsers(session.participantsIds)?.map((e) => (
              <Avatar
                key={e?.id}
                alt={e?.name}
                src={e?.profilePicturePath ?? "fallback"}
              />
            ))}
            <Box>
              <Typography noWrap variant="h6">
                {getUsers(session.participantsIds)
                  ?.map((e) => e?.name)
                  ?.join(",")}
              </Typography>
              {getUsers(session.participantsIds)?.length > 1 && (
                <Typography noWrap variant="caption">
                  dan {getUsers(session.participantsIds)?.length} orang lainnya.
                </Typography>
              )}
            </Box>
          </Paper>
          <Box
            sx={{
              p: 1,
              display: "flex",
              overflowY: "auto",
              flexDirection: "column",
              gap: 1,
              pt: 10,
            }}
          >
            {conversations?.map((e) => (
              <Paper
                key={e.id}
                sx={{
                  mx: 2,
                  maxWidth: "85%",
                  p: 1,
                  alignSelf: e.fromId == user?.id ? "flex-end" : "flex-start",
                }}
                ref={lastChatElementRef}
              >
                <Typography paragraph sx={{ wordWrap: "break-word" }}>
                  {e.content}
                </Typography>
              </Paper>
            ))}
          </Box>
          <Paper
            sx={{
              position: "fixed",
              bottom: 0,
              right: 0,
              p: 2,
              display: "flex",
              gap: 2,
              paddingLeft: "60px",
              alignContent: "center",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <TextField
              placeholder="Send..."
              size="small"
              value={chatContent}
              fullWidth
              onChange={(e) => {
                setChatContent(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendChatHandler();
                }
              }}
            />
            <IconButton sx={{ width: "10%" }} onClick={sendChatHandler}>
              <Icon>send</Icon>
            </IconButton>
          </Paper>
        </Box>
      )}
    </AppLayout>
  );
}
