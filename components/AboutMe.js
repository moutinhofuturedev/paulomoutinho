import { Box, Flex, Icon, List, ListItem, SimpleGrid, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { SectionHeading } from './SectionHeading';
import { SiJavascript, SiHtml5, SiTailwindcss, SiChakraui, SiTypescript, SiReact, SiNextdotjs, SiFigma } from 'react-icons/si'

export function AboutMe(props) {
  return (
    <Flex
      as="section"
      justifyContent="space-between"
      alignItems="center"
      paddingY="100px"
      flexDirection={{ base: "column", md: "row" }}
    >
      <Box maxWidth="500px" id="about-me">
        <SectionHeading number="03.">Sobre mim</SectionHeading>
        <Text paddingY="10px" color="bodyText">
          {props.textOne}
        </Text>
        <Text paddingY="10px" color="bodyText">
          {props.textTwo}
          <Text paddingY="20px" color="bodyText">
            {props.textThree}
          </Text>
        </Text>
        <Text paddingY="4px" color="bodyText">
          {props.textFour}
        </Text>
        <Text paddingY="10px" color="bodyText">
          {props.textFive}
        </Text>

        <SimpleGrid
          as={List}
          columns={4}
          spacing={4}
          mt="4"
          pl="4"
          styleType="disc"
          color="bodyText"
        >
          <ListItem listStyleType={"none"}>
            <Icon as={SiHtml5} w={8} h={8} title="HTML5" />
          </ListItem>
          <ListItem listStyleType={"none"}>
            <Icon as={SiTailwindcss} w={8} h={8} title="TailwindCSS" />
          </ListItem>
          <ListItem listStyleType={"none"}>
            <Icon as={SiChakraui} w={8} h={8} title="ChakraUI" />
          </ListItem>
          <ListItem listStyleType={"none"}>
            <Icon as={SiJavascript} w={8} h={8} title="Javascript" />
          </ListItem>
          <ListItem listStyleType={"none"}>
            <Icon as={SiTypescript} w={8} h={8} title="Typescript" />
          </ListItem>
          <ListItem listStyleType={"none"}>
            <Icon as={SiReact} w={8} h={8} title="ReactJS" />
          </ListItem>
          <ListItem listStyleType={"none"}>
            <Icon as={SiNextdotjs} w={8} h={8} title="NextJS" />
          </ListItem>
          <ListItem listStyleType={"none"}>
            <Icon as={SiFigma} w={8} h={8} title="Figma" />
          </ListItem>
        </SimpleGrid>
      </Box>
      <Box paddingTop={8}>
        <Image
          height="500px"
          width="500px"
          src="/assets/paulomoutinho.jpg"
          alt="Paulo Moutinho"
          title="Paulo Moutinho"
          aria-label="Paulo Moutinho"
          objectFit="cover"
          objectPosition="center"
        />
      </Box>
    </Flex>
  );
}