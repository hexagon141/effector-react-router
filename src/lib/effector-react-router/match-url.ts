import { pathToRegexp } from 'path-to-regexp';

let cache: { [key: string]: any } = {};

export const matchUrl = ({ pathname, url }: { pathname: string, url: string }): { [key: string]: string } | null => {
  if (url in cache) return cache[url];

  const keys: {
    name: string,
    prefix: string,
    suffix: string,
    pattern: string,
    modifier: string,
  }[] = [];

  const pattern = pathToRegexp(pathname, keys);
  const match = pattern.exec(url);

  if (!match) return null;

  let params: { [key: string]: string } = {};

  // pattern.exec() return [url, ...params]
  // so we start loop from 1 index
  for (let key = 1; key < match.length; key++) {
    if (match[key]) {
      params = {
        ...params,
        [keys[key - 1].name]: match[key],
      }
    }
  }

  cache[url] = params;

  return params;
};