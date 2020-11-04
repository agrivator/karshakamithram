import React from 'react';

import TextField from '@atlaskit/textfield';
import { LoadingButton, ButtonGroup } from '@atlaskit/button';

import Form, { Field, FormFooter } from '@atlaskit/form';
import styled from 'styled-components';

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
    return (
        <FormContainer>
            <Form onSubmit={(data) => console.log('form data', data)}>
                {({ formProps, submitting }) => (
                    <form {...formProps}>
                        <Field name="identifier" defaultValue="" label="username/email" isRequired>
                            {({ fieldProps }) => <TextField {...fieldProps} />}
                        </Field>
                        <Field name="password" defaultValue="" label="password" isRequired>
                            {({ fieldProps }) => <TextField {...fieldProps} />}
                        </Field>
                        <FormFooter>
                            <ButtonGroup>
                                <LoadingButton
                                    type="submit"
                                    appearance="primary"
                                    isLoading={submitting}
                                >
                                    Sign up
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
