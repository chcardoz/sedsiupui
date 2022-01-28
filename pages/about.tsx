import { Heading } from '@chakra-ui/react';
import { Layout } from '../components/layout/Layout';
import { Navbar } from '../components/layout/Navbar';
import { motion } from 'framer-motion';
import { AnimatedHeading } from '../components/AnimatedHeading';

const About: React.FC = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <AnimatedHeading color="secondary.400">About</AnimatedHeading>
      </Layout>
    </>
  );
};

export default About;
