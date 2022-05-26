import { Box, Grid } from "@mui/material";
import AppLayout from "components/AppLayout";
import PostCard from "components/PostCard";
import React from "react";

export default function Dashboard() {
  return (
    <AppLayout>
      <Grid sx={{ p: 2 }} container spacing={2}>
        <Grid item xs={12} sm={6} lg={3}>
          <PostCard />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <PostCard />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <PostCard />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <PostCard />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <PostCard />
        </Grid>
      </Grid>
    </AppLayout>
  );
}
