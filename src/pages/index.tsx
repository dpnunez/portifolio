import type { NextPage } from 'next';
import { Header } from 'components';
import { Box } from '@chakra-ui/react';

const Home: NextPage = () => (
  <>
    <Header />
    <Box w="100vw" height="200vh" />
  </>
);

export default Home;
