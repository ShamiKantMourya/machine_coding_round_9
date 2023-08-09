import React, { useEffect, useState } from "react";
import { createContext, useReducer } from "react";

import { initial_state, reducer } from "../Reducer/DataReducer";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial_state);
  const { notes, watch_later,playlist } = state;
  const [noteId, setNoteId] = useState(null);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("watchlater", JSON.stringify(watch_later));
  }, [notes, watch_later]);

  return (
    <DataContext.Provider
      value={{ notes, watch_later,playlist, addDataDispatch: dispatch,noteId, setNoteId }}
    >
      {children}
    </DataContext.Provider>
  );
};
