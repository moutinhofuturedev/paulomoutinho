import Head from 'next/head';
import { Box, Stack } from "@chakra-ui/react"
import Navigation from "../components/Header"
import { LeftBar } from "../components/LeftBar"
import { RightBar } from "../components/RightBar"
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { Main } from '.';

export default function Projects() {
    return (
      <>
        <Head>
          <title>Paulo Moutinho | Projetos</title>
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
                description="Projeto desenvolvido com Next e Chakra UI. Foco no desenvolvimento de formulário usando React Hook Form com validações fáceis é flexíveis."
                src="/public/assets/form.png"
                link="https://github.com/moutinhofuturedev/Good-Form"
                link2="good-form.vercel.app/"
                tags={["Next", "Chakra UI", "React Hook Form"]}
              />
            </Stack>
          </Main>
        </Box>
      </>
    );
}