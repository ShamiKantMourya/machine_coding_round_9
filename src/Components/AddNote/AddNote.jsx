import React, { useState, useContext } from "react";
import { v4 as uuid } from "uuid";

import { DataContext } from "../../Context/DataContext";
import "./AddNote.css";
import { useParams } from "react-router";

const AddNote = () => {
  const { id } = useParams();
  const [note, setNote] = useState("");
  const { addDataDispatch} = useContext(DataContext);

  // console.log(note, "note");

  const addNotesHandler = () => {
    addDataDispatch({
      type: "add_notes",
      payload: { text: note, videoId: id, _id: uuid() },
    });
  };
  return (
    <div className="add-note">
      <div className="add-note-conatiner">
        <input
          className="add-note-input"
          type="text"
          placeholder="Add Notes"
          onChange={(event) => setNote(event.target.value)}
        />
        <button className="add-note-btn" onClick={addNotesHandler}>
         Add Note
        </button>
      </div>
    </div>
  );
};

export default AddNote;
