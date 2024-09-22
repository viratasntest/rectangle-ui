import React from "react";
import { Form } from "react-bootstrap";
import { CiStar } from "react-icons/ci";

function EmailRow() {
  return (
    <div
      style={{ borderBottom: "1px solid #f2f3f4" }}
      className="p-[12px] cursor-pointer email-row flex items-center"
    >
      <Form.Check className="mt-1" />
      <CiStar size={20} className="ml-2" />
      <div className="text-[14px]  w-[20%] ml-2">
        <div className="">
          <div className="font-semibold">Achugatla Virat</div>
          <p className="text-[10px] w-fit px-2 bg-[#0B757A] text-[white]">
            Project Name
          </p>
        </div>
      </div>
      <div className="text-[14px] w-[70%]">
        This is a simple email body lorem ispsium text is added here this is a
        email body lorem ispsium teas sadhsajdg jashx...
      </div>
      <div className="text-[12px] text-[#A9A9A9] font-semibold">
       16th sept
      </div>
    </div>
  );
}

export default EmailRow;
