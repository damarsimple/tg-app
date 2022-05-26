import React from "react";
import { Paper, Typography, Avatar } from "@mui/material";

export default function PeopleCard() {
  return (
    <Paper
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: 3,
        p: 2,
      }}
    >
      <Avatar
        src="https://randomuser.me/api/portraits/lego/0.jpg"
        alt="people name"
        sx={{ height: "100%", width: "100%" }}
      />
      <Typography variant="h6">Nama Guru ....</Typography>
      <Typography variant="body2">Roles</Typography>
    </Paper>
  );
}
