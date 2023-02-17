import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainSearch from "./Components/MainSearch";
import SongNameSearchResults from "./Components/SongNameSearchResults";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainSearch />} />
          <Route path="/:songName" element={<SongNameSearchResults />} />
          {/* <Route path="/favourites" element={<Favourites />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
