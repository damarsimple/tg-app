import { useState, ReactNode } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
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

const drawerWidth = 240;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
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
      link: "/meeting",
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
      link: "/school",
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
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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

  const isMenuOpen = Boolean(anchorEl);
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
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box
        sx={{
          height: 100,
          width: "100%",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5">Anda belum verifikasi email !</Typography>
        <Typography variant="body2">
          <Link href="/">
            <a>klik disini untuk kirim ulang verifikasi email</a>
          </Link>
        </Typography>
      </Box>
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
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
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
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
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
              <ListItemButton>
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
              <ListItemButton>
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
              <ListItemButton>
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
              <ListItemButton>
                <ListItemIcon>
                  <Icon>{text.icon}</Icon>
                </ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
        {renderMenu}
      </Box>
    </Box>
  );
}
