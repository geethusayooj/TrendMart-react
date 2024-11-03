import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { NavLink } from "react-router-dom";
import ProductsByCategory from "./ProductsByCategory/ProductsByCategory";
import Logo from "../assets/images/logotrendmart.jpg"

function Navbar() {
  const [selectedTab, setSelectedTab] = useState("home");
  const navigate = useNavigate();
  return (
    <nav className="Navbar">
      <img className = "logoimage" src={Logo} />
      <Tabs
        textColor="secondary"
        indicatorColor="secondary"
        defaultValue={"home"}
        value={selectedTab}
        onChange={(e, v) => {setSelectedTab(v); navigate(v)}}
        sx={{height:"100%"}}
      >
        
        <Tab value={"/"} label="Home">
          Home
        </Tab>
        <Tab value={"/electronics"} label="ELECTRONICS">
          Electronics
        </Tab>
        <Tab value={"/jewelery"} label="JEWELERY">
          Jewelery
        </Tab>
        <Tab value={"/menclothing"} label="MEN">
          Men's clothing
        </Tab>
        <Tab value={"/womenclothing"} label="WOMEN">
          Women's clothing
        </Tab>
      </Tabs>
    </nav>
  );
}

export default Navbar;
