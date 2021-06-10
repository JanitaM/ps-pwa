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

function HideOnScroll({ children, window }) {
  const trigger = useScrollTrigger(window);
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar({ props }) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const handleDrawer = () => {
    setOpen(!open);
  };

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const renderMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id="menu"
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClick={handleDrawer}
      aria-label="open drawer"
    >
      <Drawer
        className={classes.drawer}
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
        onClose={handleDrawer}
      >
        <TopMenu handleDrawer={handleDrawer} />
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
                onClick={handleDrawer}
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
