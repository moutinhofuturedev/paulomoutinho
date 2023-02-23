import React from 'react';
import {
  Text,
  Heading,
  Stack,
  Box,
  Flex,
  VisuallyHidden,
} from '@chakra-ui/react';
import { IoLogoGithub, IoMdLink } from 'react-icons/io';
import Image from 'next/image';

export function LinkButton({ icon, link, size, color, label, ...props }) {
  return (
    <Box as='a' href={link} target='_blank' {...props}>
      <Box
        as={icon}
        size={size}
        color={color}
        transition='all 0.3s'
        _hover={{ color: 'teal.500' }}
      />
      <VisuallyHidden>{label}</VisuallyHidden>
    </Box>
  );
}

function ProjectCard({ tags, title, description, src, link, link2, ...props }) {
  return (
    <Box
      as='article'
      bg='cardBackground'
      transition='all .3s'
      cursor='pointer'
      padding='40px'
      borderRadius='md'
      _hover={{ transform: 'scale(1.02)', border: '0.5px teal solid' }}
      {...props}
    >
      <Flex flexDirection={{ base: 'column', md: 'row' }}>
        <Box>
          <Heading size='lg' color='cardText'>
            {title}
          </Heading>

          <Text mt={2} fontSize='sm' color='mutedText'>
            {description}
          </Text>

          <Stack mt={6} spacing={6} isInline>
            {tags.map((tag, index) => (
              <Text
                key={index}
                flexWrap='wrap'
                fontSize='xs'
                letterSpacing='wide'
                textTransform='uppercase'
                fontWeight='bold'
                color='cardText'
              >
                {tag}
              </Text>
            ))}
          </Stack>

          <Stack mt={6} spacing={5} isInline>
            <LinkButton
              icon={IoLogoGithub}
              link={link}
              size='24px'
              color='mutedText'
              label='open Github'
            />
            <LinkButton
              icon={IoMdLink}
              link={link2}
              size='24px'
              color='mutedText'
              label='open link'
            />
          </Stack>
        </Box>

        <Box paddingY={4}>
          <Image
            objectFit='contain'
            src={src}
            height='200px'
            width='440px'
            alt={title}
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default ProjectCard;
