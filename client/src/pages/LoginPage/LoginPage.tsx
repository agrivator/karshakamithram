import React from 'react';

import TextField from '@atlaskit/textfield';
import { LoadingButton, ButtonGroup } from '@atlaskit/button';

import Form, { Field, FormFooter } from '@atlaskit/form';

const LoginPage: React.FC = () => {
    return (
        <div
            style={{
                display: 'flex',
                width: '400px',
                margin: '0 auto',
                flexDirection: 'column',
            }}
        >
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
        </div>
    );
};

export default LoginPage;
