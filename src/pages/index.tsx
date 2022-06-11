import type { NextPage } from 'next';
import DefaultLayout from 'src/domains/layout/DefaultLayout';
import Home from 'src/domains/home/Home';

const HomePage: NextPage = () => {
  return (
    <DefaultLayout>
      <Home />
    </DefaultLayout>
  );
};

export default HomePage;
