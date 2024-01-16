import { TPriority, TTask } from "types";

// Configurations Data
export const priorityList: TPriority[] = ["Low", "Medium", "High"];
export const statusList: string[] = ["To Do", "In Progress", "Done"];
export const dummyTask: TTask[] = [
  {
    id: 1,
    title: "Task 1",
    priority: "Low",
    status: "To Do",
    completed: false,
  },
  {
    id: 2,
    title: "Task 2",
    priority: "Medium",
    status: "In Progress",
    completed: false,
  },
  {
    id: 3,
    title: "Task 3",
    priority: "High",
    status: "Done",
    completed: false,
  },
  {
    id: 4,
    title: "Task 4",
    priority: "High",
    status: "Done",
    completed: true,
  },
];
