import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Loading from 'components/Loading';
import AuthContext, { AuthContextProps } from 'context/AuthContext';
import { getUserDetailsAPI } from 'api/auth';
import Routes from 'routes';

const App: React.FC = () => {
    const [ready, setReady] = useState(false);
    const { auth, logout, login } = useContext(AuthContext) as AuthContextProps;

    /**
     * fired on app loading
     * fetches user details from db with the token
     * if token not available logout and send user to login
     */
    const loginUser = async (): Promise<void> => {
        if (auth.logged) {
            try {
                const user = await getUserDetailsAPI();
                login(auth.token as string, user);
                setReady(true);
            } catch (error) {
                logout();
                setReady(true);
            }
        } else {
            setReady(true);
        }
    };

    useEffect(() => {
        loginUser();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {!ready ? (
                <Loading />
            ) : (
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
            )}
        </>
    );
};

export default App;
