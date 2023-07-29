import React, { useState } from 'react';

import "./AddNote.css";

const AddNote = () => {
    const [note, setNote] = useState("");
    return (
        <div className='add-note'>
            <div className='add-note-conatiner'>
                <input
                    className='add-note-input'
                    type='text'
                    placeholder='Add Notes'
                    value={note}
                    onChange={(event) => setNote(event.target.value)}
                />
                <button className='add-note-btn'>Add Note</button>
            </div>
        </div>
    )
}

export default AddNote;