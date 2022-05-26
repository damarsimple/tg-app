import React, { useState } from "react";
import AppLayout from "components/AppLayout";
import {
  Avatar,
  Box,
  IconButton,
  Paper,
  Typography,
  Grid,
  Button,
  Modal,
  TextField,
} from "@mui/material";
import { PlusOne } from "@mui/icons-material";
import ClassroomCard from "components/ClassroomCard";
import modalStyle from "constants/modal";
import { toast } from "react-toastify";

export default function School() {
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [classCode, setClassCode] = useState("");
  const toggleJoin = () => setShowJoinModal(!showJoinModal);

  const handleJoinClass = () => {
    toast("berhasil bergabung ...");
    setClassCode("");
    toggleJoin();
  };

  return (
    <AppLayout>
      <Modal
        open={showJoinModal}
        onClose={toggleJoin}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...modalStyle,
            display: "flex",
            gap: 3,
            flexDirection: "column",
          }}
        >
          <Typography align="center" variant="h6">
            GABUNG KELAS
          </Typography>
          <TextField
            onChange={(e) => setClassCode(e.target.value)}
            value={classCode}
            label="Kode Kelas"
          />
          <Button onClick={handleJoinClass}>Gabung</Button>
        </Box>
      </Modal>
      <Box display="flex" justifyContent={"space-between"}>
        <Typography>My Course</Typography>
        <Button onClick={toggleJoin} variant="outlined" startIcon={<PlusOne />}>
          Gabung kelas
        </Button>
      </Box>
      <Grid container spacing={2} sx={{ p: 3 }}>
        <Grid item xs={6} md={3} lg={2}>
          <ClassroomCard />
        </Grid>
        <Grid item xs={6} md={3} lg={2}>
          <ClassroomCard />
        </Grid>
      </Grid>
    </AppLayout>
  );
}
