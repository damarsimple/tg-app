import { Paper, Box, Typography, Divider, Button } from "@mui/material";
import React from "react";
import { useRouter } from "next/router";

export default function ClassroomReuseableCard() {
  const { push } = useRouter();

  return (
    <Paper>
      <Box
        sx={{ display: "flex", gap: 2, p: 2, justifyContent: "space-between" }}
      >
        <Box sx={{ display: "flex", gap: 1 }}>
          <Box
            sx={{
              borderRadius: 5,
              width: 10,
              height: "100%",
              backgroundColor: "lightgreen",
            }}
          />

          <Box>
            <Typography variant="body1" fontWeight="bold">
              Pengumuman tentang
            </Typography>
            <Typography variant="body2">Quiz / Exam / Meeting</Typography>
          </Box>
        </Box>

        <Box>
          <Button
            onClick={() => {
              push("/meetings/1");
            }}
            sx={{ m: "auto" }}
            variant="contained"
          >
            ATTEMPT
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
