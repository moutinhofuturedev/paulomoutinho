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
          title='Chakra UI for Beginners'
          description='Learn how to use Chakra UI like a PRO. The complete course for absolute beginners to understand how Chakra UI works & get started building.'
          src='/assets/chakrauiforbeginners.png'
          link='https://github.com/estheragbaje/chakra-ui-for-beginners'
          link2='https://www.chakrauiforbeginners.com/'
          tags={['Figma', 'Chakra UI', 'Next JS']}
        />
        <ProjectCard
          title='RCCG HOG Website'
          description='Created the Responsive UI Design in Figma for all the pages and Developed the entire features of the fully responsive wesbite using Chakra UI and Next.js. '
          src='/assets/rccg_hog.png'
          link='https://github.com/estheragbaje/HOG_Website'
          link2='https://rccghouseofgracecc.com/'
          tags={['Figma', 'Chakra UI', 'Next JS', 'Strapi']}
        />
      </Stack>
    </Box>
  );
}

export default Projects;
