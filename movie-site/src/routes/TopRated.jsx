import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import MovieCard from "../components/MovieCard";
import Search from "../components/Search";

const API_BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const TopRated = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchMovies = async (query = "") => {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const endpoint = query
        ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/movie/top_rated?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();
      console.log(data);
      const filterMovies = data.results.filter((movie) => !movie.adult);

      if (filterMovies.length === 0) {
        setMovieList([]);
        setErrorMessage("Movie Not Found");
      } else {
        setMovieList(filterMovies);
      }
    } catch (err) {
      console.error(`Error fetching movies : ${err}`);
      setErrorMessage("Error Fetching movies please try again later");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(searchTerm);
  }, [searchTerm]);

  return (
    <div className="2xl:container mx-auto pb-6 bg-[#232323] ">
      <div className="w-[90%] mx-auto text-white slide-in-blurred-top">
        <div className="flex flex-row justify-between">
          <h1 className="text-[24px] font-sans py-4 flex justify-start">
            Top Rated Movies
          </h1>
          <div className="py-4">
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
        </div>

        <div className="flex flex-col items-center">
          {isLoading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul className="text-white grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopRated;
