import { $location } from './navigation';
import { matchUrl } from './match-url';

type Route = {
  pathname: string,
  view: any,
}

export const createRouter = (routes: Route[]) => {
  const $page = $location.map(location => {
    const matched = routes.find(route => matchUrl({
      pathname: route.pathname,
      url: location.pathname,
    }));

    if (matched) {
      return {
        view: matched.view,
        pathname: location.pathname,
        params: matchUrl({
          pathname: matched.pathname,
          url: location.pathname,
        }),
        search: location.search
      }
    }

    return null
  });

  return {
    $page
  }
};
