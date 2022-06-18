import { Flex, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import useOnScreen from 'hooks/useOnScreen';
import { useRef } from 'react';
import { animations } from 'theme';

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const screenState = useOnScreen(containerRef);

  return (
    <Flex
      height="200vh"
      ref={containerRef}
      as={motion.div}
      variants={animations.onScreen}
      initial={animations.onScreen.out}
      animate={screenState}
    >
      <Heading>
        Et sunt nisi incididunt esse laboris sint esse ea proident sint irure
        ex. Aute deserunt adipisicing eu enim consectetur laborum magna id
        nostrud. Dolore mollit ex do nisi sint sint fugiat amet do do in quis.
        Qui consequat et ad commodo voluptate nulla ullamco ipsum esse. Mollit
        ea occaecat reprehenderit consectetur occaecat excepteur id dolor irure
        reprehenderit anim labore elit. Esse minim commodo anim enim officia
        nisi ut in consequat ad minim laborum. Cillum duis culpa cillum ipsum.
      </Heading>
    </Flex>
  );
};

export { About };
