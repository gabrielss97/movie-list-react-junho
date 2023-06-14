/* eslint-disable react/prop-types */
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <Flex
      key={movie.id}
      flexDirection={"column"}
      borderRadius={"15px"}
      overflow={"hidden"}
      background={"gray.200"}
    >
      <Image
        height={"600px"}
        src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
      ></Image>
      <Box p={"1rem"}>
        <Text
          as={"h3"}
          fontSize={"1.5rem"}
          marginBottom={"0.5rem"}
          textAlign={"center"}
        >
          {movie.title}
        </Text>
        <Flex justifyContent={"center"}>
          <Link to={`/movie/${movie.id}`}>
            <Box
              background={"blue"}
              color={"white"}
              maxWidth={"150px"}
              p={"0.3rem 1rem"}
              borderRadius={"5px"}
              textAlign={"center"}
            >
              Ver detalhes
            </Box>
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
}
