import React, { FunctionComponent, MouseEvent, useCallback, memo } from 'react';
import { navigate } from './navigate';

export const Link: FunctionComponent<{ pathname: string, className: string }> = memo(
  ({ children, pathname, className }) => {
    const handleClick = useCallback(
      (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        navigate({
          pathname
        })
      },
      [pathname]
    );

    return (
      <a
        href={pathname}
        className={className}
        onClick={handleClick}
      >
        {children}
      </a>
    )
  }
);