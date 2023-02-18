/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainSearch from "./Components/MainSearch";
import SongNameSearchResults from "./Components/SongNameSearchResults";
import Favourites from "./Components/Favourites";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
require("react-dom");
window.React2 = require("react");
console.log(window.React1 === window.React2);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SongNameSearchResults("queen"));
  }, []);

  let searchResult = useSelector((state) => state.song);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {searchResult.length > 0 && (
            <Route path="/" element={<MainSearch />} />
          )}
          <Route path="/" element={<MainSearch />} />
          <Route path="/:songName" element={<SongNameSearchResults />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
