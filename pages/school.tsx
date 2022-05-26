import React from "react";
import AppLayout from "components/AppLayout";
import Image from "next/image";
import {
  Avatar,
  Box,
  IconButton,
  Paper,
  Typography,
  Grid,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import PeopleCard from "components/PeopleCard";

export default function School() {
  return (
    <AppLayout>
      <Paper>
        <Box sx={{ position: "relative", height: 300, width: "100%" }}>
          <Image
            src="https://source.unsplash.com/random"
            alt="Sekolah"
            layout="fill"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ p: 3, display: "flex", gap: 3, alignContent: "center" }}>
            <Avatar src="" alt="SMAN 1 MAGETAN" />
            <Typography variant={"h4"}>SMAN 1 MAGETAN</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignContent: "center",
            }}
          >
            <IconButton>
              <Edit />
            </IconButton>
          </Box>
        </Box>
      </Paper>

      <Grid container spacing={2} sx={{ p: 3 }}>
        <Grid item sm={6} md={4} lg={2}>
          <PeopleCard />
        </Grid>
        <Grid item sm={6} md={4} lg={2}>
          <PeopleCard />
        </Grid>
      </Grid>
    </AppLayout>
  );
}
