import { Button, Modal } from "components";
import { Edit, Filter, PlusIcon, Trash } from "icons";
import { useState } from "react";
import { TTask } from "types";
import { taskList } from "utils";
import CreateTodo from "./CreateTodo";

const TodoList = () => {
  // States
  const [task, setTask] = useState(taskList);
  const [open, setOpen] = useState(false);
  const [singleTask, setSingleTask] = useState<TTask>();

  // Functions
  const removeTask = (taskId: number) => {
    // Remove the task from the state
    const updatedTask = task.filter((task) => task.id !== taskId);
    setTask(updatedTask);
  };

  const onSave = (taskInfo: TTask) => {
    // Check if the task is being edited
    if (taskInfo.id) {
      const getTaskIndex = task.findIndex((task) => task.id === taskInfo.id);
      const updatedTask = [...task];
      updatedTask[getTaskIndex] = taskInfo;
      setTask(updatedTask);
      setSingleTask(undefined);
      setOpen(false);
      return;
    }
    // Check if the task is being created
    // Get the last task's ID
    const lastTask = task[task.length - 1];
    const lastId = lastTask ? lastTask.id : 0;
    // Create a new task with a new ID
    const taskWithNewId = { ...taskInfo, id: lastId + 1 };

    // Add the new task to the state
    setTask([...task, taskWithNewId]);
    setOpen(false);
  };
  return (
    <>
      <div className="container">
        {/* <============Header Part ============> */}
        <div className="flex justify-between items-center pt-8 pb-3 border-b-[1px]">
          <h2 className="text-heading font-bold text-primary ">My Task List</h2>
        </div>
        <div className="flex gap-3 py-4">
          <Button
            type="primary"
            content="New Task"
            icon={<PlusIcon />}
            onClick={() => {
              setOpen(true);
            }}
          />
          <Button type="secondary" content="Filters" icon={<Filter />} />
        </div>
        {/* <============Task List ============> */}
        <div className="flex flex-col gap-3">
          {task.length === 0 && (
            <div className="flex flex-col justify-center items-center gap-2 p-3 border rounded-lg">
              <h3 className="text-medium font-bold text-secondary">
                No Task Found
              </h3>
              <p className="text-small text-secondary">
                Click on "New Task" to add new task
              </p>
            </div>
          )}
          {task.map((task) => (
            <div
              className="flex flex-col justify-between items-center p-3 border rounded-lg sm:flex-row"
              key={task.id}
            >
              {/* Task Details */}
              <div className="flex flex-col items-center gap-1 sm:items-start">
                <h3 className="text-medium font-bold text-secondary">
                  {task.title}
                </h3>
                <div className="flex gap-2">
                  {/* Priority */}
                  <p className="flex items-center gap-2 font-semibold text-small">
                    <span>Priority:</span>
                    <span className="text-red-500">{task.priority}</span>
                  </p>
                  {/* Status */}|
                  <p className="flex items-center gap-2 font-semibold text-small">
                    <span>Status:</span>
                    <span className="text-red-500">{task.status}</span>
                  </p>
                </div>
              </div>
              {/* Action Icons */}
              <div className="flex items-center gap-4 text-red-500 ">
                <Edit
                  className="cursor-pointer fill-secondary hover:fill-secondary-dark transition-all duration-300"
                  onClick={() => {
                    setSingleTask(task);
                    setOpen(true);
                  }}
                />
                <Trash
                  className="cursor-pointer fill-red-500 hover:fill-red-600 transition-all duration-300"
                  onClick={() => {
                    removeTask(task.id);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      <Modal
        open={open}
        title={singleTask ? "Edit Task" : "Create New Task"}
        content={
          <CreateTodo
            setOpen={setOpen}
            onSave={onSave}
            singleTask={singleTask}
            setSingleTask={setSingleTask}
          />
        }
        onClose={() => {
          setOpen(false);
          setSingleTask(undefined);
        }}
        width={"30%"}
      />
    </>
  );
};

export default TodoList;
