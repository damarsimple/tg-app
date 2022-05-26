import React from "react";
import { Paper, Typography, Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "next/link";
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
      <Link href="/classrooms/1">
        <a>
          <Box
            component="img"
            src="https://randomuser.me/api/portraits/lego/0.jpg"
            alt="people name"
            sx={{ height: { xs: 150, md: 300 }, width: "100%" }}
          />
        </a>
      </Link>
      <Link href="/classrooms/1">
        <a>
          <Typography variant="h6"> Nama kelas</Typography>
        </a>
      </Link>
      <Link href="/users/1">
        <a>
          <Typography variant="body2">Nama Guru</Typography>
        </a>
      </Link>
    </Paper>
  );
}
