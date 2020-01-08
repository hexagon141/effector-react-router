import React, { FunctionComponent } from 'react';
import { useStore } from "effector-react";
import { Link } from "./lib/effector-react-router";
import { $page } from './router';

export const App: FunctionComponent = () => {
  const location = useStore($page);
  return (
    <div>
      <header>
        <strong>effector-react-router</strong>
        <ul>
          <li>
            <Link pathname="/article/create">create</Link>
          </li>
          <li>
            <Link pathname="/article/1488">read</Link>
          </li>
          <li>
            <Link pathname="/article/1488/edit">edit</Link>
          </li>
          <li>
            <Link
              pathname="/article/1488/edit"
              search={{
                available: true,
                category: 1337,
                model: 's'
              }}
            >
              query params
            </Link>
          </li>
        </ul>
      </header>

      <main>
        <pre>
          {JSON.stringify(location, null, 2)}
        </pre>
        {location?.view}
      </main>
    </div>
  )
}
