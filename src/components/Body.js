import {
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Body = () => {
  return (
    <>
      <Container maxWidth="5xl">
        <Flex mt={20}>
          <VStack width="50%" align="left">
            <Heading size="4xl">YOUR FEET DESERVE THE BEST</Heading>
            <Spacer />
            <Text as="i" marginTop={10}>
              YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
              SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
              OUR SHOES.
            </Text>
            <Spacer />
            <HStack spacing={2} marginTop={7}>
              <Button colorScheme="red" background="red">
                Shop Now
              </Button>
              <Button textColor="black" background="white" border="1px">
                Category
              </Button>
            </HStack>
            <Spacer />
            <Text marginTop={10}>Also Available On</Text>
            <HStack>
              <Image src="/images/flipkart.png" />
              <Image src="/images/amazon.png" />
            </HStack>
          </VStack>
          <Image width="50%" src="/images/shoe_image.png" />
        </Flex>
      </Container>
    </>
  );
};

export default Body;
