import { Link, useNavigate,useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { NavLink } from "react-router-dom";
import ProductsByCategory from "./ProductsByCategory/ProductsByCategory";
import Logo from "../assets/images/tmlogo.jpg"

function Navbar() {
  const [selectedTab, setSelectedTab] = useState("home");
  const navigate = useNavigate();
  const location =useLocation();

  useEffect(() =>{
    setSelectedTab(location.pathname);
  }, [location.pathname]);
  
  return (
    <nav className="Navbar">
      <img className = "logoimage" src={Logo} />
      <Tabs
        defaultValue={"home"}
        value={selectedTab}
        onChange={(e, v) => {navigate(v)}}
        sx={{height:"100%"}}
        classes={{ indicator: 'indicator'}}
      >
        
        <Tab classes={{ root: 'tab' }} value={"/"} label="Home">
          Home
        </Tab>
        <Tab classes={{ root: 'tab' }} value={"/electronics"} label="ELECTRONICS">
          Electronics
        </Tab>
        <Tab classes={{ root: 'tab' }} value={"/jewelery"} label="JEWELERY">
          Jewelery
        </Tab>
        <Tab classes={{ root: 'tab' }} value={"/menclothing"} label="MEN">
          Men's clothing
        </Tab>
        <Tab classes={{ root: 'tab' }} value={"/womenclothing"} label="WOMEN">
          Women's clothing
        </Tab>
        <Tab classes={{ root: 'tab' }} value={"/products/create"} label="CREATE">
         Create 
        </Tab>
      </Tabs>
    </nav>
  );
}

export default Navbar;
