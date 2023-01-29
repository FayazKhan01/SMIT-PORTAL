import React from "react";

const footerStyle = {
  height: "50px",
  display: "flex",
  justifyContent: "center",
  marginTop: "10px",  
  backgroundColor: "darkslategray",
  color: "white",
  paddingTop:"10px"
};
function Footer() {
  return (
    <div style={footerStyle}>
      <div>
        Copyright &copy; 2023 by Saylani Welfare Int Trust. All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
