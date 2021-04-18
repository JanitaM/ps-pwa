import React from "react";
import BottomNavbar from "../components/BottomNavbar";
import Navbar from "../components/Navbar";

export default function Home() {
  console.log("Home");
  return (
    <>
      <Navbar />
      <div>Home</div>
      <BottomNavbar />
    </>
  );
}
