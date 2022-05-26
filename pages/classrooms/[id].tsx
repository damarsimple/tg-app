import React, { useState } from "react";
import AppLayout from "components/AppLayout";
import {
  Tabs,
  Tab,
  Typography,
  Button,
  Paper,
  Avatar,
  Divider,
  Grid,
} from "@mui/material";
import { Box } from "@mui/system";
import { ExitToApp } from "@mui/icons-material";
import ClassroomFeedCard from "components/ClassroomFeedCard";
import PeopleCard from "components/PeopleCard";
import ClassroomReuseableCard from "components/ClassroomReuseableCard";

enum TabValue {
  Feed = 0,
  Student = 1,
  "Quiz / Exam" = 2,
  "Assigment" = 3,
  "Meet" = 4,
}

export default function Id() {
  const [currentTab, setCurrentTab] = useState<TabValue>(0);

  return (
    <AppLayout>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography variant="h6">Rakit Komputer</Typography>
          <Typography>Nama Guru</Typography>
        </Box>
        <Box>
          <Button startIcon={<ExitToApp />}>keluar kelas</Button>
        </Box>
      </Box>
      <Tabs
        sx={{ overflowX: "auto" }}
        value={currentTab}
        onChange={(_, v: TabValue) => setCurrentTab(v)}
      >
        <Tab label="Feed" />
        <Tab label="Student" />
        <Tab label="Quiz / Exam" />
        <Tab label="Assigment" />
        <Tab label="Meet" />
      </Tabs>

      {currentTab === TabValue.Feed && (
        <Box sx={{ m: 1, display: "flex", flexDirection: "column", gap: 2 }}>
          <ClassroomFeedCard />
          <ClassroomFeedCard />
          <ClassroomFeedCard />
          <ClassroomFeedCard />
          <ClassroomFeedCard />
        </Box>
      )}
      {currentTab === TabValue.Student && (
        <Box sx={{ m: 1 }}>
          <Grid container spacing={2} sx={{ p: 3 }}>
            <Grid item sm={6} md={4} lg={2}>
              <PeopleCard />
            </Grid>
            <Grid item sm={6} md={4} lg={2}>
              <PeopleCard />
            </Grid>
          </Grid>
        </Box>
      )}
      {currentTab === TabValue.Assigment && (
        <Box sx={{ m: 1, display: "flex", flexDirection: "column", gap: 2 }}>
          <ClassroomReuseableCard />
          <ClassroomReuseableCard />
          <ClassroomReuseableCard />
          <ClassroomReuseableCard />
        </Box>
      )}
      {currentTab === TabValue.Meet && (
        <Box sx={{ m: 1, display: "flex", flexDirection: "column", gap: 2 }}>
          <ClassroomReuseableCard />
          <ClassroomReuseableCard />
          <ClassroomReuseableCard />
          <ClassroomReuseableCard />
        </Box>
      )}
      {currentTab === TabValue["Quiz / Exam"] && (
        <Box sx={{ m: 1, display: "flex", flexDirection: "column", gap: 2 }}>
          <ClassroomReuseableCard />
          <ClassroomReuseableCard />
          <ClassroomReuseableCard />
          <ClassroomReuseableCard />
        </Box>
      )}
    </AppLayout>
  );
}
