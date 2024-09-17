import React from "react";
import { FaChevronDown, FaHome } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa6";
import { MdOutlineMailOutline, MdVerified } from "react-icons/md";
import { IoDocumentAttachSharp } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import styles from "./Sidebar.module.css";
import classNames from "classnames";
import { useRouter } from "next/router";
import { CiSquarePlus } from "react-icons/ci";

const ICON_SIZE = 24;

function Sidebar() {
  const sidebarItems = [];
  const router = useRouter();

  const handleClickEmail = () => {
    router.push('/emails')
  }

  const handleClickProjects = () =>{
    router.push('/projects')
  }

  return (
    <div className={styles.sidebar}>
      <h2 className="text-white">Rectangle</h2>
      <div onClick={handleClickEmail} className="mt-4 flex text-white items-center text-normal justify-between sidebar-hover p-2 cursor-pointer">
        <div className="flex text-white items-center text-medium">
        <MdOutlineMailOutline />
          <p className="text-[white] ml-4">Emails</p>
        </div>
        <div className="text-small text-[white] bg-[#0B757A] px-2 rounded-[4px]">
          23
        </div>
      </div>
      <div onClick={handleClickProjects} className="flex text-white items-center text-medium justify-between sidebar-hover p-2 cursor-pointer">
        <div className="flex text-white items-center ">
          <FaChevronDown />
          <p className="text-[white] ml-4">Projects</p>
        </div>
        <div>
        <CiSquarePlus size={18} />
        </div>
      </div>

      {/* {sidebarItems?.map((sidebarElement) => {
        return (
          <div
            className={classNames(
              "cursor-pointer",
              styles.sibebarItem,
              router.pathname === sidebarElement.route ? styles.active : ""
            )}
          >
            <div onClick={() => router.push(sidebarElement.route)}>
              {sidebarElement.icon}
            </div>
          </div>
        );
      })} */}
    </div>
  );
}

export default Sidebar;
