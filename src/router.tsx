import React from 'react';
import { createRouter } from './lib/effector-react-router';
import { ReadArticle } from './pages/article/read';
import { CreateArticle } from './pages/article/create';
import { EditArticle } from './pages/article/edit';

export const { $route } = createRouter([
  {
    pathname: '/article/create',
    component: <CreateArticle />
  },
  {
    pathname: '/article/:id',
    component: <ReadArticle />
  },
  {
    pathname: '/article/:id/edit',
    component: <EditArticle />
  }
]);