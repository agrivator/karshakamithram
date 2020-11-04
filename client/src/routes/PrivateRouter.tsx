import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext, { AuthContextProps } from 'context/AuthContext';

type PrivateRouterProps = {
    component: React.ElementType;
    layout: React.ElementType;
};

const PrivateRouter: React.FC<PrivateRouterProps> = ({
    component: Component,
    layout: Layout,
}: PrivateRouterProps) => {
    const { auth } = useContext(AuthContext) as AuthContextProps;

    if (!auth.logged) return <Navigate to="/login" replace />;

    return (
        <Layout>
            <Component />
        </Layout>
    );
};

export default React.memo(PrivateRouter);
