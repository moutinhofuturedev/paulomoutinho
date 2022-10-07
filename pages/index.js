import { Box, Button, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import AboutMe from '../components/AboutMe';
import BlogCard from '../components/BlogCard';
import Header from '../components/Header';
import { LeftBar } from '../components/LeftBar';
import Projects from '../components/Projects';
import { RightBar } from '../components/RightBar';
import SectionHeading from '../components/SectionHeading';
import { VideoSection } from '../components/VideoCard';

function Main(props) {
  return (
    <Box
      as='main'
      maxW='1400px'
      mx='auto'
      minH='100vh'
      paddingX={{ base: '32px', md: '100px' }}
      {...props}
    />
  );
}

function App() {
  return (
    <>
      <Head>
        <title>Paulo Moutinho | Portfólio</title>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          // href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          // href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          // href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
        <meta name='description' content='Online Portfolio' />
        <meta
          name='robots'
          content='max-snippet:-1, max-image-preview:large, max-video-preview:-1'
        />
        <link rel='canonical' href='https://estheragbaje.dev/' />
        <meta property='og:locale' content='en_US' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Paulo Moutinho | Portfolio' />
        <meta property='og:description' content='Paulo Moutinho Portfolio' />
        <meta property='og:url' content='https://estheragbaje.dev/' />
        <meta property='og:site_name' content='Online Portfolio' />
        <meta property='og:image' content='yourimage.jpg' />
        <meta
          property='og:image:secure_url'
          content='/assets/paulomoutinho.jpg'
        />
        <meta property='og:image:width' content='1280' />
        <meta property='og:image:height' content='720' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:description' content='Paulo Moutinho Portfolio' />
        <meta name='twitter:title' content='Paulo Moutinho | Portfolio' />
        <meta name='twitter:image' content='/assets/paulomoutinho.jpg' />
      </Head>
      <Box bg='generalBackground' color='bodyText'>
        <Header />
        <LeftBar />
        <RightBar />
        <Main>
          <Box paddingY='80px'>
            <Text color='highlight' mb='20px'>
              Olá, meu nome é
            </Text>
            <Heading
              fontWeight='bold'
              fontSize={{ base: '32px', md: '60px' }}
              color='headingText'
            >
              Paulo Moutinho.
              <br></br>Software Engineer 🕹 | Front End
            </Heading>

            <Text
              lineHeight='tall'
              color='bodyText'
              mt={8}
              maxWidth='760px'
              fontSize='lg'
            >
              Sou um desenvolvedor iniciando uma jornada no mundo da programação e suas tecnologias incríveis.
              Atualmente, trabalho como Software Engineer Junior na compania Via, atuando com as tecnologias 
              mais modernas no Front End para melhorar o SEO das páginas de Casas Bahia, Extra e Ponto.
            </Text>
            <Button
              variant='outline'
              marginY='60px'
              size='lg'
              colorScheme='teal'
              as='a'
              href='mailto:paulo_vicali@icloud.com'
            >
              Entrar em contato
            </Button>
          </Box>
          <Box paddingY='150px'>
            <SectionHeading number='01.' id='videos'>
              Vídeos Favoritos
            </SectionHeading>
            <VideoSection />
            {/* <Button
              variant='outline'
              size='lg'
              textAlign='center'
              colorScheme='teal'
              as='a'
              href='https://www.youtube.com/channel/UCE9INRGNwdJVAyrkYHkNAnQ'
              target='_blank'
            >
              View more videos
            </Button> */}
          </Box>
          <Box paddingY='150px'>
            <SectionHeading number='02.' id='blogs'>
              Artigos em destaque
            </SectionHeading>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing='20px'>
              <BlogCard
                link='https://dev.to/estheragbaje/the-beginners-guide-to-building-an-accessible-web-5eea'
                title='The beginners guide to building an accessible web'
                details='Accessibility (a11y) is an essential part of web development because it provides unrestricted access to millions of users. Unfortunately...'
                date='24th March, 2022'
              />
              <BlogCard
                link='https://dev.to/estheragbaje/5-popular-frontend-development-tools-in-2021-1pg2'
                title='5 Popular Frontend Development Tools in 2021'
                details="The increasing number of frontend developer tools out there make it difficult to decide which to pick for your next project. I've compiled five popular frontend..."
                date='15th November, 2021'
              />
              <BlogCard
                link='https://dev.to/estheragbaje/6-awesome-tools-that-turn-code-snippets-to-images-54fo'
                title='6 Awesome Tools that turn code snippets to images'
                details="You\'ve probably seen images like this on Twitter, Instagram, blogs e.t.c. But have you ever wondered how these images are created?. Well, today I'm going..."
                date='21st June, 2021'
              />
              <BlogCard
                link='https://dev.to/estheragbaje/debunking-5-popular-coding-myths-293'
                title='Debunking 5 Popular Coding Myths'
                details='I get a lot of messages from people asking how I started my coding journey. When I tell them, the next response is usually, “I’ll love to start also, but...'
                date='28th December, 2020'
              />
              <BlogCard
                link='https://dev.to/estheragbaje/how-to-build-a-simple-form-with-validation-using-yup-and-formik-beginner-friendly-521j'
                title='How to build a simple form with validation using yup and formik'
                details="Just imagine the frustration that may come from filling a poorly validated form :( You'll probably bounce off the page. On surface level, forms are very..."
                date='3rd June, 2020'
              />

              <BlogCard
                link='https://dev.to/estheragbaje/how-to-use-react-hooks-to-create-a-counter-component-1bmp'
                title='How to use React Hooks to create a Counter Component'
                details="Have you been looking for the simplest way to build a counter component using React Hooks? Well, here you go! First thing you need to know is that since we're using hooks..."
                date='20th March, 2020'
              />
            </SimpleGrid>
            <Button
              variant='outline'
              marginY='60px'
              size='lg'
              textAlign='center'
              colorScheme='teal'
              as='a'
              href='https://medium.com/viahub'
              target='_blank'
            >
              Ver mais artigos
            </Button>
          </Box>
          <AboutMe />
          <Projects />
          <Box paddingY='150px' textAlign='center' id='contact'>
            <Heading>Entrar em contato</Heading>
            <Text
              paddingY='10px'
              color='bodyText'
              fontSize='lg'
              maxWidth='50ch'
              mx='auto'
            >
              Gostaria de se conectar e compartilhar conhecimento? Entre em contato comigo! 📧
            </Text>
            <Button
              as='a'
              href='mailto:paulo_vicali@icloud.com'
              variant='outline'
              marginY='60px'
              size='lg'
              colorScheme='teal'
            >
              Enviar email
            </Button>
          </Box>
        </Main>
      </Box>
    </>
  );
}

export default App;
