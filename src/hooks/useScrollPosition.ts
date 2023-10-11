import { MutableRefObject, useLayoutEffect, useState } from "react";

type RefType = MutableRefObject<null | HTMLElement>;

const useScrollPosition = (ref?: RefType) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useLayoutEffect(() => {
    // function to handle scroll event with throttling
    const handleScroll = () => {
      // use requestAnimationFrame for smoother animation
      requestAnimationFrame(() => {
        const currentScrollPosition = ref
          ? ref?.current?.getBoundingClientRect()?.y || 0
          : window.scrollY;

        // update scroll position
        setScrollPosition(currentScrollPosition);
      });
    };

    // add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]); // update effect dependency to include scrollPosition

  return scrollPosition;
};

export default useScrollPosition;
