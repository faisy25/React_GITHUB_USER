import { Box, FormControl, Input, Button, FormLabel } from "@chakra-ui/react";

const submitHandler = (e) => {
  e.preventDefault();
};

const searchBar = ({ username, setUsername }) => {
  const onChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <Box
      w="550px"
      h="200px"
      alignItems="center"
      justify="center"
      border="1px"
      borderColor="gray.200"
      p="5"
      bgGradient="linear(to-r , blue.200, blue.500)"
    >
      <form onSubmit={submitHandler}>
        <FormControl id="email">
          <FormLabel color="blue.700" fontWeight="bold">
            USERNAME
          </FormLabel>
          <Input
            type="username"
            placeholder="Username"
            value={username}
            borderColor="blue.700"
            bgColor="white"
            onChange={(event) => {
              onChange(event);
            }}
            onKeyUp={(event) => {
              onChange(event);
            }}
            onPaste={(event) => {
              onChange(event);
            }}
          />

          <Button type="submit" mt="4" color="blue.700">
            Search
          </Button>
        </FormControl>
      </form>
    </Box>
  );
};
export default searchBar;
