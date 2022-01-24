import { Variants } from 'framer-motion';

const slideFromBelow: Variants = {
  offscreen: {
    opacity: 0,
    y: 15
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, easings: 'easeInOut' }
  }
};

export default slideFromBelow;
