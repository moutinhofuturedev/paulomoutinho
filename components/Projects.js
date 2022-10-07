import { Box, Stack } from '@chakra-ui/react';
import React from 'react';
import ProjectCard from './ProjectCard';
import SectionHeading from './SectionHeading';

function Projects(props) {
  return (
    <Box paddingY='150px' id='projects' as='section' {...props}>
      <SectionHeading number='04.'>Algumas coisas que desenvolvi</SectionHeading>
      <Stack spacing={8}>
        <ProjectCard
          title='Dev.Finance$'
          // description='Learn how to use Chakra UI like a PRO. The complete course for absolute beginners to understand how Chakra UI works & get started building.'
          description="Uma aplicação para controle financeiro simples e rápido. Nela você pode cadastrar suas despesas e entradas. Você pode também visualizar o seu balanço, ou seja, o seu saldo atual."
          src='/assets/finance.png'
          link='https://github.com/moutinhofuturedev/Codigo-Sistema-Financeiro'
          link2='https://devsfinances.netlify.app/'
          tags={['Html5', 'CSS3', 'Javasrcipt']}
        />
        <ProjectCard
          title='Event Platform'
          // description='Created the Responsive UI Design in Figma for all the pages and Developed the entire features of the fully responsive wesbite using Chakra UI and Next.js. '
          description="Com ReactJS e Tailwind, construímos esta fantástica plataforma de eventos onde podemos compartilhar conteúdo por tempo limitado com todos os inscritos do evento."
          src='/assets/event.png'
          link='https://github.com/moutinhofuturedev/Event-Platform'
          link2='https://event-platform-yoqu.vercel.app/'
          tags={['React', 'Typescript', 'Tailwind']}
        />
      </Stack>
    </Box>
  );
}

export default Projects;
