import Head from 'next/head';
import { Box } from "@chakra-ui/react"
import Navigation from "../components/Header"
import { LeftBar } from "../components/LeftBar"
import { RightBar } from "../components/RightBar"

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
        </Box>
      </>
    );
}