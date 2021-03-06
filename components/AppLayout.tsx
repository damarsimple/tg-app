import { useState, ReactNode, useEffect } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import LinkMui from "@mui/material/Link";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Icon from "@mui/material/Icon";
import MuiDrawer from "@mui/material/Drawer";
import * as React from "react";
import {
  CSSObject,
  styled,
  Theme,
  useTheme,
  alpha,
} from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import InputBase from "@mui/material/InputBase";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Avatar, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Menu from "@mui/material/Menu";
import { useUserStore } from "stores/user";
import Link from "next/link";
import Paper from "@mui/material/Paper";
import { useNoticationStore } from "stores/notifications";
import { useChatStore } from "../stores/chats";
import { useRouter } from "next/router";
import { useDrawerStore } from "../stores/applayout";
import BrowserOnly from "./BrowserOnly";
import { useMediaQuery } from "@react-hook/media-query";
import { toast } from "react-toastify";
import { client } from "../modules/apollo";
import { gql } from "@apollo/client";
import { VerificationResponse } from "generated";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const rolesFeatures: Record<
  string,
  { name: string; link: string; icon: string }[]
> = {
  TEACHER: [
    {
      name: "Meeting",
      link: "/meetings",
      icon: "videocam",
    },
    {
      name: "Sekolah",
      link: "/school",
      icon: "school",
    },
    {
      name: "Raport Online",
      link: "/reports",
      icon: "summarize",
    },
    {
      name: "Quiz / Ujian",
      link: "/quiz",
      icon: "quiz",
    },
    {
      name: "Tugas",
      link: "/assigments",
      icon: "task",
    },
    {
      name: "Ruang Kelas",
      link: "/classrooms",
      icon: "dashboard",
    },
    {
      name: "Pengajuan",
      link: "/forms",
      icon: "feed",
    },
    {
      name: "Izin",
      link: "/izin",
      icon: "sick",
    },
    {
      name: "Konsultasi",
      link: "/consultations",
      icon: "psychology_alt",
    },
    {
      name: "Absensi",
      link: "/attendance",
      icon: "qr_code_scanner",
    },
  ],
  PARENT: [
    {
      name: "Anak",
      link: "/mychildrens",
      icon: "child_care",
    },
    {
      name: "Raport Online",
      link: "/reports",
      icon: "summarize",
    },
  ],
  STUDENT: [
    {
      name: "Meeting",
      link: "/meetings",
      icon: "videocam",
    },
    {
      name: "Sekolah",
      link: "/schools",
      icon: "school",
    },
    {
      name: "Raport Online",
      link: "/reports",
      icon: "summarize",
    },
    {
      name: "Quiz / Ujian",
      link: "/quiz",
      icon: "quiz",
    },
    {
      name: "Tugas",
      link: "/classrooms",
      icon: "task",
    },
    {
      name: "Ruang Kelas",
      link: "/classrooms",
      icon: "dashboard",
    },
    {
      name: "Pengajuan",
      link: "/forms",
      icon: "feed",
    },
    {
      name: "Izin",
      link: "/izin",
      icon: "sick",
    },
    {
      name: "Konsultasi",
      link: "/consultations",
      icon: "psychology_alt",
    },
    {
      name: "Absensi",
      link: "/attendance",
      icon: "qr_code_scanner",
    },
  ],
};

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const ROLES = ["TEACHER", "STUDENT", "PARENT"];

const RolesTranslation: Record<string, string> = {
  TEACHER: "GURU",
  STUDENT: "SISWA",
  PARENT: "ORANG TUA",
};

export default function AppLayout({ children }: { children: ReactNode }) {
  const isDesktop = useMediaQuery("only screen and (min-width: 400px)");
  const isMobile = useMediaQuery("only screen and (max-width: 768px)");

  console.log(isMobile);

  const { push, pathname } = useRouter();

  const { open, handleDrawerClose, handleDrawerOpen } = useDrawerStore();

  const [roles, setRoles] = useState("TEACHER");

  const features = rolesFeatures[roles];

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const [role, setRole] = useState(0);

  const { user } = useUserStore();
  const { register, chats } = useChatStore();

  const init = async () => {
    await register();

    console.log(`logged as ${user?.name} ${user?.email}`);
  };

  useEffect(() => {
    init();
  }, []);

  const { notifications } = useNoticationStore();
  const isMenuOpen = Boolean(anchorEl);
  const unreadChats = chats?.filter((e) => e.readAt == null);

  const [asked, setAsked] = useState(false);

  const notifyEmailSent = () => toast("Wow so easy!");

  const notifyEmailFailed = () => toast("Failed to send email");

  const handleReverify = () => {
    client
      .mutate<{ resendVerification: VerificationResponse }>({
        mutation: gql`
          mutation Mutation($type: VerifyType!) {
            resendVerification(type: $type) {
              status
              message
            }
          }
        `,
        variables: {
          type: "EMAIL",
        },
      })
      .then((res) => {
        if (res.data?.resendVerification?.status) {
          notifyEmailSent();
        } else {
          notifyEmailFailed();
          console.log(res.data);
        }

        setAsked(true);
      })
      .catch(notifyEmailFailed);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={"main-menu"}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      <MenuItem onClick={handleMenuClose}>Tentang Kami</MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>TugasGuru v0.1</MenuItem>
    </Menu>
  );

  return (
    <Box>
      <BrowserOnly>
        <CssBaseline />

        <AppBar position="fixed" open={open}>
          <Toolbar sx={{ justifyContent: "space-between", display: "flex" }}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>
              {!open && (
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{
                    display: { xs: "none", sm: "block" },
                  }}
                >
                  TUGAS GURU
                </Typography>
              )}
              {/* <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search???"
                inputProps={{ "aria-label": "search" }}
              />
            </Search> */}
            </Toolbar>
            <Toolbar>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
                onClick={() => {
                  setRole((role + 1) % ROLES.length);
                  setRoles(ROLES[role]);
                }}
              >
                <Badge badgeContent={role + 1} color="error">
                  <Icon>update</Icon>
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
                onClick={() => {
                  push("/chats");
                }}
              >
                <Badge badgeContent={unreadChats.length} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={() => {
                  push("/notifications");
                }}
              >
                <Badge badgeContent={notifications.length} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="inherit"
                onClick={handleProfileMenuOpen}
              >
                <Avatar sx={{ height: 30, width: 30 }} />
              </IconButton>
            </Toolbar>
          </Toolbar>
        </AppBar>
        {(!isMobile || open) && (
          <Drawer variant="permanent" open={open}>
            <DrawerHeader>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  display: { xs: "none", sm: "block" },
                }}
              >
                {RolesTranslation[roles] ?? roles}
              </Typography>
              <IconButton onClick={handleDrawerClose}>
                <ChevronRightIcon />
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              {[
                {
                  name: "Dashboard",
                  link: "/dashboard",
                  icon: "home",
                },
              ].map((text, index) => (
                <ListItem key={text.name} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      push(text.link);
                      handleDrawerClose();
                    }}
                  >
                    <ListItemIcon>
                      <Icon>{text.icon}</Icon>
                    </ListItemIcon>
                    <ListItemText primary={text.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {features?.map((text, index) => (
                <ListItem key={text.name} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      push(text.link);
                      handleDrawerClose();
                    }}
                  >
                    <ListItemIcon>
                      <Icon>{text.icon}</Icon>
                    </ListItemIcon>
                    <ListItemText primary={text.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>

            <Divider />
            <List>
              {[
                {
                  name: "Bimbel",
                  link: "/bimbel",
                  icon: "group",
                },
              ].map((text, index) => (
                <ListItem key={text.name} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      push(text.link);
                      handleDrawerClose();
                    }}
                  >
                    <ListItemIcon>
                      <Icon>{text.icon}</Icon>
                    </ListItemIcon>
                    <ListItemText primary={text.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {[
                {
                  name: "Chat",
                  link: "/chat",
                  icon: "chat",
                },
                {
                  name: "Transaksi",
                  link: "/transaction",
                  icon: "receipt_long",
                },
                {
                  name: "Notifikasi",
                  link: "/notification",
                  icon: "notifications",
                },
                {
                  name: "Profil",
                  link: "/profile",
                  icon: "manage_accounts",
                },
              ].map((text, index) => (
                <ListItem key={text.name} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      push(text.link);
                      handleDrawerClose();
                    }}
                  >
                    <ListItemIcon>
                      <Icon>{text.icon}</Icon>
                    </ListItemIcon>
                    <ListItemText primary={text.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
        )}
      </BrowserOnly>
      <Box component="main">
        <DrawerHeader />
        <Box
          sx={{
            marginLeft: !isMobile || open ? "56px" : isMobile ? 1 : 10,
            marginRight: !isMobile || open ? undefined : isMobile ? 1 : 3,
            marginTop: 2,
          }}
        >
          {children}
        </Box>
        {renderMenu}
      </Box>
      <BrowserOnly>
        {!asked && pathname == "/dashboard" && user?.emailVerifiedAt == null && (
          <Paper
            sx={{
              height: 50,
              width: "100%",
              alignContent: "center",
              justifyContent: "center",
              textAlign: "center",
              position: "fixed",
              bottom: 0,
              zIndex: 99999,
              paddingBottom: 10,
              paddingTop: 2,
              backgroundColor: "lightgray",
            }}
          >
            <Typography variant="h5">Anda belum memverifikasi email</Typography>
            <Typography variant="body2" onClick={handleReverify}>
              <a>klik disini untuk kirim ulang verifikasi email</a>
            </Typography>
          </Paper>
        )}
      </BrowserOnly>
    </Box>
  );
}
