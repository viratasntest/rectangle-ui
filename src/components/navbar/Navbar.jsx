import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./Navbar.module.css";
import { IoIosNotificationsOutline } from "react-icons/io";
import UITextField from "@/widgets/UITextField/UITextField";
import UIButton from "@/widgets/Button/UIButton";
import { Button } from "react-bootstrap";
import { FaPencilAlt } from "react-icons/fa";
import { useRouter } from "next/router";

function NavbarComponent() {
  const router = useRouter();
  return (
    <Navbar className="bg-[#101214] h-[70px] w-[100%] shadow-sm p-0">
      {router.pathname.includes("/emails") && (
        <div
          className="w-[90%] h-[100%] p-2 flex items-center"
          style={{ borderRight: "2px solid #f2f3f4" }}
        >
          <Button className="!bg-[#0B757A] !rounded-[1px] !border-none flex">
            <div className="flex items-center">
              <FaPencilAlt size={10} />
              <span className="ml-2 text-[12px]">Compose</span>
            </div>
          </Button>
          <UITextField
            placeholder="Search Mails"
            className="ml-4 h-[40px] rounded-[8px] shadow-sm"
            style={{ width: "60%", border: "1px solid #f2f3f4" }}
          />
        </div>
      )}
      <div
        className="w-[90%] h-[100%] p-2 flex items-center"
        style={{ borderRight: "2px solid #f2f3f4" }}
      ></div>
      <div className="p-2 flex items-center justify-center w-[10%]">
        <IoIosNotificationsOutline size={24} className="cursor-pointer" />
        <div className="bg-[#0B757A] h-[30px] w-[30px] rounded-[50%] ml-2 flex justify-center items-center text-[white] cursor-pointer font-semibold">
          v
        </div>
      </div>
    </Navbar>
  );
}

export default NavbarComponent;
