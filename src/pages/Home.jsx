import { useEffect, useState } from "react";
import movieService from "../api/MovieService";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const { data } = await movieService.getMovies();
    setMovies(data.results);
  }

  async function getMoviesSearch(movieName) {
    const { data } = await movieService.getMoviesSearch(movieName);
    setMovies(data.results);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <Header search={true} getMoviesSearch={getMoviesSearch} />
      <Flex flexWrap={"wrap"} gap={"2rem"} p={"3rem"} justifyContent={"center"}>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </Flex>
    </div>
  );
}
