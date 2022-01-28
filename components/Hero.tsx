import { Box, Heading } from '@chakra-ui/react';
import { AnimatedHeading } from './AnimatedHeading';
import '@fontsource/days-one';

interface heroProps {}

const Hero: React.FC<heroProps> = () => {
  return (
    <Box zIndex={1}>
      <video
        autoPlay
        loop
        muted
        preload="auto"
        playsInline
        style={{
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          opacity: 0.3
        }}
        src="https://player.vimeo.com/external/505830907.sd.mp4?s=b19157487742eb6246037240bb1867af0eaa12ac&profile_id=165"
      ></video>
      <Heading
        position="absolute"
        top="1.5em"
        left="1.5em"
        fontSize={150}
        zIndex={2}
        fontFamily="Days One"
      >
        TO
      </Heading>
      <Heading
        position="absolute"
        top="2.5em"
        left="1.5em"
        fontSize={150}
        zIndex={2}
        fontFamily="Days One"
      >
        THE
      </Heading>
      <Heading
        position="absolute"
        top="3.5em"
        left="1.5em"
        fontSize={150}
        zIndex={2}
        fontFamily="Days One"
        color="secondary.400"
      >
        STARS
      </Heading>
    </Box>
  );
};

export default Hero;
