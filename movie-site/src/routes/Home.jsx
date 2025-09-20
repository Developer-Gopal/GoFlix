import React from "react";
import TrendingMovies from "../components/TrendingMovies";

const Home = () => {
  return (
    <>
      <div className="bg 2xl:container mx-auto">
        {/* Hero section (full height only if you want Netflix-style) */}
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
          <div className="flex flex-row justify-center items-center">
            <div>
              <img
                className="max-w-full slide-in-blurred-top"
                src="./homePagemovieTitle.png"
                alt="title_name"
              />
              <div className="space-x-4 pt-4">
                <button className="bg-white text-black px-6 md:px-14 py-2 slide-in-blurred-top">
                  Play
                </button>
                <button className="bg-white/20 text-white px-6 md:px-14 py-2 slide-in-blurred-top">
                  More Info
                </button>
              </div>
            </div>
          </div>
          <div></div>
        </div>

        {/* Trending section */}
      </div>
      <div>
        <TrendingMovies />
      </div>
    </>
  );
};

export default Home;
