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
          Olá! Eu sou o Paulo, um desenvolvedor de software com foco em front end. Moro em 
          Suzano - SP, Brasil.
        </Text>
        <Text paddingY='10px' color='bodyText'>
          Minha jornada na programação começou em 2021, depois de anos fadigado na logística, fiz um curso básico de Javascript no Senai 
          e logo depois, conheci a Rocketseat, onde me apaixonei ainda mais pelo programação e o ecosistema 
          em torno do Javascript.
          <Text paddingY='20px' color='bodyText'>
            Atualmente, faço parte da Viahub, o HUB tecnológico da Via e voltado para o E-commerce. 
            Sou da squad de SEO, e sou responsável por desenvolver através de código, estratégias e métricas
            para melhorar o SEO das páginas de Casas Bahia, Ponto e Extra.
          </Text>
        </Text>
        <Text paddingY='4px' color='bodyText'>
          Quando não estou programando, minha outra atividade é como Team Leader em uma equipe de 
          tecnologia e transmissão na minha comunidade cristã, a Igreja Cristã Mundial. Sou responsável por 
          coordenar a equipe em escalas e ajudar na implantação de softwares dedicados e treinamentos para 
          facilitar o uso do voluntário. 
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
