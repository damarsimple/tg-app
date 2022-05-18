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
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Grid from "@mui/material/Grid";
import { useMediaQuery } from "@react-hook/media-query";
import {
  Icon,
  IconButton,
  ListItemButton,
  ListItemIcon,
  Paper,
  TextField,
} from "@mui/material";

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

  return (
    <AppLayout>
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
