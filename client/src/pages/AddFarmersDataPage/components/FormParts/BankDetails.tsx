import React from 'react';

import { FormSection, Field } from '@atlaskit/form';
import TextField from '@atlaskit/textfield';

const BankDetails: React.FC = () => {
    return (
        <FormSection title="Bank Details">
            <Field
                name="bankAccount.accountHolderName"
                defaultValue=""
                label="Account Name"
                isRequired
            >
                {({ fieldProps }) => <TextField {...fieldProps} />}
            </Field>
            <Field name="bankAccount.accountNumber" defaultValue="" label="Acc no." isRequired>
                {({ fieldProps }) => <TextField {...fieldProps} type="number" />}
            </Field>
            <Field name="bankAccount.ifsc" defaultValue="" label="IFSC Code" isRequired>
                {({ fieldProps }) => <TextField {...fieldProps} />}
            </Field>
        </FormSection>
    );
};

export default BankDetails;
