import React from 'react';

// import MinimalLayout from 'layouts/MinimalLayout';

import LoginPage from 'pages/LoginPage';
import AddFarmersDataPage from 'pages/AddFarmersDataPage';

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
