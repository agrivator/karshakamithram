import React from 'react';
import { useRoutes } from 'react-router-dom';
import RoutesArray from './routes';

const Router: React.FC = () => {
    const routes = useRoutes(RoutesArray);

    return routes;
};

export default Router;
