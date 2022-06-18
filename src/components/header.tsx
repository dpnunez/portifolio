import { Flex, Heading, Text, HStack, Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import { motion } from 'framer-motion';

import { useScrollParams } from 'hooks/useScrollParams';
import { menu } from '../constants';

const Header = () => {
  const { isOnTop, direction } = useScrollParams({ thresholdPixels: 50 });

  const animationDuration = 0.25;
  const menuStateParse = isOnTop || direction === 'up' ? 'show' : 'hidden';

  const variants = {
    show: {
      y: 0,
      transition: {
        duration: animationDuration
      }
    },
    hidden: {
      y: -100,
      transition: {
        duration: animationDuration
      }
    }
  };

  return (
    <Flex
      overflow="hidden"
      as={motion.header}
      variants={variants}
      animate={menuStateParse}
      w="100%"
      position="fixed"
      height="menu-height"
      boxShadow={isOnTop ? 'none' : 'lg'}
      transition={`box-shadow ${animationDuration}s`}
      background="backgroundAlpha"
      backdropFilter="blur(10px)"
      zIndex={2}
    >
      <Flex
        width="100%"
        maxWidth="container.xl"
        px={2}
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
              <Text fontSize="sm" cursor="pointer" variant="digital">
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
