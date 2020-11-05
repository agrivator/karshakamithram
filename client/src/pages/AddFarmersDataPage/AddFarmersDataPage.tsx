import React from 'react';

import { Grid, GridColumn } from '@atlaskit/page';
import Form, { FormHeader, FormFooter } from '@atlaskit/form';
import { LoadingButton, ButtonGroup } from '@atlaskit/button';
import Container from 'components/Container';
import { Farmer } from 'api/api.interface';
import { addFarmer } from 'api/farmers';
import PersonalDetailsForm from './components/FormParts/PersonalDetails';
import BankDetails from './components/FormParts/BankDetails';
import AddressDetails from './components/FormParts/AddressDetails';
import CultivatedLandDetails from './components/FormParts/CultivatedLandDetails';

const AddFarmersDataPage: React.FC = () => {
    const handleFormSubmission = (formData: Farmer) => {
        console.log(formData);
    };

    return (
        <Container>
            <Grid spacing="comfortable">
                <GridColumn medium={12}>
                    <Form onSubmit={handleFormSubmission}>
                        {({ formProps, submitting }) => (
                            <form {...formProps}>
                                <FormHeader title="Add Farmer Details" />
                                <Grid layout="fluid">
                                    <GridColumn medium={4}>
                                        <PersonalDetailsForm />
                                    </GridColumn>
                                    <GridColumn medium={4}>
                                        <BankDetails />
                                    </GridColumn>
                                    <GridColumn medium={4}>
                                        <AddressDetails />
                                    </GridColumn>
                                    <GridColumn medium={12}>
                                        <CultivatedLandDetails />
                                    </GridColumn>
                                </Grid>
                                <FormFooter>
                                    <LoadingButton
                                        type="submit"
                                        appearance="primary"
                                        isLoading={submitting}
                                    >
                                        Add Farmer
                                    </LoadingButton>
                                </FormFooter>
                            </form>
                        )}
                    </Form>
                </GridColumn>
            </Grid>
        </Container>
    );
};

export default AddFarmersDataPage;
