import React, { lazy } from 'react';

import MinimalLayout from 'layouts/MinimalLayout';

import PublicRouter from './PublicRouter';

const LoginPage = lazy(() => import('pages/LoginPage'));
const AddFarmersDataPage = lazy(() => import('pages/AddFarmersDataPage'));

export default [
    {
        path: 'login',
        element: <PublicRouter layout={MinimalLayout} component={LoginPage} restricted />,
    },
    {
        path: 'farmer/add',
        element: <AddFarmersDataPage />,
    },
];
