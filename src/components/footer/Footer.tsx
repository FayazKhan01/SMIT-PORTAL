import React from "react";

const footerStyle = {
  height: "50px",
  display: "flex",
  justifyContent: "center",
  marginTop: "10px",
  backgroundColor: "green",
  color: "white",
};
function Footer(){
return(
      
      <div style={footerStyle} className="text-slate-500">
        &copy; copyright 2022. All Rights Reserved
      </div>
  );
}

export default Footer;
