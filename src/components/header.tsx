import { Flex, Heading, Text, HStack, Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import { motion } from 'framer-motion';

import { useScrollParams } from 'hooks/useScrollParams';
import { menu } from '../constants';

const Header = () => {
  const scrollDirection = useScrollParams({ thresholdPixels: 50 });

  const menuStateParse =
    scrollDirection.isOnTop || scrollDirection.direction === 'up'
      ? 'show'
      : 'hidden';

  const variants = {
    show: {
      y: 0
    },
    hidden: {
      y: -100
    }
  };

  return (
    <Flex
      as={motion.header}
      variants={variants}
      animate={menuStateParse}
      w="100vw"
      position="fixed"
      height="menu-height"
      boxShadow="md"
    >
      <Flex
        width="100%"
        maxWidth="container.xl"
        px={2}
        py={6}
        margin="auto"
        justifyContent="space-between"
      >
        <Heading color="primary.500">
          dp
          <Heading as="span" color="gray.600">
            .
          </Heading>
        </Heading>
        <HStack as="nav" alignItems="center" spacing={8}>
          {menu.map((menuItem, index) => (
            <NextLink href="/" key={menuItem.key}>
              <Text cursor="pointer" variant="digital">
                <Text as="span" color="primary.500">
                  0{index}
                  {'. '}
                </Text>
                {menuItem.name}
              </Text>
            </NextLink>
          ))}
          <Button colorScheme="primary" variant="outline">
            Resume
          </Button>
        </HStack>
      </Flex>
    </Flex>
  );
};

export { Header };
