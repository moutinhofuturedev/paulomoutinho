import React from 'react';
import { HoverLink } from './LeftBar';
import { Divider, Box } from '@chakra-ui/react';

export function RightBar() {
  return (
    <Box
      display={{ base: 'none', md: 'block' }}
      width='40px'
      position='fixed'
      bottom='0px'
      left='auto'
      right='40px'
      z-index='10'
      color='icon'
    >
      <HoverLink
        style={{ writingMode: 'vertical-rl' }}
        letterSpacing='0.2em'
        fontSize='xs'
        link='mailto: estheroagbaje@gmail.com'
        paddingBottom='40px'
      >
        paulo_vicali@icloud.com
      </HoverLink>
      <Divider orientation='vertical' height='200px' borderColor='icon' />
    </Box>
  );
}
