import * as React from 'react';
import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';

type Props = {
  children: React.ReactNode
};


export const MainBarPortal = (props: Props) => {
  const el = useRef(document.createElement('div'));

  useEffect(() => {
    const portalRoot = document.querySelector("#main-bar-portal-root") as HTMLElement;
    const current = el.current;

    portalRoot!.appendChild(current);
    return () => void portalRoot!.removeChild(current);
  }, []);

  return createPortal(props.children, el.current);
};
