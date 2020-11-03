import React, { lazy } from 'react';

// import MinimalLayout from 'layouts/MinimalLayout';

const LoginPage = lazy(() => import('pages/LoginPage'));
const AddFarmersDataPage = lazy(() => import('pages/AddFarmersDataPage'));

export default [
    {
        path: 'login',
        element: <LoginPage />,
    },
    {
        path: 'farmer/add',
        element: <AddFarmersDataPage />,
    },
];
