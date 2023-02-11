import React from 'react';
import { Heading, Box } from '@chakra-ui/react';

function SectionHeading({ number, children, ...props }) {
  return (
    <Heading
      as='h2'
      display='flex'
      alignItems='center'
      marginTop='10px'
      marginBottom='40px'
      fontSize={{ base: '2xl', md: '3xl' }}
      maxWidth='640px'
      {...props}
    >
      <Box
        as='span'
        color='logoBackground'
        mr='10px'
        fontFamily='mono'
        position='relative'
        bottom='4px'
        fontSize='20px'
        alignSelf='flex-end'
      >
        {number}
      </Box>
      {children}
      <Box
        flex='1'
        bg='rgb(45, 57, 82)'
        height='1px'
        fontFamily='mono'
        position='relative'
        ml='20px'
      />
    </Heading>
  );
}

export default SectionHeading;
