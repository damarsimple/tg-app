import { Box, Button, Container, Typography } from "@mui/material";
import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const { push } = useRouter();

  return (
    <Box
      sx={{
        height: "120vh",
        width: "100vw",
        background:
          "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://tugasguru.com/bg.jpg')",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            flexDirection: "column",
            textAlign: "center",
            color: "white",
            gap: 2,
            p: 3,
          }}
        >
          <Box>
            <Image
              src="https://tugasguru.com/android-chrome-192x192.png"
              height={192}
              width={192}
              alt="Tugasguru"
            />
          </Box>
          <Typography variant="h2">TUGAS GURU </Typography>
          <Typography variant="subtitle1">
            Ujian Online, Quiz, Bimbingan Belajar, Ruang Kelas, Admin Sekolah,
            Absensi QR Code, PPDB Online, Raport Online, Cek Kelulusan, Akun
            Orang Tua, Guru Bimbel
          </Typography>
          <Button variant="contained" onClick={() => push("/login")}>
            MASUK
          </Button>
          <Button variant="contained" onClick={() => push("/register")}>
            DAFTAR
          </Button>
          <Button variant="contained" onClick={() => push("/guest")}>
            COBA
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              window.open(
                "https://wa.me/6282240001974?text=Hai Admin Tugas Guru Mohon bantuannya..."
              );
            }}
          >
            HUBUNGI ADMIN
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
