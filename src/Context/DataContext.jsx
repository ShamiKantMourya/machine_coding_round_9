import React, { useEffect, useState } from "react";
import { createContext, useReducer } from "react";

import { initial_state, reducer } from "../Reducer/DataReducer";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial_state);
  const { notes, watch_later,playlist } = state;
  const [noteId, setNoteId] = useState(null);
  const [playlistModel, setPlaylistModel] = useState(false);
  const [model, setModel] = useState(false);
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("watchlater", JSON.stringify(watch_later));
    localStorage.setItem("playlist", JSON.stringify(playlist));
  }, [notes, watch_later,playlist]);

  return (
    <DataContext.Provider
      value={{ notes, watch_later,playlist, addDataDispatch: dispatch,noteId, setNoteId,playlistModel, setPlaylistModel, videoId, setVideoId, model, setModel }}
    >
      {children}
    </DataContext.Provider>
  );
};
