import { Text, FormControl, Flex, Input } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
export default function Header({ search, getMoviesSearch }) {
  function handleChange(event) {
    const searchValue = event.target.value; // Busca o valor do input

    getMoviesSearch(searchValue);
  }

  return (
    <Flex
      p={"10"}
      justifyContent={"space-between"}
      alignItems={"center"}
      bg={"#f6f6f6"}
      width={"100%"}
    >
      <Text fontSize={"5xl"} fontWeight={"bold"} textAlign={"center"}>
        Movie List
      </Text>

      {search && (
        <FormControl width={"300px"}>
          <Input
            type="text"
            placeholder="Procure seu filme aqui!"
            onChange={handleChange}
          />
        </FormControl>
      )}
    </Flex>
  );
}
