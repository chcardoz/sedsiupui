import { Heading, HTMLChakraProps, ThemingProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface animatedHeadingProps
  extends HTMLChakraProps<'h2'>,
    ThemingProps<'Heading'> {}

export const AnimatedHeading: React.FC<animatedHeadingProps> = ({
  children,
  ...rest
}) => {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.5, easings: 'easeInOut' }}
    >
      <Heading {...rest}>{children}</Heading>
    </motion.div>
  );
};
