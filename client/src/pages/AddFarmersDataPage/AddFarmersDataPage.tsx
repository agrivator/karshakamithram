import React from 'react';

import Page, { Grid, GridColumn } from '@atlaskit/page';
import Form, { FormHeader, FormSection, FormFooter, ErrorMessage, Field } from '@atlaskit/form';
import { LoadingButton, ButtonGroup } from '@atlaskit/button';
import PersonalDetailsForm from './components/FormParts/PersonalDetails';

const AddFarmersDataPage: React.FC = () => {
    return (
        <Page>
            <Grid>
                <GridColumn medium={12}>
                    <Form onSubmit={(data) => console.log('form data', data)}>
                        {({ formProps, submitting }) => (
                            <form {...formProps}>
                                <FormHeader title="Add Farmer Details" />
                                <Grid>
                                    <GridColumn medium={4}>
                                        <PersonalDetailsForm />
                                    </GridColumn>
                                </Grid>
                            </form>
                        )}
                    </Form>
                </GridColumn>
            </Grid>
        </Page>
    );
};

export default AddFarmersDataPage;
