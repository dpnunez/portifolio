import { Flex, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import useOnScreen from 'hooks/useOnScreen';
import { useRef } from 'react';
import { animations } from 'theme';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const screenState = useOnScreen(containerRef);

  const lineAnimation = {
    in: {
      width: '100%',
      transition: {
        duration: 1
      }
    },
    out: {
      width: 0
    }
  };

  const jokeAnimation = {
    in: {
      opacity: 1,
      transition: {
        duration: 1
      }
    },
    out: {
      opacity: 0
    }
  };

  return (
    <Flex w="100%" height="100vh" justify="center" mb={40}>
      <Flex
        flex={1}
        mt="menu-height"
        maxWidth="container.lg"
        align="center"
        ref={containerRef}
        as={motion.div}
        variants={animations.onScreen}
        initial={animations.onScreen.out}
        animate={screenState}
      >
        <Flex
          flexDir="column"
          w={['100%', '100%', '60%']}
          align={['center', 'center', 'flex-start']}
        >
          <Text variant="digital" color="primary.500">
            Hi, my name is
          </Text>
          <Heading mt={4}>Daniel Núñez</Heading>
          <Heading>
            I{' '}
            <Text position="relative" as="span">
              <Flex
                variants={lineAnimation}
                w={0}
                as={motion.span}
                position="absolute"
                height="4px"
                bg="primary.500"
                left={0}
                top="50%"
              />
              build things
              <Text
                initial={jokeAnimation.out}
                variants={jokeAnimation}
                fontSize={['1.1rem', '1.1rem', '1.3rem']}
                as={motion.span}
                top="80%"
                left={0}
                position="absolute"
                color="primary.500"
              >
                change button colors
              </Text>
            </Text>{' '}
            for the web.
          </Heading>
          <Text mt={8}>
            Adipisicing magna sit commodo nostrud fugiat nulla officia sunt
            mollit Lorem duis ut eiusmod quis. Nostrud eiusmod et exercitation
            ullamco. Lorem culpa elit duis quis anim consectetur do. Lorem et
            sit id sint id sint pariatur qui. Excepteur irure deserunt
            adipisicing exercitation incididunt adipisicing enim mollit anim.
            Nulla aliquip ea veniam officia adipisicing aliquip anim non sit
            culpa eiusmod commodo cillum minim. Do ad anim ex cupidatat laboris.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export { Hero };
