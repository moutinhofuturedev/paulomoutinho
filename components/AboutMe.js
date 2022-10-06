import { Box, Flex, Icon, List, ListItem, SimpleGrid, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import SectionHeading from './SectionHeading';
import { SiJavascript, SiHtml5, SiTailwindcss, SiChakraui, SiTypescript, SiReact, SiNextdotjs, SiFigma } from 'react-icons/si'

function AboutMe() {
  return (
    <Flex
      as='section'
      justifyContent='space-between'
      alignItems='center'
      paddingY='100px'
      flexDirection={{ base: 'column', md: 'row' }}
    >
      <Box maxWidth='500px' id='about-me'>
        <SectionHeading number='03.'>Sobre mim</SectionHeading>
        <Text paddingY='10px' color='bodyText'>
          Olá! Eu sou o Paulo, um desenvolvedor Front End na Via. Moro em 
          Suzano - SP, Brasil.
        </Text>
        <Text paddingY='10px' color='bodyText'>
          Through my experience at Chakra UI, I’ve had the opportunity to
          contribute to open source, advocate towards building a faster web and
          creating a vibrant developer community.
          <Text paddingY='20px' color='bodyText'>
            In my previous role at Animalz, I leveraged my knowledge and
            experience as a software developer to create relevant, trustworthy
            content for several technical audiences. The topic span from
            accessibility to test automation, localization, etc
          </Text>
        </Text>
        <Text paddingY='4px' color='bodyText'>
          When I’m not behind the screen, I love to take product photographs,
          advocate for remote work via freelancing, play video games and
          sometimes create beautiful pieces of jewelry.
        </Text>
        <Text paddingY='10px' color='bodyText'>
        Aqui estão algumas tecnologias com as quais tenho trabalhado recentemente:
        </Text>

        <SimpleGrid
          as={List}
          columns={4}
          spacing={4}
          mt="4"
          pl='4'
          styleType='disc'
          color='bodyText'
        >
          <ListItem listStyleType={'none'}><Icon as={SiHtml5} w={8} h={8} title="HTML5"/></ListItem>
          <ListItem listStyleType={'none'}><Icon as={SiTailwindcss} w={8} h={8} title="TailwindCSS"/></ListItem>
          <ListItem listStyleType={'none'}><Icon as={SiChakraui} w={8} h={8} title="ChakraUI"/></ListItem>
          <ListItem listStyleType={'none'}><Icon as={SiJavascript} w={8} h={8} title="Javascript"/></ListItem>
          <ListItem listStyleType={'none'}><Icon as={SiTypescript} w={8} h={8} title="Typescript"/></ListItem>
          <ListItem listStyleType={'none'}><Icon as={SiReact} w={8} h={8} title="ReactJS"/></ListItem>
          <ListItem listStyleType={'none'}><Icon as={SiNextdotjs} w={8} h={8} title="NextJS"/></ListItem>
          <ListItem listStyleType={'none'}><Icon as={SiFigma} w={8} h={8} title="Figma"/></ListItem>
        </SimpleGrid>
      </Box>
      <Box paddingTop={8}>
        <Image
          height='500px'
          width='500px'
          src='/assets/paulomoutinho.jpg'
          alt='Folasade Agbaje'
          objectFit='cover'
          objectPosition='center'
        />
      </Box>
    </Flex>
  );
}

export default AboutMe;
