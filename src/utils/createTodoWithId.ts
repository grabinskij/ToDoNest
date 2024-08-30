import { v4 as uuidv4 } from 'uuid';
import formatDate from './formatDate';

const createTodoWithId = (text:string) => {
    const timestamp = formatDate(new Date());
    return {
        timestamp,
        text,
        isCompleted: false,
        isEdited: false,
        id: uuidv4(),
    }
}

export default createTodoWithId;