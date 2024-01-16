// Task.tsx
import { Edit, Trash } from "icons";
import { TTask } from "types";

type TaskProps = {
  task: TTask;
  removeTask: (taskId: number) => void;
  editTask: (task: TTask) => void;
};

const Task: React.FC<TaskProps> = ({ task, removeTask, editTask }) => {
  return (
    <div className="flex flex-col justify-between items-center p-3 border rounded-lg sm:flex-row">
      {/* Task Details */}
      <div className="flex flex-col items-center gap-1 sm:items-start">
        <h3 className="text-medium font-bold text-secondary">{task.title}</h3>
        <div className="flex gap-2">
          {/* Priority */}
          <p className="flex items-center gap-2 font-semibold text-small">
            <span>Priority:</span>
            <span
              className={`${
                task.priority === "High"
                  ? "text-red-500"
                  : task.priority === "Medium"
                  ? "text-yellow-500"
                  : "text-primary"
              }`}
            >
              {task.priority}
            </span>
          </p>
          {/* Status */}
          <p className="flex items-center gap-2 font-semibold text-small">
            <span>Status:</span>
            <span className="text-primary-dark">{task.status}</span>
          </p>
        </div>
      </div>
      {/* Action Icons */}
      <div className="flex items-center gap-4 text-red-500 ">
        <Edit
          className="cursor-pointer fill-secondary hover:fill-secondary-dark transition-all duration-300"
          onClick={() => editTask(task)}
        />
        <Trash
          className="cursor-pointer fill-red-500 hover:fill-red-600 transition-all duration-300"
          onClick={() => removeTask(task.id)}
        />
      </div>
    </div>
  );
};

export default Task;
