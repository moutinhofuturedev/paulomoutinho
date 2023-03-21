import { Box, Button, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { AboutMe } from '../components/AboutMe';
import { BlogCard } from '../components/BlogCard';
import { Header } from '../components/Header';
import { LeftBar } from '../components/LeftBar';
import { Projects } from '../components/Projects';
import { RightBar } from '../components/RightBar';
import { SectionHeading } from '../components/SectionHeading';
import { VideoSection } from '../components/VideoCard';
import { addSchemaLdHome } from '../constants/jsonSchemaLd';

import data from "../data.json"

export function Main(props) {
  return (
    <Box
      as="main"
      maxW="1400px"
      mx="auto"
      minH="100vh"
      paddingX={{ base: "32px", md: "100px" }}
      {...props}
    />
  );
}

export function getStaticProps() {
  const response = data

  return {
    props: {
      response
    },
  };
}

function Home({ response }) {

  return (
    <>
      <Head>
        <title>Paulo Moutinho® | Portfólio</title>
        <meta
          name="google-site-verification"
          content="4on3Ax2OR-BtXre94Wg3N7yZ0OoXYFPRCxle-bWVeAo"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Atualmente,trabalho como Software Engineer na Viahub(Via),atuando com tecnologias no Frontend e SEO para otimizar as páginas de Casas Bahia,Ponto e Extra."
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href="https://paulomoutinho.vercel.app/" />
        <meta property="og:locale" content="pt-BR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Paulo Moutinho | Portfólio" />
        <meta property="og:description" content="Paulo Moutinho Portfólio" />
        <meta property="og:url" content="https://paulomoutinho.vercel.app/" />
        <meta property="og:site_name" content="Online Portfólio" />
        <meta property="og:image" content="/assets/paulomoutinho.jpg" />
        <meta
          property="og:image:secure_url"
          content="/assets/paulomoutinho.jpg"
        />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <script
          id="SchemaJsonLd"
          key="SchemaJsonLd"
          type="application/ld+json"
          dangerouslySetInnerHTML={addSchemaLdHome()}
        />
      </Head>
      <Box bg="generalBackground" color="bodyText">
        <Header />
        <LeftBar />
        <RightBar />
        <Main>
          <Box paddingY="80px">
            <Text color="headingText" mb="20px">
              Olá, meu nome é
            </Text>
            <Heading
              as="h1"
              fontWeight="bold"
              fontSize={{ base: "32px", md: "60px" }}
              color="headingText"
            >
              {response.home.name}
              <br></br>
              {response.home.jobTitle}
            </Heading>

            <Text
              lineHeight="tall"
              color="bodyText"
              mt={8}
              maxWidth="760px"
              fontSize="lg"
            >
              {response.home.description}
            </Text>
            <Button
              variant="outline"
              marginY="60px"
              size="lg"
              colorScheme="teal"
              as="a"
              href="mailto:paulo_vicali@icloud.com"
            >
              Entrar em contato
            </Button>
          </Box>
          <Box paddingY="150px">
            <SectionHeading number="01." id="videos">
              Vídeos Favoritos
            </SectionHeading>
            <VideoSection />
            <Button
              variant="outline"
              size="lg"
              textAlign="center"
              colorScheme="teal"
              as="a"
              href="https://www.youtube.com/c/RocketSeat"
              target="_blank"
            >
              Veja mais vídeos
            </Button>
          </Box>
          <Box paddingY="150px">
            <SectionHeading number="02." id="blogs">
              Artigos em destaque
            </SectionHeading>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing="20px">
              <BlogCard
                link="https://medium.com/viahub/arrdissecando-a-carreira-do-software-engineering-specialist-staff-principal-e-distinguished-cdd92ca3ef1a"
                title="Dissecando a carreira do Software Engineering Specialist"
                details='A carreira do especialista é uma polêmica aqui no nosso país. Muitos já ouviram falar, mas não existe um "material oficial" destrinchando os papéis...'
                date="18 Agosto, 2022"
              />
              <BlogCard
                link="https://medium.com/viahub/devo-ser-especialista-ou-seguir-pra-lideran%C3%A7a-aab87a59d3aa"
                title="Devo ser especialista ou seguir pra liderança?"
                details="Acredito que quase todo mundo que começa uma carreira, especialmente em tecnologia, tem a dúvida de pra onde ir depois de se tornar sênior...."
                date="26 Agosto, 2022"
              />
              <BlogCard
                link="https://medium.com/viahub/criando-um-framework-para-definir-m%C3%A9trica-de-produto-6e8191bc0c37"
                title="Criando um framework para definir métrica de produto"
                details="Recebi o desafio de dar continuidade à construção da arquitetura e experiência do usuário em um sistema ligado ao varejo e na jornada de logística em uma das principais empresas do varejo do país, a Via..."
                date="13 Maio, 2022"
              />
              <BlogCard
                link="https://medium.com/viahub/oi-estudar-em-hor%C3%A1rio-de-trabalho-aqui-na-viahub-pode-86a483e2b3b2"
                title="Oi? Estudar em horário de trabalho? Aqui na ViaHub pode!"
                details="2021 foi O ANO DA VIAHUB! Criamos nossa marca da Tecnologia chamada ViaHub, nossas plataformas evoluíram MUITO, melhoramos váriossss indicadores, desenvolvemos diversas iniciativas de engajamento..."
                date="31 Novembro, 2021"
              />
              <BlogCard
                link="https://medium.com/viahub/reatividade-turbinada-com-vuex-a37145dc0c58"
                title="Reatividade turbinada com Vuex"
                details="Você já se perguntou para que serve o gerenciamento de estados em uma aplicação de frontend? Ou talvez tenha se perguntado como funciona esse gerenciamento..."
                date="22 Outubro, 2020"
              />

              <BlogCard
                link="https://medium.com/viahub/ci%C3%AAncia-de-dados-escal%C3%A1vel-na-via-eae755be723a"
                title="Ciência de Dados Escalável na ViaHub"
                details="A Via é a plataforma de consumo do brasileiro! Conhecida de longa data pelas suas marcas Casas Bahia e Ponto :>, ela vem se transformando para ajudar a realizar cada vez mais os sonhos dos brasileiros, contando com uma aceleração tecnológica gigante..."
                date="28 Janeiro, 2022"
              />
            </SimpleGrid>
            <Button
              variant="outline"
              marginY="60px"
              size="lg"
              textAlign="center"
              colorScheme="teal"
              as="a"
              href="https://medium.com/viahub"
              target="_blank"
            >
              Ver mais artigos
            </Button>
          </Box>
          <AboutMe
            textOne={response.about.textOne}
            textTwo={response.about.textTwo}
            textThree={response.about.textThree}
            textFour={response.about.textFour}
            textFive={response.about.textFive}
          />
          <VStack alignItems="flex-start">
            <Projects />
            <Link href="/projects" passHref>
              <Button
                variant="outline"
                size="lg"
                textAlign="center"
                colorScheme="teal"
              >
                Ver mais projetos
              </Button>
            </Link>
          </VStack>
          <Box paddingY="150px" textAlign="center" id="contact">
            <Heading>Entrar em contato</Heading>
            <Text
              paddingY="10px"
              color="bodyText"
              fontSize="lg"
              maxWidth="50ch"
              mx="auto"
            >
              Gostaria de se conectar e compartilhar conhecimento? Entre em
              contato comigo! 📧
            </Text>
            <Button
              as="a"
              href="mailto:paulo_vicali@icloud.com"
              variant="outline"
              marginY="60px"
              size="lg"
              colorScheme="teal"
            >
              Enviar email
            </Button>
          </Box>
        </Main>
      </Box>
    </>
  );
}

export default Home;
