import { ArchivedTodo, Todo } from '../types/types';

export const createArchiveItems = (todos: Todo[], timestamp: string): ArchivedTodo[] => {
  return todos.map((todo) => ({
    todo,
    archiveTimestamp: timestamp,
    key: todo.id
  }));
}
