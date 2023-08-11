const getDataFromLocalStorage = (key) => {
  let data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

const noteListFromLocalStorage = getDataFromLocalStorage("notes");
const watchLaterFromLocalStorage = getDataFromLocalStorage("watchLater");
const playListFromLocalStorage = getDataFromLocalStorage("playlist");

export const initial_state = {
  notes: noteListFromLocalStorage,
  watch_later: watchLaterFromLocalStorage,
  playlist: playListFromLocalStorage,
};

export const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "add_notes":
      return {
        ...state,
        notes: [...state.notes, payload],
      };
    case "delete_note":
      return {
        ...state,
        notes: [...state.notes].filter((note) => note._id !== payload),
      };
    case "watch_video_later":
      return {
        ...state,
        watch_later: [...state.watch_later, payload],
      };
    case "remove_from_watch_later":
      return {
        ...state,
        watch_later: [...state.watch_later].filter(
          (video) => video._id !== Number(payload)
        ),
      };
    case "add_to_playlist":
      return {
        ...state,
        playlist: [...state.playlist, payload],
      };
    case "delete_playlist":
      return {
        ...state,
        playlist: [...state.playlist].filter(
          (data) => data._id !== payload
        ),
      };
    default:
      return state;
  }
};
