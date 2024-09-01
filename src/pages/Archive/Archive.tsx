import { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectArchive } from '../../redux/slices/archiveSlice';
import { RootState } from '../../redux/store';
import { Link } from 'react-router-dom';


const Archive: FC = () => {
    const archive = useSelector((state: RootState) => selectArchive(state));

    return (
        <div>
        <h1>Archive</h1>
        <Link to="/">Go to Home</Link>
        {archive && archive.length > 0 ? (
            archive.map((item) => (
                <div key={item.todo.id}>
                    <div><span>{item.todo.timestamp}</span>{item.todo.text}</div>
                </div>
            ))
        ) : (
            <p>No items in the archive.</p>
        )}
    </div>
    );
};

export default Archive;