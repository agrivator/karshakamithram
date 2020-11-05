import React, { lazy } from 'react';

import MinimalLayout from 'layouts/MinimalLayout';
import MainLayout from 'layouts/MainLayout';

import PublicRouter from './PublicRouter';
import PrivateRouter from './PrivateRouter';

const LoginPage = lazy(() => import('pages/LoginPage'));
const AddFarmersDataPage = lazy(() => import('pages/AddFarmersDataPage'));

export default [
    {
        path: 'login',
        element: <PublicRouter layout={MinimalLayout} component={LoginPage} restricted />,
    },
    {
        path: 'farmers/add',
        element: <PrivateRouter layout={MainLayout} component={AddFarmersDataPage} />,
    },
];
