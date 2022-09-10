import React from "react";
import { Box, Image, Text, Stack, Flex } from "@chakra-ui/react";

const Card = ({ userData }) => {
  const date = new Date(userData.created_at);

  return (
    <Box
      p="10"
      display={{ md: "flex" }}
      maxWidth="32rem"
      borderWidth={1}
      mx="auto"
      boxShadow="lg"
      rounded="lg"
      bgGradient="linear(blue.100 0%, teal.100 25%, green.100 50%)"
    >
      <Flex direction="column">
        <Image
          maxWidth="200px"
          margin="auto"
          src={userData.avatar_url}
          alt="profile_image"
          mb="10"
        />

        <Stack
          align={{ base: "center", md: "stretch" }}
          textAlign={{ base: "center", md: "left" }}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
        >
          <Text
            fontWeight="bold"
            textTransform="capitalize"
            fontSize="lg"
            letterSpacing="wide"
            color="blue.700"
          >
            Username : {userData.login}
          </Text>
          <Text
            fontWeight="bold"
            textTransform="capitalize"
            fontSize="lg"
            letterSpacing="wide"
            color="blue.700"
          >
            Name : {userData.name}
          </Text>
          <Text
            fontWeight="bold"
            textTransform="capitalize"
            fontSize="lg"
            letterSpacing="wide"
            color="blue.700"
          >
            Public Repos : {userData.public_repos}
          </Text>
          <Text
            fontWeight="bold"
            textTransform="capitalize"
            fontSize="lg"
            letterSpacing="wide"
            color="blue.700"
          >
            Public Gists : {userData.public_gists}
          </Text>
          <Text
            fontWeight="bold"
            textTransform="capitalize"
            fontSize="lg"
            letterSpacing="wide"
            color="blue.700"
          >
            Created At : {date.toDateString()}
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Card;
