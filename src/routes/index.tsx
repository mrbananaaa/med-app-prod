import type { RouteObject } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';

import MainLayout from '../components/Layout/MainLayout';
import { lazyImport } from '../utils/lazyImport';

const { Home } = lazyImport(() => import('@/features/home'), 'Home');
const { Symptom } = lazyImport(() => import('@/features/symptom'), 'Symptom');
const { Diagnosis } = lazyImport(() => import('@/features/diagnosis'), 'Diagnosis');

export const AppRoutes = () => {
  const commonRoute: RouteObject[] = [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/symptom',
      element: <Symptom />,
    },
    {
      path: '/diagnosis',
      element: <Diagnosis />,
    },
  ];

  const element = useRoutes([...commonRoute]);

  return (
    <>
      <MainLayout>{element}</MainLayout>
    </>
  );
};
