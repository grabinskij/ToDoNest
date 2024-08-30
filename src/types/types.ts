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
    timestamp: Date;
    key: number;
  }
  
  export interface ArchiveState {
    archive: ArchivedTodo[];
  }
  
  export interface ArchiveProps {
    archive: ArchivedTodo[];
  }

  export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    disabled?: boolean;
  }

