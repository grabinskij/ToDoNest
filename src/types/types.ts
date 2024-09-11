export interface Todo {
    id: string;
    timestamp: string;
    title: string; 
    dueDate?: string; 
    time?: string; 
    note?: string; 
    isCompleted: boolean;
    isEdited: boolean;
  }
  
  export interface TodoProps {
    todo: Todo;
  }

  export interface TodosState {
    todos: Todo[];
  }

  export interface TodoInput {
    title: string;
    dueDate?: string;
    note?: string;
}

export interface TodoEditInput {
    id: string;
    title: string;
    dueDate?: string;
    time?: string;
    note?: string;
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

