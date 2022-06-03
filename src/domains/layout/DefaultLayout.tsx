import { PropsWithChildren } from 'react';
import Footer from '../shared/components/Footer/Footer';
import Header from '../shared/components/Header';

const DefaultLayout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
