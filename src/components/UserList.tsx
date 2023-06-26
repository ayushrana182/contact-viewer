import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { GET_CONTACTS } from "../services/application/query";
import { IUser } from "../types";
import UserCard from "./UserCard";
import { Grid, Spinner, Center, Text } from "@chakra-ui/react";

const UserList: FC = () => {
  const { data, isLoading, error } = useQuery<IUser[]>(
    ["userList"],
    GET_CONTACTS,
    {
      retry: false,
    }
  );

  // loading
  if (isLoading) {
    return (
      <Center h="100vh">
        <Spinner />
      </Center>
    );
  }

  // error
  if (error) {
    return (
      <Center h="100vh">
        <Text>An error has occurred</Text>
      </Center>
    );
  }

  const users = data as IUser[];
  return (
    <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
      {users?.map((user) => (
        <UserCard key={user.id} users={user} />
      ))}
    </Grid>
  );
};

export default UserList;
