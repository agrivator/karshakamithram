import './index.css';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import Loading from 'components/Loading';
import AuthProvider from 'context/AuthContext/AuthProvider';

ReactDOM.render(
    <Suspense fallback={<Loading />}>
        <AuthProvider>
            <App />
        </AuthProvider>
    </Suspense>,
    document.getElementById('root')
);
