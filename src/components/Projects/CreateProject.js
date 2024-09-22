import { CREATE_PROJECT } from "@/Endpoints/projectEndpoints";
import instance from "@/utils/client";
import { errorHandler } from "@/utils/errorHandler";
import UITextArea from "@/widgets/UITextArea/UITextArea";
import UITextField from "@/widgets/UITextField/UITextField";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function CreateProject({ show, handleClose }) {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const createProject = async () => {
    try {
      setIsCreating(true);
      const body = {
        name: projectName,
        description,
      };
      const data = await instance.post(CREATE_PROJECT, body);
    } catch (err) {
      errorHandler(err);
    } finally {
      setIsCreating(false);
      handleClose()
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
        <p className="font-semibold">Create Project</p>
      </Modal.Header>
      <Modal.Body className=" text-[white] bg-[#1D1F21] text-[12px] ">
        <UITextField
          placeholder="Enter Project name"
          className="h-[20px] !bg-[#101214] !text-[white]"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <UITextArea
          placeholder="Enter Description"
          className="h-[80px] !bg-[#101214] !text-[white] mt-2"
          type="text-area"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
          onClick={createProject}
          style={{ opacity: isCreating ? "0.5" : "1" }}
        >
          {isCreating ? "Creating..." : "Create"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateProject;
