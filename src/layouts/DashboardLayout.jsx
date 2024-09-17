import ProtectedRoute from "@/ProtectedRoute";
import NavbarComponent from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function DashboardLayout({ children }) {
  return (
    <div >
      <ProtectedRoute>
        <div className="flex w-[100%]">
          <Sidebar />
          <div className="w-[100%]">
            <NavbarComponent />
            <div className="p-2 max-h-[90vh] overflow-scroll">
            {children}
            </div>
           
          </div>
        </div>
      </ProtectedRoute>
    </div>
  );
}

export default DashboardLayout;
