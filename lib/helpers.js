// Generic helper functions
// These are like macros for react

import { useEffect, useRef, useState } from 'react';

//reference a previous state after update
export const usePrevious = (value) => {
  const prev = useRef();
  useEffect(() => {
    prev.current = value;
  });
  return prev.current;
};

//client side mount
export const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  });
  return hasMounted;
};

//conditionally wrap a component in another
export const ConditionalWrapper = ({ condition, wrapper, children }) => {
  return condition ? wrapper(children) : children;
};
