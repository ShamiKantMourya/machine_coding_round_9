import React, { useState, useContext } from "react";
import { v4 as uuid } from "uuid";

import { DataContext } from "../../Context/DataContext";
import "./AddNote.css";
import { useParams } from "react-router";

const AddNote = ({NoteId}) => {
  const { id } = useParams();
  const [note, setNote] = useState("");
  const { notes,addDataDispatch,setNoteId} = useContext(DataContext);

  const singleNote = notes.find((item) => item._id === NoteId);
  console.log({singleNote});
  // console.log(note, "note");

  const addNotesHandler = () => {
    addDataDispatch({
      type: "add_notes",
      payload: { text: note, videoId: id, _id: uuid() },
    });
    setNoteId(null);
  };
  return (
    <div className="add-note">
      <div className="add-note-conatiner">
        <input
          className="add-note-input"
          type="text"
          defaultValue={NoteId ? singleNote?.text : note}
          placeholder="Add Notes"
          onChange={(event) => setNote(event.target.value)}
        />
        <button className="add-note-btn" onClick={addNotesHandler}>
        { NoteId ? "Update Note" : "Add Note"}
        </button>
      </div>
    </div>
  );
};

export default AddNote;
