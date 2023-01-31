import Head from 'next/head';
import { Box, Stack, Text, Heading, Button } from "@chakra-ui/react"
import Navigation from "../components/Header"
import { LeftBar } from "../components/LeftBar"
import { RightBar } from "../components/RightBar"
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { Main } from '.';

export default function PageProjects() {
    return (
      <>
        <Head>
          <title>Paulo Moutinho® | Projetos</title>
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="description" content="Online Portfolio" />
          <meta
            name="robots"
            content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <link rel="canonical" href="https://paulomoutinho.vercel.app/" />
          <meta property="og:locale" content="pt-BR" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Paulo Moutinho | Portfolio" />
          <meta property="og:description" content="Paulo Moutinho Portfolio" />
          <meta property="og:url" content="https://paulomoutinho.vercel.app/" />
          <meta property="og:site_name" content="Online Portfolio" />
          <meta property="og:image" content="/assets/paulomoutinho.jpg" />
          <meta
            property="og:image:secure_url"
            content="/assets/paulomoutinho.jpg"
          />
          <meta property="og:image:width" content="1280" />
          <meta property="og:image:height" content="720" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:description" content="Paulo Moutinho Portfolio" />
          <meta name="twitter:title" content="Paulo Moutinho | Portfolio" />
          <meta name="twitter:image" content="/assets/paulomoutinho.jpg" />
        </Head>
        <Box bg="generalBackground" color="bodyText">
          <Navigation />
          <LeftBar />
          <RightBar />
          <Main>
            <Box mt="5rem">
             <SectionHeading>Veja mais projetos</SectionHeading>
            </Box>
            <Stack spacing={8}>
            <ProjectCard 
                title="Goog Form"
                description="Projeto desenvolvido com Next e Chakra UI. Foco no desenvolvimento de formulário usando React Hook Form com validações fáceis é flexíveis,
                Api com Axios e back end com Json-Server."
                src="/assets/form.png"
                link="https://github.com/moutinhofuturedev/Good-Form"
                link2="https://good-form.vercel.app/"
                tags={["Next", "Chakra UI", "React Hook Form"]}
              />
              <ProjectCard 
                title="Linktree"
                description="Construção de um aplicativo que compartilha links de projetos e redes sociais. Desenvolvido com Next.js 13 e estilo com Tailwind CSS."
                src="/assets/linktree.png"
                link="https://github.com/moutinhofuturedev/linktree"
                link2="https://linktree-moutinho.vercel.app/"
                tags={["Next", "Tailwind"]}
              />
            </Stack>
          </Main>
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
        </Box>
      </>
    );
}