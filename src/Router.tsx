import { createBrowserRouter } from 'react-router-dom';

import { Applayout } from './components/layouts/AppLayout';

import NoMatch from './pages/NoMatch';
import Dashboard from './pages/Home';
import ItemsPage from './pages/guides/Items';
import BackgroundsPage from './pages/guides/Backgrounds';
import ExperiencesPage from './pages/guides/Experiences';
import PropertiesPage from './pages/guides/Properties';
import ServicesPage from './pages/guides/Services';
import SkillsPage from './pages/guides/Skills';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Applayout />,
      children: [
        {
          path: '',
          element: <Dashboard />,
        },
      ],
    },
    {
      path: '/items',
      element: <Applayout />,
      children: [
        {
          path: '',
          element: <ItemsPage />,
        },
      ],
    },
    {
      path: '/backgrounds',
      element: <Applayout />,
      children: [
        {
          path: '',
          element: <BackgroundsPage />,
        },
      ],
    },
    {
      path: '/experiences',
      element: <Applayout />,
      children: [
        {
          path: '',
          element: <ExperiencesPage />,
        },
      ],
    },
    {
      path: '/properties',
      element: <Applayout />,
      children: [
        {
          path: '',
          element: <PropertiesPage />,
        },
      ],
    },
    {
      path: '/services',
      element: <Applayout />,
      children: [
        {
          path: '',
          element: <ServicesPage />,
        },
      ],
    },
    {
      path: '/skills',
      element: <Applayout />,
      children: [
        {
          path: '',
          element: <SkillsPage />,
        },
      ],
    },
    {
      path: '*',
      element: <NoMatch />,
    },
  ],
  {
    basename: global.basename,
  }
);
