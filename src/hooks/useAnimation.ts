import { useEffect, useRef } from "react";

const DURATION = 2000;

interface AnimationProps {
  onAnimate: (progress: number) => void;
}
type AnimationCallbackType = (timeStamp: number) => void;

function useAnimation({ onAnimate }: AnimationProps) {
  const animationRef = useRef<number>(0);

  const requestNextAnimation = (animationCallback: AnimationCallbackType) => {
    animationRef.current = requestAnimationFrame(animationCallback);
  };

  const animate = () => {
    let begin: number;

    const animateCallback = (timeStamp: number) => {
      if (!begin) {
        begin = timeStamp;
      }

      let progress: number = (timeStamp - begin) / DURATION;
      if (progress > 1) {
        progress = 1;
      }

      onAnimate(progress);
      if (progress < 1) {
        requestNextAnimation(animateCallback);
      }
    };

    requestNextAnimation(animateCallback);
  };

  useEffect(() => {
    requestNextAnimation(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);
}

export default useAnimation;
