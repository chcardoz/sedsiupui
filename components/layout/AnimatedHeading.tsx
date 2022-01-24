import { Heading, HTMLChakraProps, ThemingProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import slideFromBelow from '../../animation/common/slideFromBelow';

interface animatedHeadingProps
  extends HTMLChakraProps<'h2'>,
    ThemingProps<'Heading'> {}

export const AnimatedHeading: React.FC<animatedHeadingProps> = ({
  children,
  ...rest
}) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={slideFromBelow}
    >
      <Heading {...rest}>{children}</Heading>
    </motion.div>
  );
};
