import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { MdOpenInNew } from 'react-icons/md';
import { LinkButton } from './ProjectCard';

export function BlogCard({ link, title, details, date }) {
  return (
    <Box
      as='article'
      bgColor='cardBackground'
      transition='all .3s'
      cursor='pointer'
      padding='40px'
      borderRadius='md'
      _hover={{ transform: 'scale(1.02)', border: '0.5px teal solid' }}
      boxShadow='sm'
    >
      <Stack mt={6} spacing={5} isInline paddingY='32px'>
        <LinkButton
          icon={MdOpenInNew}
          link={link}
          size='30px'
          color='mutedText'
          label='open link'
        />
      </Stack>
      <Heading fontSize='24px' color='cardText'>
        {title}
      </Heading>
      <Text mt={2} fontSize='sm' color='mutedText'>
        {details}
      </Text>
      <Text mt={2} fontSize='sm' color='mutedText'>
        {date}
      </Text>
    </Box>
  );
}
