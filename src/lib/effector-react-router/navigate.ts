import { createEvent } from 'effector';

export type Path = {
  pathname: string,
  search?: {
    [key: string]: string | number | object | []
  }
}

export const navigate = createEvent<Path>();