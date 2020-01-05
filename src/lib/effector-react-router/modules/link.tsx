import React, { FunctionComponent, MouseEvent } from 'react';
import { navigate } from "../index";

export const Link: FunctionComponent<{ to: string }> = ({ children, to }) => {
  function handleClick(event: MouseEvent<HTMLElement>) {
    event.preventDefault();
    navigate({
      pathname: to,
    })
  }

  return (
    <a href={to} onClick={handleClick}>{children}</a>
  )
};