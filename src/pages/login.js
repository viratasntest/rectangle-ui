import Login from "@/components/Login/Login";
import NavbarComponent from "@/components/navbar/Navbar";
import React from "react";

function LoginPage() {
  return (
    <div className="login-page">
      {/* {" "}
      <NavbarComponent />
       */}
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <div className="content">
        <h1>RECTANGLE</h1>
        <Login />
      </div>
    </div>
  );
}

export default LoginPage;
