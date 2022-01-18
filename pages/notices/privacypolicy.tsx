import {
  Heading,
  ListItem,
  Spacer,
  Text,
  UnorderedList
} from '@chakra-ui/react';
import { Layout } from '../../components/layout/Layout';
import { Navbar } from '../../components/layout/Navbar';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Heading as="h1">Privacy Policy</Heading>
        <Text as="i">Last updated January 17, 2022</Text>
        <Text paddingTop={5}>
          Thank you for choosing to be part of our community at SEDS at IUPUI
          ("Company," "we," "us," or "our"). We are committed to protecting your
          personal information and your right to privacy. If you have any
          questions or concerns about this privacy notice or our practices with
          regard to your personal information, please contact us at
          seds@iupui.edu.
        </Text>
        <Text paddingTop={5}>
          This privacy notice describes how we might use your information if
          you:
        </Text>
        <UnorderedList>
          <ListItem>Visit our website at https://www.sedsiupui.org/</ListItem>
          <ListItem>
            Engage with us in other related ways ― including any sales,
            marketing, or events
          </ListItem>
        </UnorderedList>
      </Layout>
    </>
  );
};

export default PrivacyPolicy;
