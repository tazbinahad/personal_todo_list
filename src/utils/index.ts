import { TPriority, TTask } from "types";

export const taskList: TTask[] = [
  {
    id: 1,
    title: "Task 1",
    status: "To Do",
    priority: "Low",
  },
];

export const priorityList: TPriority[] = ["Low", "Medium", "High"];
export const statusList: string[] = ["To Do", "In Progress", "Done"];
