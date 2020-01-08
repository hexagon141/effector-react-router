import { createEvent, createStore } from 'effector';
import { history } from './history';
import { parseQuery } from "./query-string";

type TPath = {
  pathname: string,
  search?: {
    [key: string]: any
  }
}

export const navigation = createEvent<TPath>();

export const $location = createStore<TPath>({
  pathname: history.location.pathname,
  search: parseQuery(history.location.search),
});

$location.on(navigation, (_, location): TPath => location);

history.listen(({ pathname, search }) => (
  navigation({
    pathname,
    search: parseQuery(search),
  })
));
