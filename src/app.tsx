import React, { FunctionComponent } from 'react';
import { useStore } from "effector-react";
import { $route } from './router';
import { Link } from "./lib/effector-react-router/link";


export const App: FunctionComponent = () => {
  const route = useStore($route);

  return (
    <div>
      <header>
        <strong>effector-react-router</strong>
        <ul>
          <li>
            <Link to="/article/create">create</Link>
          </li>
          <li>
            <Link to="/article/1488">read</Link>
          </li>
          <li>
            <Link to="/article/1488/edit">edit</Link>
          </li>
        </ul>
      </header>

      <main>
        {route}
      </main>
    </div>
  )
}
