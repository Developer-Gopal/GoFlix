import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Header";
import Home from "./routes/home";
import TvShows from "./routes/TvShows";
import Movies from "./routes/Movies";
import NewPopular from "./routes/TopRated";
import MyList from "./routes/MyList";
import BrowseByLanguage from "./routes/BrowseByLanguage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow pt-18">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tvshows" element={<TvShows />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/top_rated" element={<NewPopular />} />
            <Route path="/mylist" element={<MyList />} />
            <Route path="/language?" element={<BrowseByLanguage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
