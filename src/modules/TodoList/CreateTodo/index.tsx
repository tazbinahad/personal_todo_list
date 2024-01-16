import { ModalFooter } from "components/Modal";
import React, { useEffect, useState } from "react";
import { TPriority, TTask, TTaskEvent } from "types";
import { priorityList, statusList } from "utils";

type TCreateTodo = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSave: (taskInfo: TTask) => void;
  singleTask?: TTask;
  setSingleTask: React.Dispatch<React.SetStateAction<any>>;
};
const CreateTodo: React.FC<TCreateTodo> = ({
  setOpen,
  onSave,
  singleTask,
  setSingleTask,
}) => {
  const [taskInfo, setTaskInfo] = useState<TTask>({
    id: 0,
    title: "",
    priority: "Low",
    status: "To Do",
    completed: false,
  });

  const updatePriority = (e: React.MouseEvent<HTMLDivElement>) => {
    const priority = e.currentTarget.innerText as TPriority;
    setTaskInfo({ ...taskInfo, priority });
  };
  const updateStatus = (e: React.MouseEvent<HTMLDivElement>) => {
    const status = e.currentTarget.innerText as TTaskEvent;
    setTaskInfo({ ...taskInfo, status });
  };

  useEffect(() => {
    if (singleTask?.id) {
      setTaskInfo(singleTask);
    }
  }, [singleTask]);
  return (
    <div>
      <div className="flex flex-col gap-1">
        <label htmlFor="title">Task Details</label>
        <input
          type="text"
          id="title"
          className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow  duration-300"
          placeholder="Write your task here!"
          value={taskInfo.title}
          onChange={(e) => {
            const value = e.target.value
              .replace(/^\s+/g, "")
              .replace(/\s\s+/g, " ");

            setTaskInfo({ ...taskInfo, title: value });
          }}
        />
      </div>
      <div>
        <div className="flex flex-col gap-1 mt-2">
          <p>Priority</p>
          <div className="flex gap-3">
            {priorityList.map((priority) => (
              <div
                key={priority}
                className={`border rounded-md px-5 py-2 cursor-pointer ${
                  taskInfo.priority === priority && taskInfo.priority === "High"
                    ? "bg-red-500 border-red-500 text-white"
                    : taskInfo.priority === priority &&
                      taskInfo.priority === "Medium"
                    ? "bg-yellow-500 border-yellow-500 text-white"
                    : taskInfo.priority === priority &&
                      taskInfo.priority === "Low" &&
                      "bg-primary border-primary text-white"
                }`}
                onClick={updatePriority}
              >
                {priority}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-1 mt-2">
          <p>Status</p>
          <div className="flex gap-3">
            {statusList.map((status) => (
              <div
                key={status}
                className={`border rounded-md px-5 py-2 cursor-pointer ${
                  taskInfo.status === status && taskInfo.status === "To Do"
                    ? "bg-secondary border-secondary text-white"
                    : taskInfo.status === status &&
                      taskInfo.status === "In Progress"
                    ? "bg-green-400 border-green-400 text-white"
                    : taskInfo.status === status &&
                      taskInfo.status === "Done" &&
                      "bg-primary border-primary text-white"
                }`}
                onClick={updateStatus}
              >
                {status}
              </div>
            ))}
          </div>
        </div>
      </div>
      <ModalFooter
        onClose={() => {
          setSingleTask(undefined);
          setOpen(false);
        }}
        onSubmit={() => {
          onSave(taskInfo);
        }}
        disableSubmit={!taskInfo.title}
      />
    </div>
  );
};

export default CreateTodo;
