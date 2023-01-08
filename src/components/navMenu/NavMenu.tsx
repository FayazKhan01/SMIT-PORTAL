import React from 'react';
// import logo from "../components/logo.png";
import {
  InfoCircleOutlined,
  FormOutlined,
  HomeOutlined,
  BarsOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

export default function NavMenu({ isInLine = false }) {
  return (
    <Menu
      style={{
        backgroundColor: "green",
        color: "white",
        fontSize: 20,
        border: 1,
        display: "flex",
        justifyContent: "center",
        height:"62px"
      }}
      mode={isInLine ? "inline" : "horizontal"}
      items={[
        {
          label: (
            <a>
            <img src="./images/logo.png" alt="" style={{ height: "50px", marginTop:"6px" }} />
            </a>
          ),
          key: "",
        },
        {
          icon: <HomeOutlined />,
          label: (
            <a href="./" rel="noopener noreferrer">
              Home
            </a>
          ),
          key: "home",
        },
        {
          icon: <BarsOutlined />,
          label: <a href="courses">Courses</a>,
          key: "courses",
        },
        {
          icon: <FormOutlined />,
          label: (
            <a href="./Addmission-form" rel="" target="_blank">
              Addmission Form
            </a>
          ),
          key: "Addmission-form",
        },
        {
          icon: <ContactsOutlined />,
          label: (
            <a href="./contact-us" rel="">
              Contact Us
            </a>
          ),
          key: "contact-us",
        },
        {
          icon: <InfoCircleOutlined />,
          label: (
            <a href="./about-us" rel="">
              About Us
            </a>
          ),
          key: "about-us",
        },
      ]}
    ></Menu>
  );
}

