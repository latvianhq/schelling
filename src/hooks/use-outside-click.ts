import { MutableRefObject, useEffect } from 'react';

type OutsideCLickHandler = (e: MouseEvent) => void;

interface UseOutsideClickOptions {
  exceptSelectors?: string[];
}

export const useOutsideClick = <T extends HTMLElement = HTMLElement>(
  ref: MutableRefObject<T | null>,
  onOutsideClick: OutsideCLickHandler,
  options: UseOutsideClickOptions = {},
) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      const exceptElements = options.exceptSelectors?.map((selector) => document.querySelector(selector)) || [];

      if (ref.current && !ref.current?.contains(target) && !exceptElements.some((el) => el?.contains(target))) {
        onOutsideClick(e);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onOutsideClick, options.exceptSelectors, ref]);
};
