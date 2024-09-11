import { v4 as uuidv4 } from 'uuid';
import formatDate from './formatDate';
import { TodoInput} from '../types/types';

const createTodoWithId = (input: TodoInput) => {
    const timestamp = formatDate(new Date());
    return {
        timestamp,
        ...input,
        isCompleted: false,
        isEdited: false,
        id: uuidv4(),
    }
}

export default createTodoWithId;