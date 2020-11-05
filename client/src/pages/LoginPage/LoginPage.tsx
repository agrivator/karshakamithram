import React, { useContext } from 'react';

import TextField from '@atlaskit/textfield';
import { LoadingButton, ButtonGroup } from '@atlaskit/button';

import Form, { ErrorMessage, Field, FormFooter } from '@atlaskit/form';
import styled from 'styled-components';
import { LoginAPI } from 'api/api.interface';
import AuthContext, { AuthContextProps } from 'context/AuthContext';
import { loginAPI } from 'api/auth';
import useTimeoutState from 'hooks/useTimeoutState';
import { useNavigate } from 'react-router-dom';

const FormContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 400px;
    margin: 0px auto;
    flex-direction: column;
    height: 100%;
    justify-content: center;
`;

const LoginPage: React.FC = () => {
    const { login } = useContext(AuthContext) as AuthContextProps;
    const [timeoutState, setTimeoutState] = useTimeoutState(6000);
    const navigate = useNavigate();

    /**
     * function to handle form submission
     * @param data - formdata for login
     */
    const handleSubmit = async (data: LoginAPI) => {
        try {
            const { jwt, ...loginDetails } = await loginAPI(data);
            login(jwt, loginDetails.user);
            navigate('/farmers/add', { replace: true });
        } catch (error) {
            setTimeoutState(error.message);
        }
    };

    return (
        <FormContainer>
            <Form<LoginAPI> onSubmit={(data) => handleSubmit(data)}>
                {({ formProps, submitting }) => (
                    <form {...formProps}>
                        <Field name="identifier" defaultValue="" label="username/email" isRequired>
                            {({ fieldProps }) => <TextField {...fieldProps} />}
                        </Field>
                        <Field name="password" defaultValue="" label="password" isRequired>
                            {({ fieldProps }) => <TextField {...fieldProps} type="password" />}
                        </Field>
                        {timeoutState && <ErrorMessage>{timeoutState}</ErrorMessage>}
                        <FormFooter>
                            <ButtonGroup>
                                <LoadingButton
                                    type="submit"
                                    appearance="primary"
                                    isLoading={submitting}
                                >
                                    Login
                                </LoadingButton>
                            </ButtonGroup>
                        </FormFooter>
                    </form>
                )}
            </Form>
        </FormContainer>
    );
};

export default LoginPage;
