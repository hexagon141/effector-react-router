import { parse, stringify } from "query-string";

export const parseQuery = (query: string): {[key: string]: any} => (
  parse(query, {
    parseBooleans: true,
    parseNumbers: true
  })
);

export const stringifyQuery = (query: { [key: string]: any}): string => (
  stringify(query, {
    arrayFormat: 'bracket'
  })
);