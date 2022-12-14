import {
  Box,
  Circle,
  Flex,
  IconButton,
  Image,
  Link,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import { BsFillMoonFill, BsSun } from 'react-icons/bs';

const Logo = () => (
  <Circle size={"70px"} border="2px" color={'teal.400'}>
    <Link href='/'>
      <Image
      src="/assets/me-logo.jpg"
      borderRadius={"full"}
      boxSize="60px"
      objectFit={"cover"}
      objectPosition="top"
      />
    </Link>
  </Circle>
);

function Navigation() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Box
      as='header'
      position='sticky'
      top='0'
      bg='generalBackground'
      py={5}
      zIndex={1}
    >
      <Flex
        as='nav'
        justify='space-between'
        alignContent='center'
        maxW='1400px'
        mx='auto'
        paddingX={{ base: '32px', md: '100px' }}
      >
        <Box>
          <Logo />
        </Box>
        <Box
          minWidth='80%'
          justifyContent='space-between'
          alignItems='center'
          display={{ base: 'none', md: 'flex' }}
        >
          <Box as='a' href='/#about-me' _hover={{ color: 'teal.500' }}>
            Sobre
          </Box>
          <Box as='a' href='/#videos' _hover={{ color: 'teal.500' }}>
            Videos
          </Box>
          <Box as='a' href='/#blogs' _hover={{ color: 'teal.500' }}>
            Blogs
          </Box>
          <Box as='a' href='/#projects' _hover={{ color: 'teal.500' }}>
            Projetos
          </Box>

          <Box as='a' href='/#contact' _hover={{ color: 'teal.500' }}>
            Contato
          </Box>
          
          <IconButton
            variant='outline'
            colorScheme='teal'
            aria-label='Switch color mode'
            fontSize='16px'
            onClick={toggleColorMode}
            icon={colorMode === 'light' ? <BsFillMoonFill /> : <BsSun />}
          />
        </Box>
        <Box textAlign='center' marginTop='15px'>
          <IconButton
            variant='outline'
            colorScheme='teal'
            aria-label='Switch color mode'
            fontSize='16px'
            display={{ base: 'inline-flex', md: 'none' }}
            onClick={toggleColorMode}
            icon={colorMode === 'light' ? <BsFillMoonFill /> : <BsSun />}
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default Navigation;
