import { Button, Modal } from "components";
import { PlusIcon } from "icons";
import { useEffect, useState } from "react";
import { TTask } from "types";
import { priorityList } from "utils";
import CreateTodo from "./CreateTodo";
import Task from "./Task";

const TodoList = () => {
  // States
  const [task, setTask] = useState<TTask[]>([]);
  const [open, setOpen] = useState(false);
  const [singleTask, setSingleTask] = useState<TTask>();
  const [selectedPriority, setSelectedPriority] = useState<string>("All");

  // Effect to load tasks from localStorage on initial render
  useEffect(() => {
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
      setTask(JSON.parse(tasks));
    }
  }, []);

  // Effect to save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  // Function to remove a task
  const removeTask = (taskId: number) => {
    const updatedTask = task.filter((task) => task.id !== taskId);
    setTask(updatedTask);
  };

  // Function to edit a task
  const editTask = (task: TTask) => {
    setSingleTask(task);
    setOpen(true);
  };

  // Function to update a task
  const updateTask = (taskInfo: TTask) => {
    const updatedTasks = task.map((t) => (t.id === taskInfo.id ? taskInfo : t));
    setTask(updatedTasks);
  };

  // Function to create a task
  const createTask = (taskInfo: TTask) => {
    const lastId = task.length > 0 ? Math.max(...task.map((t) => t.id)) : 0;
    const taskWithNewId = { ...taskInfo, id: lastId + 1 };
    setTask((prevTasks) => [...prevTasks, taskWithNewId]);
  };

  // Function to update priority
  const upatePriority = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPriority(e.target.value);
  };

  // Function to save a task
  const onSave = (taskInfo: TTask) => {
    if (taskInfo.id) {
      updateTask(taskInfo);
    } else {
      createTask(taskInfo);
    }
    setSingleTask(undefined);
    setOpen(false);
  };

  // Filter tasks based on priority
  const filteredTasks = task.filter(
    (task) => selectedPriority === "All" || task.priority === selectedPriority
  );
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
          <select
            className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-shadow  duration-300"
            value={selectedPriority}
            onChange={upatePriority}
          >
            {["All", ...priorityList].map((priority) => (
              <option key={priority} value={priority}>
                {priority}
              </option>
            ))}
          </select>
        </div>
        {/* <============Task List ============> */}
        <div className="flex flex-col gap-3">
          {filteredTasks.length === 0 ? (
            <div className="flex flex-col justify-center items-center gap-2 p-3 border rounded-lg">
              <h3 className="text-medium font-bold text-secondary">
                {selectedPriority === "All"
                  ? "No Task Found"
                  : `No ${selectedPriority} Priority Task Found`}
              </h3>
              <p className="text-small text-secondary">
                Click on "New Task" to add new task
              </p>
            </div>
          ) : (
            filteredTasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                editTask={editTask}
                removeTask={removeTask}
              />
            ))
          )}
        </div>
      </div>
      {/* Task Create/Edit Modal */}
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
      />
    </>
  );
};

export default TodoList;
