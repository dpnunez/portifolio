import type { NextPage } from 'next';
import { About, Header, Hero } from 'components';

const Home: NextPage = () => (
  <>
    <Header />
    <Hero />
    <About />
  </>
);

export default Home;
