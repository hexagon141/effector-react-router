import { createRouter } from './lib/effector-react-router';
import { CreateArticle } from './pages/article/create';
import { ReadArticle } from './pages/article/read';
import { EditArticle } from './pages/article/edit';
import React from 'react';

export const { $page } = createRouter([
  {
    pathname: '/article/create',
    view: <CreateArticle />
  },
  {
    pathname: '/article/:id',
    view: <ReadArticle />
  },
  {
    pathname: '/article/:id/edit',
    view: <EditArticle />
  }
]);