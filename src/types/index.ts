// Type: Button
export type TButtonType = "primary" | "secondary";
export type TButton = {
  content: string;
  type: TButtonType;
  icon?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
};
// Type: Task
export type TTaskEvent = "To Do" | "In Progress" | "Done";
export type TPriority = "Low" | "Medium" | "High";
export type TTask = {
  id: number;
  title: string;
  priority: TPriority;
  status: TTaskEvent;
  completed: boolean;
};

// Type: Modal
export type TModal = {
  open: boolean;
  title: string;
  content: JSX.Element;
  onClose?: () => void;
  width?: string | number;
};
export type TModalFooter = {
  onClose?: () => void;
  onSubmit?: () => void;
  disableSubmit?: boolean;
};
