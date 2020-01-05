import { ReactNode } from 'react';
import { createStore } from 'effector';
import { history } from './history';
import { matchUrl } from './match-url';
import { navigate, Path } from './navigate';

type Route = {
  pathname: string,
  component: ReactNode,
}

export function createRouter(routes: Route[]) {
  const $location = createStore<Path>({
    pathname: history.location.pathname,
  });

  const $route = $location.map<ReactNode | null>(path => {
    if (path) {
      const matched = routes.find(route => matchUrl(route.pathname, path.pathname));

      if (matched) return matched.component;
      return null
    }
    return null
  });

  $location.on(navigate, (_, path): Path => path);

  $location.watch(location => {
    if (location) {
      history.push(location.pathname);
    }
  });

  return {
    $route
  }
}
