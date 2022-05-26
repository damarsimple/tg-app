import { Box } from "@mui/material";
import AppLayout from "components/AppLayout";
import ClassroomReuseableCard from "components/ClassroomReuseableCard";
import React from "react";

export default function Reports() {
  return (
    <AppLayout>
      <Box sx={{ m: 1, display: "flex", flexDirection: "column", gap: 2 }}>
        <ClassroomReuseableCard />
        <ClassroomReuseableCard />
        <ClassroomReuseableCard />
        <ClassroomReuseableCard />
      </Box>
    </AppLayout>
  );
}
