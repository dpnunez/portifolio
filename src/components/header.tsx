import { Flex, Heading, Text, HStack, Button } from '@chakra-ui/react';
import NextLink from 'next/link';
import { menu } from '../constants';

const Header = () => (
  <Flex
    as="header"
    w="100vw"
    position="fixed"
    height="menu-height"
    boxShadow="xl"
  >
    <Flex
      width="100%"
      maxWidth="container.xl"
      px={2}
      py={6}
      margin="auto"
      justifyContent="space-between"
    >
      <Heading color="primary.500">dp</Heading>
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

export { Header };
