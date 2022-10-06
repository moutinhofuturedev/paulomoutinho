import { Box, Flex, Heading, Link, SimpleGrid, Text } from '@chakra-ui/react';
import Image from 'next/image';
import * as React from 'react';

const VideoCard = (props) => {
  const { title, href, description, media } = props;
  return (
    <Box
      bg='cardBackground'
      shadow={{ sm: 'base' }}
      rounded={{ sm: 'md' }}
      overflow='hidden'
      transition='all 0.2s'
      _hover={{ shadow: { sm: 'lg' } }}
    >
      <Flex direction='column'>
        <Link href={href}>
          <Image
            height='220px'
            width='368px'
            objectFit='cover'
            alt={title}
            src={media}
          />
        </Link>
        <Flex direction='column' px={{ sm: '6' }} p='6'>
          <Heading
            as='h3'
            fontSize='24px'
            mb='2'
            lineHeight='base'
            color='cardText'
          >
            {title}
          </Heading>
          <Text noOfLines={2} mb='2' color='mutedText'>
            {description}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export const VideoSection = () => {
  return (
    <Box as='section' pb={{ base: '10', sm: '24' }}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing='12'>
        <VideoCard
          media='/assets/development.jpeg'
          title='Learn to use Storybook in your React Project in 8minutes'
          description='In this video, I give a basic walkthrough of what Storybook is, what a story is and how to create stories...'
          href='https://youtu.be/U7lW6qAsvrg'
        />
        <VideoCard
          media='/assets/development.jpeg'
          title='How to enable Right-to-Left (RTL) support using Chakra UI'
          description='In this video, I talk about how enabling Right-to-left (RTL) support on your website or web app helps you reach a...'
          href='https://youtu.be/PzEHoqLj4OM'
        />
        <VideoCard
          media='/assets/development.jpeg'
          title="10 Non-Coding Tech Careers (Even if you're a Beginner)"
          description='The tech industry is booming, and in this video, I shared 10 non-coding tech opportunities you should consider if...'
          href='https://youtu.be/sB9znZIfxlM'
        />
      </SimpleGrid>
    </Box>
  );
};
