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
          description="Uma aplicação para controle financeiro simples e rápido. Nela você pode cadastrar suas despesas e entradas. Você pode também visualizar o seu balanço, ou seja, o seu saldo atual."
          src='/assets/finance.png'
          link='https://github.com/moutinhofuturedev/Codigo-Sistema-Financeiro'
          link2='https://devsfinances.netlify.app/'
          tags={['Html5', 'CSS3', 'Javasrcipt']}
        />
        <ProjectCard
          title='Event Platform'
          description="Com ReactJS e Tailwind, construímos esta fantástica plataforma de eventos onde podemos compartilhar conteúdo por tempo limitado com todos os inscritos do evento."
          src='/assets/event.png'
          link='https://github.com/moutinhofuturedev/Event-Platform'
          link2='https://event-platform-yoqu.vercel.app/'
          tags={['React', 'Typescript', 'Tailwind']}
        />
        <ProjectCard
          title='Login Chakra UI'
          description="Meu primeiro contato e projeto feito com Chakra UI. Curso na própria página de documentação do Chakra UI"
          src='/assets/login.png'
          link='https://github.com/moutinhofuturedev/Next-With-ChakraUI'
          link2='next-with-chakra-ui-three.vercel.app'
          tags={['React', 'Typescript', 'Chakra UI']}
        />
      </Stack>
    </Box>
  );
}

export default Projects;
