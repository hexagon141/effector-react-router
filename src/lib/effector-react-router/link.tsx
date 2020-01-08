import React, { FunctionComponent, MouseEvent, useCallback, memo } from 'react';
import { history } from './history';
import { stringifyQuery } from './query-string';

export const Link: FunctionComponent<{
  pathname: string,
  search?: {
    [key: string]: any
  },
  className?: string
}> = memo(
  ({ children, pathname, search = {}, className }) => {
    const handleClick = useCallback(
      (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        history.push({
          pathname,
          search: stringifyQuery(search)
        });
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