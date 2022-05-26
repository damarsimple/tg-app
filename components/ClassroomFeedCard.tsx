import { Paper, Box, Avatar, Typography, Divider } from "@mui/material";
import React from "react";

export default function ClassroomFeedCard() {
  return (
    <Paper>
      <Box sx={{ display: "flex", gap: 2, p: 2 }}>
        <Avatar
          src="https://randomuser.me/api/portraits/lego/0.jpg"
          alt="people name"
          sx={{ height: 80, width: 80, margin: "auto" }}
        />

        <Box>
          <Typography variant="body2">
            Pengumuman tentang UTS Semester Genap 10
          </Typography>
          <Typography variant="body2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
            amet iste dolores ducimus modi? Accusantium ad ratione obcaecati
            minus omnis?
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ width: "50%", textAlign: "center" }}>Suka</Typography>
        <Divider orientation="vertical" />
        <Typography sx={{ width: "50%", textAlign: "center" }}>
          Komentar
        </Typography>
      </Box>
    </Paper>
  );
}
