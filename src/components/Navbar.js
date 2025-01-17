import React, { useState, useEffect } from "react";
import {
  AppBar,
  Drawer,
  IconButton,
  makeStyles,
  Menu,
  Slide,
  Toolbar,
  useScrollTrigger
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import TopMenu from "./TopMenu";
import Title from "./Title";
import { primaryColor } from "./helpers/styleUtils";

const useStyles = makeStyles((theme) => ({
  appbar: { backgroundColor: "#FFF" },
  grow: { flexGrow: 1 },
  menuButton: {
    color: primaryColor,
    marginRight: "16px"
  },
  hide: { display: "none" },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: { width: drawerWidth }
}));
const drawerWidth = "100%";

// function convertImg(binArr) {
//   let arrayBufferView = new Uint8Array(binArr);
//   let blob = new Blob([arrayBufferView], { type: "image/*" });
//   let urlCreator = window.url || window.webkitURL;
//   let imgUrl = urlCreator.createObjectURL(blob);
//   return imgUrl;
// }

function HideOnScroll({ children, window }) {
  const trigger = useScrollTrigger(window);
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar({ props, signedIn, signOut }) {
  const classes = useStyles();

  // useEffect(() => {
  //   async function getPhotos() {
  //     if (signedInUser) {
  //       const token = await signedInUser.signInUserSession.idToken.jwtToken;
  //       const username = signedInUser.username;

  //       const res = await axios.get(
  //         `http://localhost:4000/user/profilepic?email=${username}&token=${token}`
  //       );
  //       // console.log(res.data.Body.data);
  //       if (res.data) setProfilePic(convertImg(res.data.Body.data));
  //       // setProfilePic(res.data.map((item) => convertImg(item.Body.data)));
  //     }
  //   }
  //   getPhotos();
  // }, []);

  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  // const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const renderMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id="menu"
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClick={handleDrawerClose}
      aria-label="open drawer"
    >
      <Drawer
        className={classes.drawer}
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
        onClose={handleDrawerClose}
      >
        <TopMenu
          signOut={signOut}
          // signedInUser={signedInUser}
        />
      </Drawer>
    </Menu>
  );

  return (
    <>
      <HideOnScroll {...props}>
        <div className={classes.grow}>
          <AppBar className={classes.appbar}>
            <Toolbar>
              <Title />
              <div className={classes.grow} />
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="end"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          {renderMenu}
        </div>
      </HideOnScroll>
      <Toolbar />
    </>
  );
}
