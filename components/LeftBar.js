import React from 'react';
import { Box, Stack, Divider} from '@chakra-ui/react';
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram
} from 'react-icons/fa';

export function HoverLink({ link, label, ...props }) {
  return (
    <Box
      as='a'
      display='inline-block'
      href={link}
      target='__blank'
      rel='nofollow noopener noreferrer'
      aria-label={label}
      transition='all 0.3s'
      _hover={{ transform: `translateY(-4px)`, color: 'teal.500' }}
      {...props}
    />
  );
}

function SocialLink({ icon, label, link, ...rest }) {
  return (
    <Box as='li' {...rest}>
      <HoverLink link={link} label={label}>
        <Box size='18px' as={icon} />
      </HoverLink>
    </Box>
  );
}

export function LeftBar() {
  return (
    <Box
      display={{ base: 'none', md: 'block' }}
      width='40px'
      position='fixed'
      bottom='0px'
      left='40px'
      right='auto'
      z-index='10'
      color='icon'
    >
      <Stack spacing='40px' as='ul' align='center' listStyleType='none'>
        <SocialLink
          icon={FaGithub}
          label='github'
          link='https://github.com/moutinhofuturedev'
        />
        <SocialLink
          icon={FaLinkedin}
          label='linkedin'
          link='https://www.linkedin.com/in/paulomoutinhovitor/'
        />
        <SocialLink
          icon={FaTwitter}
          label='twitter'
          link='https://twitter.com/PauloMoutinho19'
        />
        <SocialLink
          icon={FaInstagram}
          label='blog'
          link='https://www.instagram.com/paulo_mmoutinho/?hl=pt-br'
        />
      </Stack>
      <Divider orientation='vertical' height='200px' borderColor='icon' mt="40px" ml="20px"/>
    </Box>
  );
}
