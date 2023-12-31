import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import './App.css';
import HomePage from "./Pages/HomePage/HomePage";
import WatchLater from "./Pages/WatchLater/WatchLater";
import Explore from "./Pages/Explore/Explore";
import Playlist from "./Pages/Playlist/Playlist";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Category from "./Components/category/Category";
import VideoPage from "./Components/VideoPage/VideoPage";
import PlaylistVideos from "./Pages/PlaylistVideos";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/:category" element={<Category />} />
        <Route path="/category/:id" element = {<VideoPage />} />
        <Route path="/playlist/:id" element = {<PlaylistVideos />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer 
      position="bottom-right"
      reverseOrder={false}
      containerStyle={{
        top: "4rem",
      }}
      />
    </div>
  );
}

export default App;
