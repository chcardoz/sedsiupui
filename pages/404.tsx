import { Heading } from '@chakra-ui/react';
import { Layout } from '../components/layout/Layout';
import { Navbar } from '../components/layout/Navbar';

const ErrorPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Heading>OOPS - Page not found</Heading>
      </Layout>
    </>
  );
};

export default ErrorPage;
