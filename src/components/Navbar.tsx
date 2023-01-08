import "../App.css";
import React, { useState } from "react";
import { Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import logo from "../components/logo.png";
import NavMenu from "./navMenu/NavMenu";

const Navbar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuHandler = () => {
    setOpenMenu(true);
  };
  return (
    <div className="container" style={{ height: "14vh" }}>
      {/* <h1 className=''><img className='h-[45px]' src={logo} alt="" /></h1> */}

      <div className="nav" style={{}}>
        <div
          style={{
            backgroundColor: "forestgreen",
            height: "32px",
            paddingRight: "12px",
            paddingTop: "12px",
          }}
          className="menuIcon"
        >
          <MenuOutlined
            style={{ color: "white", fontSize: 20, float: "right" }}
            onClick={menuHandler}
          />
          <div>
            <h1 className="logo">
              <img className="" src={logo} style={{ height: "50px", marginTop: "-12px" }} />
            </h1>
          </div>
        </div>
      </div>
      <div className="headerMenu" style={{}}>
        {/* < className="logo"> */}
        
        <NavMenu />
      </div>
      <Drawer
        open={openMenu}
        onClose={() => {
          setOpenMenu(false);
        }}
        closable={false}
        bodyStyle={{ backgroundColor: "lightgreen" }}
      >
        <NavMenu isInLine />
      </Drawer>
    </div>
  );
};
export default Navbar;
