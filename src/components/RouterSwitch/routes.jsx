import { lazy } from 'react';

const HomePage = lazy(() => import('../../pages/Home'));
const WorkPage = lazy(() => import('../../pages/Work'));
const PersonalPage = lazy(() => import('../../pages/Personal'));
const ContactPage = lazy(() => import('../../pages/Contact'));
const NotFoundPage = lazy(() => import('../../pages/NotFound'));

const routes = [
  { Component: HomePage, exact: true, path: '/' },
  { Component: WorkPage, exact: true, path: '/work' },
  { Component: PersonalPage, exact: false, path: '/photo' },
  { Component: ContactPage, exact: true, path: '/contact' },
  { Component: NotFoundPage, exact: false, path: '*' },
];

export default routes;