import { Box, Text, Badge, Heading, Image } from "@chakra-ui/react";
import { FC } from "react";
import { IUser } from "../types";

const UserCard: FC<{ users: IUser }> = ({ users }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" mb={6}>
      <Image
        src={`https://avatars.dicebear.com/api/human/${users.id}.svg`}
        alt={users.name}
        height="200px"
        width="full"
      />
      <Box p="6">
        <Box alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            mt="1"
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="semibold"
            color="teal.600"
          >
            {users.company.name}
          </Box>
        </Box>

        <Heading mt={2} mb={2} as="h4" size="md">
          {users.name}
        </Heading>

        <Text color="gray.500">Email: {users.email}</Text>

        <Text color="gray.500">Phone: {users.phone}</Text>

        <Text color="gray.500">Website: {users.website}</Text>

        <Text color="gray.500">
          Address: {users.address.street}, {users.address.suite},{" "}
          {users.address.city}
        </Text>

        <Text color="gray.500">Company: {users.company.name}</Text>
      </Box>
    </Box>
  );
};
export default UserCard;
