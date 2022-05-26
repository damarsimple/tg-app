import React, { useState, useRef } from "react";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Typography,
  Grid,
} from "@mui/material";
import {
  Call,
  Chat,
  EmojiEmotions,
  GridView,
  Group,
  Mic,
  RecordVoiceOver,
  Videocam,
} from "@mui/icons-material";

enum ViewMode {
  VIEW_ALL = 0,
  VIEW_HIGHLIGHT = 1,
  //   VIEW_HIGHLIGHT_WITH_PARTICIPANT = 2,
}

const viewModeLength = 2;

export default function Id() {
  const [negotation, setNegotation] = useState(true);
  const [viewMode, setViewMode] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleJoin = () => {
    setNegotation(false);
  };

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then((stream) => {
        console.log(stream);

        let video = videoRef.current;

        if (!video) return alert("cant get your video ref !");

        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error("error:", err);
      });
  };

  const getMicrophone = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        console.log(stream);
      })
      .catch((err) => {
        console.error("error:", err);
      });
  };

  if (negotation)
    return (
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          gap: 3,

          p: "auto",
          textAlign: "center",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Box
          sx={{ m: "auto", display: "flex", flexDirection: "column", gap: 1 }}
        >
          <video
            autoPlay
            style={{ backgroundColor: "black" }}
            ref={videoRef}
            height={300}
            width="100%"
            src=""
          />

          <Typography textAlign={"center"}>Meeting pertama junaidi</Typography>
          <Typography textAlign={"center"}>4 peserta di meeting</Typography>
          <Box display="flex" gap={1} justifyContent="center">
            <Avatar
              src="https://randomuser.me/api/portraits/lego/0.jpg"
              alt="people name"
              sx={{ height: 32, width: 32 }}
            />
            <Avatar
              src="https://randomuser.me/api/portraits/lego/0.jpg"
              alt="people name"
              sx={{ height: 32, width: 32 }}
            />
            <Avatar
              src="https://randomuser.me/api/portraits/lego/0.jpg"
              alt="people name"
              sx={{ height: 32, width: 32 }}
            />
            <Avatar
              src="https://randomuser.me/api/portraits/lego/0.jpg"
              alt="people name"
              sx={{ height: 32, width: 32 }}
            />
          </Box>
          <Box sx={{ my: 2 }} />
          <Avatar
            src="https://randomuser.me/api/portraits/lego/0.jpg"
            alt="people name"
            sx={{ height: 32, width: 32, m: "auto" }}
          />
          <Typography textAlign={"center"}>Junaidi Suleiman</Typography>
          <Typography textAlign={"center"}>emailanda@gmail.com</Typography>

          <Box display="flex" gap={1} justifyContent="center">
            <IconButton onClick={getVideo} aria-label="delete">
              <Videocam />
            </IconButton>
            <IconButton onClick={getMicrophone} aria-label="delete">
              <Mic />
            </IconButton>
            <IconButton aria-label="delete">
              <Call />
            </IconButton>
          </Box>

          <Button variant="contained" onClick={handleJoin}>
            Gabung
          </Button>
        </Box>
      </Box>
    );

  return (
    <Box sx={{ height: "100vh", width: "100vw", backgroundColor: "darkgray" }}>
      {viewMode == ViewMode.VIEW_ALL && (
        <Grid
          container
          spacing={3}
          sx={{ p: 1, m: "auto", overflowY: "auto", maxHeight: "95vh" }}
          justifyContent="center"
          alignItems="center"
        >
          {[...Array(40)].map((_, i) => (
            <Grid item xs="auto" key={i}>
              <Box
                sx={{ height: 150, minWidth: 250, backgroundColor: "black" }}
              ></Box>
            </Grid>
          ))}
        </Grid>
      )}
      {viewMode == ViewMode.VIEW_HIGHLIGHT && (
        <Box
          sx={{
            p: 1,
            m: "auto",
            overflowY: "auto",
            height: "95vh",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            gap: 2,
          }}
        >
          <Box
            sx={{
              width: "80%",
              height: "100%",
              backgroundColor: "black",
            }}
          ></Box>
          <Box
            sx={{
              width: "15%",
              maxHeight: "100%",
              overflow: "auto",
            }}
          >
            {[...Array(10)].map((_, i) => (
              <Box
                sx={{
                  mt: 3,
                  height: 150,
                  minWidth: 250,
                  backgroundColor: "black",
                }}
              ></Box>
            ))}
          </Box>
        </Box>
      )}
      <Box
        display="flex"
        justifyContent={"space-between"}
        sx={{ height: "5vh" }}
      >
        <Box display="flex" gap={1} justifyContent="center">
          <IconButton onClick={getVideo} aria-label="delete">
            <Videocam />
          </IconButton>
          <IconButton onClick={getMicrophone} aria-label="delete">
            <Mic />
          </IconButton>
          <IconButton aria-label="delete">
            <Call />
          </IconButton>
        </Box>

        <Typography textAlign="center" color="white" variant="h6">
          10.41 AM
        </Typography>
        <Box display="flex" gap={1} justifyContent="center">
          <IconButton
            onClick={() => {
              setViewMode((viewMode + 1) % viewModeLength);
            }}
            aria-label="delete"
          >
            <GridView />
          </IconButton>
          <IconButton aria-label="delete">
            <RecordVoiceOver />
          </IconButton>
          <IconButton aria-label="delete">
            <Group />
          </IconButton>
          <IconButton aria-label="delete">
            <Chat />
          </IconButton>
          <IconButton aria-label="delete">
            <EmojiEmotions />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
