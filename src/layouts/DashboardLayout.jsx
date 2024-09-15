import ProtectedRoute from "@/ProtectedRoute";
import NavbarComponent from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function DashboardLayout({ children }) {
  return (
    <div>
      <ProtectedRoute>
        <NavbarComponent />
        <Container fluid>
          <Row className="p-0">
            <Sidebar />
            <Col md={11}>{children}</Col>
          </Row>
        </Container>
      </ProtectedRoute>

    </div>
  );
}

export default DashboardLayout;
