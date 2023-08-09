const getDataFromLocalStorage = (key) => {
  let data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

const noteListFromLocalStorage = getDataFromLocalStorage("notes");
const watchLaterFromLocalStorage = getDataFromLocalStorage("watchLater");
const playListFromLocalStorage = getDataFromLocalStorage("playlist");


export const initial_state = {
  notes: noteListFromLocalStorage,
  watch_later: [],
  playlist: [
  {
    id: 1,
    name: "music",
    details: "dgfhhgfjj",
    listItems: [ 
        {
          _id: 19,
          title: 'Origami Swan - Simple and Elegant',
          views: 2879,
          chips: ['origami', 'swan', 'paper', 'elegant'],
          thumbnail: 'https://picsum.photos/300/174',
          src: 'https://www.youtube.com/embed/GBIIQ0kP15E',
          category: 'Origami',
          creator: 'PaperCraftPro',
        },
    ]
  }
  ],
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
        notes: [...state.notes].filter((note)=> note._id !== payload)
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
    default:
      return state;
  }
};
