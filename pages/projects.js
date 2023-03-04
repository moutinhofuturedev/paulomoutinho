import Head from 'next/head';
import { Box, Stack, Text, Heading, Button } from "@chakra-ui/react"
import Navigation from "../components/Header"
import { LeftBar } from "../components/LeftBar"
import { RightBar } from "../components/RightBar"
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { Main } from '.';
import { addShemaLdProjects } from '../constants/jsonSchemaLd';

export default function PageProjects() {
    return (
      <>
        <Head>
          <title>Paulo Moutinho® | Projetos</title>
          <meta
            name="google-site-verification"
            content="4on3Ax2OR-BtXre94Wg3N7yZ0OoXYFPRCxle-bWVeAo"
          />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="description"
            content="Projetos para portifólio de Paulo Moutinho"
          />
          <meta
            name="robots"
            content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <meta property="og:locale" content="pt-BR" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Paulo Moutinho | Projetos" />
          <meta property="og:description" content="Paulo Moutinho Projetos" />
          <meta
            property="og:url"
            content="https://paulomoutinho.vercel.app/projects"
          />
          <meta property="og:site_name" content="Online Projetos" />
          <script
            id="SchemaJsonLdProjects"
            key="SchemaJsonLdProjects"
            type="application/ld+json"
            dangerouslySetInnerHTML={addShemaLdProjects()}
          />
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
                title="Good Form"
                description="Projeto desenvolvido com Next e Chakra UI. Foco no desenvolvimento de formulário usando React Hook Form com validações fáceis é flexíveis,
                Api com Axios e back end com Json-Server."
                src="/assets/good-form.png"
                link="https://github.com/moutinhofuturedev/Good-Form"
                link2="https://good-form.vercel.app/"
                tags={["Next", "Chakra UI", "React Hook Form"]}
              />
              <ProjectCard
                title="Linktree"
                description="Construção de um aplicativo que compartilha links de projetos e redes sociais. Desenvolvido com Next.js 13 e estilo com Tailwind CSS."
                src="/assets/link.png"
                link="https://github.com/moutinhofuturedev/linktree"
                link2="https://linktree-moutinho.vercel.app/"
                tags={["Next", "Tailwind"]}
              />
              <ProjectCard
                title="DashGo"
                description="DashGo é uma aplicação em Next.js para dashboard's em geral com paginas e paginação, login e sistema de inclusão de usuarios."
                src="/assets/dash.png"
                link="https://github.com/moutinhofuturedev/DashGO"
                link2="https://dash-go-psi.vercel.app/"
                tags={["Next", "Chakra UI", "React Query"]}
              />
              <ProjectCard
                title="Pricing UI"
                description="Um projeto aprofundado em construir uma UI com Chakra UI e layout responsivo para versão mobile."
                src="/assets/Desktop.png"
                link="https://github.com/moutinhofuturedev/Pricing-UI"
                link2="https://pricing-ui-plum.vercel.app/"
                tags={["React", "Chakra UI", "Typescript"]}
              />
            </Stack>
          </Main>
          <Box paddingY="150px" textAlign="center">
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