import { useState, Fragment } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import AppLayout from "../components/AppLayout";
import { usePrivateChatStore } from "stores/chats";
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
import { PrivateChat, PrivateChatSession } from "../generated";

export default function Chats() {
  const {
    sessions,
    lastChatMap,
    getConversation,
    sendConversation,
    getSession,
  } = usePrivateChatStore();

  const [selectedId, setSelectedId] = useState("");
  const isDesktop = useMediaQuery("only screen and (min-width: 400px)");
  const isMobile = !isDesktop;

  const session = getSession(selectedId);

  const [chatContent, setChatContent] = useState("");

  const sendChatHandler = () => {
    if (chatContent.length == 0 || !session?.fromId) return;

    sendConversation(session.fromId, chatContent, () => {
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
    createNewSession: PrivateChatSession;
  }>(gql`
    mutation CreateNewSession($to: String!) {
      createNewSession(to: $to) {
        id
      }
    }
  `);

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
                      setSelectedId(`${x.data?.createNewSession?.id}`);
                      setShowSendModal(false);
                    });
                  }}
                  selected={selectedId === e.id}
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

      <Button
        fullWidth
        onClick={() => setShowSendModal(!showSendModal)}
        startIcon={<Icon>send</Icon>}
      >
        KIRIM PESAN BARU
      </Button>
      {(isDesktop || (isMobile && !selectedId)) && (
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
                  setSelectedId(e.id);
                }}
                selected={selectedId === e.id}
                sx={{ width: "100%" }}
              >
                <ListItemAvatar>
                  <Avatar
                    alt={e.from.name}
                    src={e.from.profilePicturePath ?? "fallback"}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={e.from.name}
                  secondary={
                    <Typography variant="caption" noWrap>
                      {lastChatMap[e.from.id]?.content}
                    </Typography>
                  }
                />
              </ListItemButton>
              <Divider variant="inset" component="li" />
            </Fragment>
          ))}
        </List>
      )}
      {selectedId && session && (
        <Box
          sx={{
            display: "flex",
            minHeight: "100vh",
            paddingBottom: 100,
            flexDirection: "column",
            backgroundColor: "lightgray",
          }}
        >
          <Paper sx={{ p: 2, display: "flex", gap: 2, alignContent: "center" }}>
            <Avatar
              alt={session.from.name}
              src={session.from.profilePicturePath ?? "fallback"}
            />
            <Typography noWrap variant="h5">
              {session.from.name}
            </Typography>
          </Paper>
          <Box sx={{ p: 1, display: "flex", flexDirection: "column", gap: 1 }}>
            {getConversation(session.from.id)?.map((e) => (
              <Paper
                key={e.id}
                sx={{
                  maxWidth: "85%",
                  p: 1,
                  alignSelf:
                    e.fromId !== session.from.id ? "flex-end" : "flex-start",
                }}
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
