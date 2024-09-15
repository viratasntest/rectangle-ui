import React from "react";
import { FaHome } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { IoDocumentAttachSharp } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import styles from "./Sidebar.module.css";
import classNames from "classnames";
import { useRouter } from "next/router";

const ICON_SIZE = 24;

function Sidebar() {
  const sidebarItems = [
    {
      label: "Dashboard",
      icon: <FaHome size={ICON_SIZE} />,
      route: "/home",
    },
    {
      label: "Network",
      icon: <FaPeopleArrows size={ICON_SIZE} />,
      route: "/network",
    },
    {
      label: "Background Verification",
      icon: <MdVerified size={ICON_SIZE} />,
      route: "/bgv",
    },
    {
      label: "Documents",
      icon: <IoDocumentAttachSharp size={ICON_SIZE} />,
      route: "/docs",
    },
    {
      label: "Settings",
      icon: <IoSettings size={ICON_SIZE} />,
      route: "/settings",
    },
    {
      label: "Support",
      icon: <BiSupport size={ICON_SIZE} />,
      route: "/help",
    },
  ];
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div className={styles.sidebar}>
      {sidebarItems?.map((sidebarElement) => {
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
      })}
    </div>
  );
}

export default Sidebar;
