import React from 'react';

interface Todo {
    id: string;
    text: string;
}

interface ArchiveItem {
    todo: Todo;
    timestamp: string; // or Date 
}

interface ArchiveProps {
    archive: ArchiveItem[];
}

const Archive: React.FC<ArchiveProps> = ({archive}) => {
    console.log(archive)
    return (
        <div>
        <h1>Archive</h1>
        {archive.length > 0 ? (
            archive.map((item) => (
                <div key={item.todo.id}>
                    {item.todo.text}
                    <span>{new Date(item.timestamp).toUTCString()}</span>
                </div>
            ))
        ) : (
            <p>No items in the archive.</p>
        )}
    </div>
    );
};

export default Archive;