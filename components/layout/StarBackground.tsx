import { Center } from '@chakra-ui/react';
import { Stage } from '@inlet/react-pixi';

interface starBackgroundProps {}

const StarBackground: React.FC<starBackgroundProps> = () => {
  return (
    <Center position="fixed" top={0} left={0} width="100%">
      <Stage></Stage>
    </Center>
  );
};

export default StarBackground;
