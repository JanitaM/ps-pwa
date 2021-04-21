import React, { useState } from "react";
import {
  AppBar,
  CssBaseline,
  Drawer,
  makeStyles,
  Toolbar,
  IconButton,
  Menu
} from "@material-ui/core";
import clsx from "clsx";
import EditIcon from "@material-ui/icons/Edit";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import FilterListIcon from "@material-ui/icons/FilterList";
import { primaryColor } from "./helpers/styleUtils";
import AddItem from "../pages/AddItem";
import EditItem from "../pages/EditItem";
import FilterMenu from "../pages/FilterMenu";

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    backgroundColor: primaryColor
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-evenly"
  },
  hide: { display: "none" },
  drawer: {
    width: drawerWandH,
    height: drawerWandH,
    flexShrink: 0
  },
  drawerPaper: { width: drawerWandH, height: drawerWandH }
}));
const drawerWandH = "100%";

export default function BottomNavbar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [moreAnchorEl, setMoreAnchorEl] = useState(null);
  const [addBtn, setAddBtn] = useState(false);
  const [editBtn, setEditBtn] = useState(false);
  const [filterBtn, setFilterBtn] = useState(false);
  const isMenuOpen = Boolean(moreAnchorEl);

  const handleDrawerOpen = (text) => {
    if (text === "Add") setAddBtn(true);
    if (text === "Edit") setEditBtn(true);
    if (text === "Filter") setFilterBtn(true);
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setAddBtn(false);
    setEditBtn(false);
    setFilterBtn(false);
    setOpen(false);
  };

  const renderCorrectMenu = () => {
    if (addBtn) return <AddItem handleDrawerClose={handleDrawerClose} />;
    if (editBtn) return <EditItem handleDrawerClose={handleDrawerClose} />;
    if (filterBtn) return <FilterMenu handleDrawerClose={handleDrawerClose} />;
  };

  const renderMenu = (
    <Menu
      anchorEl={moreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      id="menu"
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "center" }}
      open={isMenuOpen}
      // onClick={handleDrawerClose}
      aria-label="open drawer"
    >
      <Drawer
        className={classes.drawer}
        anchor="bottom"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
        onClose={handleDrawerClose}
      >
        {renderCorrectMenu()}
      </Drawer>
    </Menu>
  );

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => handleDrawerOpen("Add")}
            edge="end"
            className={clsx(open && classes.hide)}
          >
            <AddCircleOutlineIcon fontSize="large" />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => handleDrawerOpen("Edit")}
            edge="end"
            className={clsx(open && classes.hide)}
          >
            <EditIcon fontSize="large" />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => handleDrawerOpen("Filter")}
            edge="end"
            className={clsx(open && classes.hide)}
          >
            <FilterListIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </>
  );
}
