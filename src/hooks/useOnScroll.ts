import { useEffect, useCallback, RefObject } from 'react';

interface Props {
  ref : RefObject<HTMLElement>;
}
/**
 * @description use animation on scroll
 * @param props -{ref}
 * @returns
 */
export function useOnScroll(props: Props) {
  const { ref } = props;

  const callback = useCallback(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          entry.target.classList.remove('fade-out');
        } else {
          entry.target.classList.remove('fade-in');
          entry.target.classList.add('fade-out');
        }
      });
    });

    observer.observe(ref.current);
  }, [ref]);

  useEffect(() => {
    callback();
  }, [ref]);

  return callback;
}
