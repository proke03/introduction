import { useEffect, useCallback } from 'react';

interface Props {
  ref : React.RefObject<HTMLElement>;
  animationName: string;
}
/**
 * @description use animation on scroll
 * @param props -{ref, animationName}
 * @returns 
 */
export function useOnScroll(props: Props) {
  const { ref, animationName } = props;

  const callback = useCallback(() => {
    if(!ref.current) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(`${animationName}-in`);
          entry.target.classList.remove(`${animationName}-out`);
        } else {
          entry.target.classList.remove(`${animationName}-in`);
          entry.target.classList.add(`${animationName}-out`);
        }
      });
    });

    observer.observe(ref.current);
  }, [ref.current]);

  useEffect(() => {
    callback();
  }, [ref.current]);

  return callback;
}