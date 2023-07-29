import {Routes, Route} from "react-router-dom";

import './App.css';
import HomePage from "./Pages/HomePage/HomePage";
import WatchLater from "./Pages/WatchLater/WatchLater";
import Explore from "./Pages/Explore/Explore";
import Playlist from "./Pages/Playlist/Playlist";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/" element = {<HomePage />} />
      <Route path="/explore" element = {<Explore />} />
      <Route path="/playlist" element = {<Playlist />} />
      <Route path="/watchlater" element = {<WatchLater />} />

      <Route path="*" element = {<PageNotFound />} />
     </Routes>
    </div>
  );
}

export default App;
