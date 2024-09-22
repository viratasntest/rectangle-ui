import ProtectedRoute from "@/ProtectedRoute";
import CreateProject from "@/components/Projects/CreateProject";
import InviteUsers from "@/components/Projects/InviteUsers";
import NavbarComponent from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

function DashboardLayout({ children }) {
  const [showCreateProject, setShowCreateProject] = useState(false);
  const [currActionProj, setCurrActionProj] = useState({});
  const [showInviteUsers, setShowInviteUsers] = useState(false);
  return (
    <div>
      <ProtectedRoute>
        <div className="flex w-[100%]">
          <Sidebar
            setShowCreateProject={setShowCreateProject}
            setCurrActionProj={setCurrActionProj}
            setShowInviteUsers={setShowInviteUsers}
          />
          <div className="w-[100%]">
            {/* <NavbarComponent /> */}
            <div className="p-2 h-[100vh] bg-[#101214] overflow-scroll">
              <CreateProject
                show={showCreateProject}
                handleClose={() => setShowCreateProject(false)}
              />
              <InviteUsers
                show={showInviteUsers}
                handleClose={() => setShowInviteUsers(false)}
                currActionProj={currActionProj}
              />
              {children}
            </div>
          </div>
        </div>
      </ProtectedRoute>
    </div>
  );
}

export default DashboardLayout;
