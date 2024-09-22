import DashboardLayout from "@/layouts/DashboardLayout";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

// Sample tasks data
const initialData = {
  tasks: {
    "task-1": {
      id: "task-1",
      content: (
        <div>
          <p>Write API documentation</p>{" "}
          <p className="mt-2 text-[#fff] text-[10px] font-thin">
            All the details are in the file. Im sure it will turn out cool All
            the details are in the file. Im sure it will turn out cool
          </p>
        </div>
      ),
    },
    "task-2": {
      id: "task-2",
      content: (
        <div>
          <p>Write API documentation</p>{" "}
          <p className="mt-2 text-[#fff] text-[10px] font-thin">
            All the details are in the file. Im sure it will turn out cool All
            the details are in the file. Im sure it will turn out cool
          </p>
        </div>
      ),
    },
    "task-3": {
      id: "task-3",
      content: (
        <div>
          <p>Write API documentation</p>{" "}
          <p className="mt-2 text-[#fff] text-[10px] font-thin">
            All the details are in the file. Im sure it will turn out cool All
            the details are in the file. Im sure it will turn out cool
          </p>
        </div>
      ),
    },
    "task-4": {
      id: "task-4",
      content: (
        <div>
          <p>Write API documentation</p>{" "}
          <p className="mt-2 text-[#fff] text-[10px] font-thin">
            All the details are in the file. Im sure it will turn out cool All
            the details are in the file. Im sure it will turn out cool
          </p>
        </div>
      ),
    },
    "task-5": {
      id: "task-5",
      content: (
        <div>
          <p>Write API documentation</p>{" "}
          <p className="mt-2 text-[#fff] text-[10px] !font-thin">
            All the details are in the file. Im sure it will turn out cool All
            the details are in the file. Im sure it will turn out cool
          </p>
        </div>
      ),
    },
    "task-6": {
      id: "task-6",
      content: (
        <div>
          <p>Write API documentation</p>{" "}
          <p className="mt-2 text-[#fff] text-[10px] !font-thin">
            All the details are in the file. Im sure it will turn out cool All
            the details are in the file. Im sure it will turn out cool
          </p>
        </div>
      ),
    },
    "task-7": {
      id: "task-7",
      content: (
        <div>
          <p>Write API documentation</p>{" "}
          <p className="mt-2 text-[#fff] text-[10px] !font-thin">
            All the details are in the file. Im sure it will turn out cool All
            the details are in the file. Im sure it will turn out cool
          </p>
        </div>
      ),
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To Do",
      taskIds: ["task-1", "task-2", "task-3"],
    },
    "column-2": {
      id: "column-2",
      title: "In Progress",
      taskIds: ["task-4"],
    },
    "column-3": {
      id: "column-3",
      title: "Testing",
      taskIds: ["task-5"],
    },
    "column-4": {
      id: "column-4",
      title: "Done",
      taskIds: ["task-6", "task-7"],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3", "column-4"],
};

function KanbanBoard() {
  const [boardData, setBoardData] = useState(initialData);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const startColumn = boardData.columns[source.droppableId];
    const finishColumn = boardData.columns[destination.droppableId];

    if (startColumn === finishColumn) {
      // Reordering within the same column
      const newTaskIds = Array.from(startColumn.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...startColumn,
        taskIds: newTaskIds,
      };

      setBoardData({
        ...boardData,
        columns: {
          ...boardData.columns,
          [newColumn.id]: newColumn,
        },
      });
    } else {
      // Moving task between different columns
      const startTaskIds = Array.from(startColumn.taskIds);
      startTaskIds.splice(source.index, 1);
      const newStartColumn = {
        ...startColumn,
        taskIds: startTaskIds,
      };

      const finishTaskIds = Array.from(finishColumn.taskIds);
      finishTaskIds.splice(destination.index, 0, draggableId);
      const newFinishColumn = {
        ...finishColumn,
        taskIds: finishTaskIds,
      };

      setBoardData({
        ...boardData,
        columns: {
          ...boardData.columns,
          [newStartColumn.id]: newStartColumn,
          [newFinishColumn.id]: newFinishColumn,
        },
      });
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="container mx-auto mt-4">
        <div className="flex space-x-4">
          {boardData.columnOrder.map((columnId) => {
            const column = boardData.columns[columnId];
            const tasks = column.taskIds.map(
              (taskId) => boardData.tasks[taskId]
            );

            return (
              <div className="w-1/3" key={column.id}>
                <Card
                  className="mb-4 bg-[#1D1F21] !border-none max-h-[75vh]"
                  style={{ overflow: "auto" }}
                >
                  <Card.Header className="text-center border-none !bg-[#1D1F21] text-white text-[14px]">
                    {column.title}
                  </Card.Header>
                  <Droppable droppableId={column.id}>
                    {(provided) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="p-2 bg-[#1D1F21]  !border-none"
                      >
                        {tasks.map((task, index) => (
                          <Draggable
                            key={task.id}
                            draggableId={task.id}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="mb-2 bg-[#1D1F21]"
                              >
                                <Card className="shadow !bg-[#1D1F21] text-white text-[12px]">
                                  <Card.Body>
                                    <div className="flex mb-2 !text-[9px]">
                                      <div className="bg-[#B4D6FF] text-[#000] px-2">
                                        #Website
                                      </div>
                                      <div className="ml-2 bg-[#E9FE90] text-[#000] px-2">
                                        #Design
                                      </div>
                                      <div className="ml-2 bg-[#B4D6FF] text-[#000] px-2">
                                        #Website
                                      </div>
                                    </div>

                                    {task.content}
                                    <hr />
                                    <div className="flex items-center">
                                      <div className="w-[30px] h-[30px] bg-[#0B757A] rounded-[50%] text-[white] flex items-center justify-center">
                                        v
                                      </div>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </DragDropContext>
  );
}

export default KanbanBoard;
