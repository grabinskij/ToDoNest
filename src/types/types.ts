export interface Todo {
    id: string;
    timestamp: string;
    text: string;
    isCompleted: boolean;
    isEdited: boolean;
  }
  
  export interface TodoProps {
    todo: Todo;
  }

  export interface TodosState {
    todos: Todo[];
  }

  export interface ArchivedTodo {
    todo: Todo;
    archiveTimestamp: string;
    key: string;
  }
  
  export interface ArchiveState {
    archive: ArchivedTodo[];
  }

  export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    disabled?: boolean;
  }

