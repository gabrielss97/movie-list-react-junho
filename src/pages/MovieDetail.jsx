/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import movieService from "../api/MovieService";
import { useEffect, useState } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function MovieDetail() {
  const { id } = useParams(); // resultar em: { id: 603692 }

  const [movie, setMovie] = useState({});

  async function getMovie() {
    const { data } = await movieService.getMoviesDetail(id);
    setMovie(data);
  }

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <Flex flexDir={"column"} alignItems={"center"} gap={"2rem"}>
      <Header search={false} />
      <Flex
        flexDir={"column"}
        alignItems={"center"}
        gap={"2rem"}
        padding={"2rem"}
      >
        <Image
          maxW={"1200px"}
          borderRadius={"15px"}
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        ></Image>
        <Box maxW={"1200px"}>
          <Text as={"h1"} fontSize={"2rem"} fontWeight={"bold"}>
            {movie.title}
          </Text>
          <Text as={"p"}>
            <Text fontWeight={"bold"}>Budget</Text>
            {movie.budget}
          </Text>
          <Text as={"p"}>
            <Text fontWeight={"bold"}>Overview</Text>
            {movie.overview}
          </Text>
        </Box>
      </Flex>

      <Link to={"/"}>
        <Text
          marginBottom={"2rem"}
          background={"blue"}
          p={"0.3rem 3rem"}
          borderRadius={"10px"}
          color={"white"}
          height={"2rem"}
        >
          Voltar
        </Text>
      </Link>
    </Flex>
  );
}
