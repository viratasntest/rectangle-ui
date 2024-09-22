import { CREATE_PROJECT } from "@/Endpoints/projectEndpoints";
import instance from "@/utils/client";
import { errorHandler } from "@/utils/errorHandler";
import UITextArea from "@/widgets/UITextArea/UITextArea";
import UITextField from "@/widgets/UITextField/UITextField";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function InviteUsers({ show, handleClose, currActionProj }) {
  const [emailId, setEmailId] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const handleInvite = async () => {
    try {
      setIsCreating(true);
      const body = {
        email: emailId,
        team: "",
      };
      const data = await instance.post(`projects/${currActionProj?._id}/invite`, body);
    } catch (err) {
      errorHandler(err);
    } finally {
      setIsCreating(false);
      handleClose();
    }
  };
  return (
    <Modal
      className="!border-none !text-white"
      variant="dark"
      show={show}
      onHide={handleClose}
    >
      <Modal.Header className="bg-[#101214] text-[white] !border-none !rounded-[0px] ">
        <p className="font-semibold">Invite Users</p>
      </Modal.Header>
      <Modal.Body className=" text-[white] bg-[#1D1F21] text-[12px] ">
        <UITextField
          placeholder="Enter user email"
          className="h-[20px] !bg-[#101214] !text-[white]"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer className="!bg-[#101214] text-[white] !border-none !rounded-[0px]">
        <Button
          className="!bg-[#870808] !border-none !rounded-[1px] !text-[12px]"
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          className="!bg-[#0C3A3D] !border-none !rounded-[1px] !text-[12px]"
          onClick={handleInvite}
          style={{ opacity: isCreating ? "0.5" : "1" }}
        >
          {isCreating ? "Inviting..." : "Invite"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default InviteUsers;
