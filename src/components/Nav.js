import { Box, Button, HStack, Image } from "@chakra-ui/react";
import React from "react";

const Nav = () => {
  return (
    <>
      <Box marginLeft={10} marginRight={10} padding={5} h={20}>
        <HStack justify="space-between">
          <Image src="/images/brand_logo.png" />
          <HStack spacing={20}>
            <Button colorScheme="black" variant="link">
              MENU
            </Button>
            <Button colorScheme="black" variant="link">
              LOCATION
            </Button>
            <Button colorScheme="black" variant="link">
              ABOUT
            </Button>
            <Button colorScheme="black" variant="link">
              CONTACT
            </Button>
          </HStack>
          <Button colorScheme="red" background="red">
            Login
          </Button>
        </HStack>
      </Box>
    </>
  );
};

export default Nav;
