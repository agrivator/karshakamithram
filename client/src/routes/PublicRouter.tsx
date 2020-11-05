import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext, { AuthContextProps } from 'context/AuthContext';

type PublicRouterProps = {
    component: React.ElementType;
    layout: React.ElementType;
    restricted: boolean;
};

const PublicRouter: React.FC<PublicRouterProps> = ({
    component: Component,
    layout: Layout,
    restricted,
}: PublicRouterProps) => {
    const { auth } = useContext(AuthContext) as AuthContextProps;

    if (auth.logged && restricted) return <Navigate to="/farmers/add" />;

    return (
        <Layout>
            <Component />
        </Layout>
    );
};

export default React.memo(PublicRouter);
