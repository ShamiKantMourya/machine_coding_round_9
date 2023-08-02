import React, { useState, useContext } from 'react';

import { DataContext } from '../../Context/DataContext';
import "./AddNote.css";
import { useParams } from 'react-router';

const AddNote = () => {
    const {id} = useParams();
    const [note, setNote] = useState({
        _id: id,
        text: "",
    });
    const{addDataDispatch} = useContext(DataContext);

    // console.log(note, "note");

    const addNotesHandler = () => {
        addDataDispatch({type: "add_notes", payload: note});
    };
    return (
        <div className='add-note'>
            <div className='add-note-conatiner'>
                <input
                    className='add-note-input'
                    type='text'
                    placeholder='Add Notes'
                    onChange={(event) => setNote((prevState) => ({
                        ...prevState, text: event.target.value,
                    }))}
                />
                <button className='add-note-btn' onClick={addNotesHandler}>Add Note</button>
            </div>
        </div>
    )
}

export default AddNote;