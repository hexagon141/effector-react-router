import { pathToRegexp } from 'path-to-regexp';

export const matchUrl = (pathname: string, url: string) => {
  const keys: any = [];
  const pattern = pathToRegexp(pathname, keys);
  const match = pattern.exec(url);
  if (!match) return;
  const params = Object.create(null);
  for (let i = 1; i < match.length; i += 1) {
    params[keys[i - 1].name] = match[i] !== undefined ? match[i] : undefined;
  }
  return {
    pathname,
    params
  };
};