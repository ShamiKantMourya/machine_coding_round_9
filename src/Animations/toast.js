import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const addWatchLater = () => {
  toast("Added to watch later", {
    style: {
      fontSize: "14px",
      borderRadius: "10px",
      background: "gray",
      color: "whitesmoke",
    },
  });
};

export const removeWatchLater = () => {
  toast("Removed from watch later", {
    style: {
      fontSize: "14px",
      borderRadius: "10px",
      background: "red",
      color: "whitesmoke",
    },
  });
};
export const addNote = () => {
    toast("Note Added", {
      style: {
        fontSize: "14px",
        borderRadius: "10px",
        background: "gray",
        color: "whitesmoke",
      },
    });
  };
export const noteUpdate = () => {
  toast("Note Updated", {
    style: {
      fontSize: "14px",
      borderRadius: "10px",
      background: "gray",
      color: "whitesmoke",
    },
  });
};

export const noteDeleted = () => {
  toast("Note deleted", {
    style: {
      fontSize: "14px",
      borderRadius: "10px",
      background: "red",
      color: "whitesmoke",
    },
  });
};

export const playListCreate = () => {
  toast("Playlist created", {
    style: {
      fontSize: "14px",
      borderRadius: "10px",
      background: "gray",
      color: "whitesmoke",
    },
  });
};

export const deletedPlayList = () => {
  toast("Playlist deleted", {
    style: {
      fontSize: "14px",
      borderRadius: "10px",
      background: "red",
      color: "whitesmoke",
    },
  });
};

export const addedPlayList = () => {
  toast("Added to playlist", {
    style: {
      fontSize: "14px",
      borderRadius: "10px",
      background: "gray",
      color: "whitesmoke",
    },
  });
};