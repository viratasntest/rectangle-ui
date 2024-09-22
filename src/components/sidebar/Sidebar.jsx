import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp, FaHome } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa6";
import {
  MdDelete,
  MdEdit,
  MdOutlineMailOutline,
  MdVerified,
} from "react-icons/md";
import { IoDocumentAttachSharp } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import styles from "./Sidebar.module.css";
import classNames from "classnames";
import { useRouter } from "next/router";
import { CiSquarePlus } from "react-icons/ci";
import CreateProject from "../Projects/CreateProject";
import instance from "@/utils/client";
import { GET_PROJECTS } from "@/Endpoints/projectEndpoints";
import { errorHandler } from "@/utils/errorHandler";
import { useDispatch } from "react-redux";
import { setActiveProject, setProjects } from "@/store/slices/projectSlice";
import { useSelector } from "react-redux";
import { Dropdown } from "react-bootstrap";
import { PiDotsThree, PiDotsThreeCircleVerticalFill } from "react-icons/pi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

function Sidebar({ setShowCreateProject, setShowInviteUsers, setCurrActionProj }) {
  const sidebarItems = [];
  const router = useRouter();
  const [hideProjects, setHideProjects] = useState(true);
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [hideTeams, setHideTeams] = useState(true);
  const [hideBuckets, setHideBuckets] = useState(true);
  const [hideReleases, setHideReleases] = useState(true);
  const projects = useSelector((s) => s.projects.projects);
  const dispatch = useDispatch();
  const fetchProjects = async () => {
    try {
      const projs = await instance.get(GET_PROJECTS);
      dispatch(setProjects(projs.data));
    } catch (err) {
      errorHandler(err);
    } finally {
      setProjectsLoading(false);
      // fetchProjects();
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleClickEmail = () => {
    router.push("/emails");
  };

  const handleClickProjects = (e) => {
    e.stopPropagation();
    setHideProjects(!hideProjects);
  };

  const handleProjectsClick = (projectObj) => {
    dispatch(setActiveProject(projectObj));
    router.push(`/projects/${projectObj._id}`);
  };

  const handleCreateProject = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowCreateProject(true);
  };

  const handleInvite = (project) => {
    setCurrActionProj(project)
    setShowInviteUsers(true)
  }

  return (
    <div className={styles.sidebar}>
      <h2 className="text-white">Rectangle</h2>
      <div
        onClick={handleClickEmail}
        className="mt-4 flex text-white items-center text-normal justify-between sidebar-hover p-2 cursor-pointer"
      >
        <div className="flex text-white items-center text-medium">
          <MdOutlineMailOutline />
          <p className="text-[white]P ml-4">Emails</p>
        </div>
        <div className="text-small text-[white] bg-[#0B757A] px-2 rounded-[4px]">
          23
        </div>
      </div>
      <div
        onClick={handleClickProjects}
        className="flex items-center text-medium justify-between sidebar-hover p-2 cursor-pointer"
      >
        <div className="flex !text-[#565A5A] items-center ">
          {!hideProjects && (
            <FaChevronDown size={12} onClick={() => setHideProjects(true)} />
          )}
          {hideProjects && (
            <FaChevronUp
              className=""
              size={12}
              onClick={() => setHideProjects(false)}
            />
          )}
          <p className="text-[13px]  ml-4 font-semibold">Your Projects</p>
        </div>
        <div
          className="!text-[#0B757A] font-semibold ml-2 "
          onClick={handleCreateProject}
        >
          <CiSquarePlus size={18} />
        </div>
      </div>
      {!hideProjects && (
        <div className="">
          {projects?.map((proj) => {
            return (
              <div
                className="ml-4 text-[white] text-[12px] projects-name cursor-pointer p-2 flex items-center justify-between h-[25px] mt-2"
                key={proj._id}
              >
                <p
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleProjectsClick(proj);
                  }}
                  className="!font-thin"
                >
                  {proj.name}
                </p>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    <PiDotsThree />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <MdEdit /> <span className="ml-2">Edit</span>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <MdDelete /> <span className="ml-2">Delete</span>
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleInvite(proj)}>
                      <AiOutlineUsergroupAdd size={14} />{" "}
                      <span className="ml-2">Invite</span>
                    </Dropdown.Item>
                    <Dropdown.Item></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            );
          })}
        </div>
      )}
      <div className="flex items-center text-medium justify-between sidebar-hover p-2 cursor-pointer">
        <div className="flex !text-[#565A5A] items-center ">
          {!hideTeams && (
            <FaChevronDown size={12} onClick={() => setHideTeams(true)} />
          )}
          {hideTeams && (
            <FaChevronUp
              className=""
              size={12}
              onClick={() => setHideTeams(false)}
            />
          )}
          <p className="text-[13px]  ml-4 font-semibold">Your Teams</p>
        </div>
        <div
          className="!text-[#0B757A] font-semibold ml-2 "
          onClick={handleCreateProject}
        >
          <CiSquarePlus size={18} />
        </div>
      </div>
      {!hideTeams && (
        <div className="">
          {projects?.map((proj) => {
            return (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleProjectsClick(proj);
                }}
                className="ml-4 text-[white] text-[12px] projects-name cursor-pointer p-2 flex items-center justify-between h-[25px] mt-2"
                key={proj._id}
              >
                <p className="!font-thin">{proj.name}</p>
              </div>
            );
          })}
        </div>
      )}

      <div className="flex items-center text-medium justify-between sidebar-hover p-2 cursor-pointer">
        <div className="flex !text-[#565A5A] items-center ">
          {!hideBuckets && (
            <FaChevronDown size={12} onClick={() => setHideBuckets(true)} />
          )}
          {hideBuckets && (
            <FaChevronUp
              className=""
              size={12}
              onClick={() => setHideBuckets(false)}
            />
          )}
          <p className="text-[13px]  ml-4 font-semibold">Buckets</p>
        </div>
        <div
          className="!text-[#0B757A] font-semibold ml-2 "
          onClick={handleCreateProject}
        >
          <CiSquarePlus size={18} />
        </div>
      </div>
      {!hideBuckets && (
        <div className="">
          {projects?.map((proj) => {
            return (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleProjectsClick(proj);
                }}
                className="ml-4 text-[white] text-[12px] projects-name cursor-pointer p-2 flex items-center justify-between h-[25px] mt-2"
                key={proj._id}
              >
                <p className="!font-thin">{proj.name}</p>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    <PiDotsThree />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>Edit</Dropdown.Item>
                    <Dropdown.Item>Delete</Dropdown.Item>
                    <Dropdown.Item></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            );
          })}
        </div>
      )}

      <div className="flex items-center text-medium justify-between sidebar-hover p-2 cursor-pointer">
        <div className="flex !text-[#565A5A] items-center ">
          {!hideReleases && (
            <FaChevronDown size={12} onClick={() => setHideReleases(true)} />
          )}
          {hideReleases && (
            <FaChevronUp
              className=""
              size={12}
              onClick={() => setHideReleases(false)}
            />
          )}
          <p className="text-[13px]  ml-4 font-semibold">Releases</p>
        </div>
        <div
          className="!text-[#0B757A] font-semibold ml-2 "
          onClick={handleCreateProject}
        >
          <CiSquarePlus size={18} />
        </div>
      </div>
      {!hideReleases && (
        <div className="">
          {projects?.map((proj) => {
            return (
              <div
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleProjectsClick(proj);
                }}
                className="ml-4 text-[white] text-[12px] projects-name cursor-pointer p-2 flex items-center justify-between h-[25px] mt-2"
                key={proj._id}
              >
                <p className="!font-thin">{proj.name}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Sidebar;
