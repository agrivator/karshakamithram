import React from 'react';

import { FormSection, Field } from '@atlaskit/form';
import TextField from '@atlaskit/textfield';
import Select, { ValueType } from '@atlaskit/select';

interface OptionType {
    label: string;
    value: string;
}

const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Unknown', value: 'unknown' },
];

const categoryOptions = [
    { label: 'SC', value: 'sc' },
    { label: 'General', value: 'general' },
];

const PersonalDetailsForm: React.FC = () => {
    return (
        <FormSection title="Contact Information">
            <Field name="name" defaultValue="" label="Name" isRequired>
                {({ fieldProps }) => <TextField {...fieldProps} />}
            </Field>
            <Field name="contact" defaultValue="" label="Contact no." isRequired>
                {({ fieldProps }) => <TextField {...fieldProps} type="number" />}
            </Field>
            <Field name="adhar" defaultValue="" label="Adhar no." isRequired>
                {({ fieldProps }) => <TextField {...fieldProps} type="number" />}
            </Field>
            <Field<ValueType<OptionType>> name="gender" defaultValue={[]} label="Gender" isRequired>
                {({ fieldProps: { id, ...rest }, error }) => (
                    <Select<OptionType>
                        validationState={error ? 'error' : 'default'}
                        inputId={id}
                        {...rest}
                        options={genderOptions}
                        isClearable
                    />
                )}
            </Field>
            <Field<ValueType<OptionType>> name="category" label="Category" isRequired>
                {({ fieldProps: { id, ...rest }, error }) => (
                    <Select<OptionType>
                        validationState={error ? 'error' : 'default'}
                        inputId={id}
                        {...rest}
                        options={categoryOptions}
                        isClearable
                    />
                )}
            </Field>
        </FormSection>
    );
};

export default PersonalDetailsForm;
