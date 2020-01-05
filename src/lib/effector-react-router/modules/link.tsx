import React, { FunctionComponent, MouseEvent, useCallback } from 'react';
import { navigate } from "../index";

export const Link: FunctionComponent<{ to: string }> = ({ children, to }) => {
  const handleClick = useCallback((event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    navigate({
      pathname: to,
    })
  }, [to]);

  return (
    <a href={to} onClick={handleClick}>{children}</a>
  )
};