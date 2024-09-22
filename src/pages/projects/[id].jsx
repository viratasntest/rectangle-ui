import KanbanBoard from "@/components/Projects/KanbanBoard";
import DashboardLayout from "@/layouts/DashboardLayout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

function ProjectPage() {
  const router = useRouter();
  const { id } = router.query;
  const activeProject = useSelector((s) => s.projects.activeProject);

  const tabs = [
    { label: "Tasks", component: <KanbanBoard /> },
    { label: "Dashboard", component: <p>Dashboard</p> },
    { label: "Overview", component: <p>Overview</p> },
    { label: "Timeline", component: <p>Tasks</p> },
    { label: "Discussions", component: <p>Tasks</p> },
  ];

  const [activeTab, setActiveTab] = useState("Tasks");

  return (
    <DashboardLayout>
      <div className="container mx-auto mt-4">
        <div className="text-white font-semibold">{activeProject?.name}</div>
        <div className="text-[14px] mt-1 text-[#565A5A] ml-2 flex items-center">
          <div
            className="w-[10px] h-[10px] rounded-[3px]"
            style={{ border: "1px solid #565A5A" }}
          ></div>
          <p className="ml-2">Devops</p>
        </div>
        <div className="flex items-center justify-between text-[#565A5A] w-[40%] mt-4 text-[14px]">
          {tabs?.map((tab) => {
            return (
              <div
                className={`h-[100%] cursor-pointer ${
                  activeTab === tab.label ? "text-white" : ""
                }`}
                style={{
                  borderBottom:
                    activeTab === tab.label ? "1px solid white" : "",
                }}
                onClick={() => setActiveTab(tab.label)}
              >
                {tab.label}
              </div>
            );
          })}
        </div>
        {tabs.filter((tab) => tab.label === activeTab)[0].component}
      </div>
    </DashboardLayout>
  );
}

export default ProjectPage;
