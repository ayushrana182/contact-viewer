import {
  useColorMode,
  IconButton,
  useColorModeValue,
  IconButtonProps,
  Heading,
  Box,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { FC } from "react";

export const ColorModeSwitcher: FC<IconButtonProps> = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("Dark", "Light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <Box
      as="nav"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="1.5rem"
      color={text}
    >
      <IconButton
        size="lg"
        marginLeft="2"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        {...props}
      />
      <Heading as="h3" size="lg" textAlign="center" flexGrow={1}>
        Contact Viewer
      </Heading>
      <Box flex="1" />
    </Box>
  );
};
