// src/components/TaskList.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Task from "./Task";
import { getAllTasks } from "../../redux/action/task";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import TaskForm from "./TaskForm";
import Header from "../Header/Header";
const TaskList = () => {
  // const tasks = useSelector((state) => state.tasks.tasks);
  const { tasks } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const incompleteTasks = tasks?.filter((task) => task.status === "incomplete");
  const completedTasks = tasks?.filter((task) => task.status === "completed");
  const deletedTasks = tasks?.filter((task) => task.status === "deleted");
  useEffect(() => {
    dispatch(getAllTasks());
  }, []);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleOnDragEnd = (result) => {
    // Find the index of the element with ID "132"
    if (result.destination) {
      const indexToMove = result.destination.index; // Index where you want to move the element (zero-based index)
      if (indexToMove > -1 && indexToMove < incompleteTasks?.length) {
        // Remove the element from its current position
        const elementToMove = incompleteTasks.splice(indexToMove, 1)[0];

        // Add the element at the specified index
        incompleteTasks.splice(1, 0, elementToMove); // Here, 1 is the new index (zero-based) where you want to move the element
      }
    }
  };
  const handleCompletedTaskOnDragEnd = (result) => {
    // Find the index of the element with ID "132"
    if (result?.destination) {
      const indexToMove = result.destination.index; // Index where you want to move the element (zero-based index)
      if (indexToMove > -1 && indexToMove < completedTasks?.length) {
        // Remove the element from its current position
        const elementToMove = completedTasks.splice(indexToMove, 1)[0];

        // Add the element at the specified index
        completedTasks.splice(1, 0, elementToMove); // Here, 1 is the new index (zero-based) where you want to move the element
      }
    }
  };
  return (
    <>
      <Header />
      <br />
      <br />
      <div style={{ float: "right" }}>
        <div>
          &nbsp;&nbsp;
          <button onClick={() => setShowModal(!showModal)}>
            {" "}
            {!showModal ? "Create Task" : "close modal"}
          </button>
        </div>

        {/* <Button label="Create Task" onClick={()=>handleShowModal()} /> */}
      </div>
      {showModal ? <TaskForm /> : ""}
      <br />
      <div className="task-list">
        <div className="task-column">
          <h2>Incomplete</h2>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="task">
              {(provided) => (
                <section {...provided.droppableProps} ref={provided.innerRef}>
                  {incompleteTasks?.map((task, index) => (
                    <Draggable
                      key={task?.id}
                      draggableId={task?.id?.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided?.innerRef}
                        >
                          <Task key={task.id} task={task} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </section>
              )}
            </Droppable>
          </DragDropContext>
          {/* {incompleteTasks?.map((task) => (
            <Task key={task.id} task={task} />
          ))} */}
        </div>
        <div className="task-column">
          <h2>Completed</h2>
          <DragDropContext onDragEnd={handleCompletedTaskOnDragEnd}>
            <Droppable droppableId="task">
              {(provided) => (
                <section {...provided.droppableProps} ref={provided.innerRef}>
                  {completedTasks?.map((task, index) => (
                    <Draggable
                      key={task?.id}
                      draggableId={task?.id?.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided?.innerRef}
                        >
                          <Task key={task.id} task={task} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </section>
              )}
            </Droppable>
          </DragDropContext>
        </div>
        <div className="task-column">
          <h2>Deleted</h2>

          {deletedTasks?.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TaskList;
