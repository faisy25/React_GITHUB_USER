import { Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Card from "./Card";
import SearchBar from "./SearchBar";

const UsernameInput = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getUserData();
  }, [username]);

  let githubUrl = `https://api.github.com/users/${username}`;

  const getUserData = async () => {
    if (username) {
      const response = await fetch(githubUrl);
      const data = await response.json();

      if (data && data.message !== "Not Found") {
        setUserData(data);
      } else if (username !== "") {
        console.log("Username does not exist");
      } else {
        setUserData({});
      }
    }
  };

  return (
    <Flex
      w="full"
      direction="column"
      alignItems="center"
      justifyContent="center"
      py="5"
      textAlign="center"
    >
      <Heading as="h1" mb="8" fontSize="3xl" color="blue.700">
        GitHub Profile
      </Heading>
      <Flex direction="column" gap="50px">
        <SearchBar username={username} setUsername={setUsername} />
        {username && <Card userData={userData} />}
        {!username && (
          <Text color="blue.700" fontWeight="bold" fontSize="2xl">
            No User
          </Text>
        )}
      </Flex>
    </Flex>
  );
};

export default UsernameInput;

// const {
//   id: id,
//   url: avatar_url,
//   username,
//   name,
//   repos: public_repos,
//   gists: public_gists,
//   date: created_at
// } = data;

// const userProfile = data.map((user) => {
//   return {
//     id: user.id,
//     url: user.avatar_url,
//     username: user.username,
//     name: user.name,
//     repos: user.public_repos,
//     gists: user.public_gists,
//     createdAt: user.created_at
//   };
// });
// console.log(userProfile);
