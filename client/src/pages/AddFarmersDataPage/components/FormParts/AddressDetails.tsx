import React from 'react';

import { FormSection, Field } from '@atlaskit/form';
import TextField from '@atlaskit/textfield';
import { AsyncSelect, ValueType } from '@atlaskit/select';
import { getPanchayatList } from 'api/utils';

interface OptionType {
    label: string;
    value: number;
}

const AddressDetails: React.FC = () => {
    const loadOptions = async (
        inputValue: string
    ): Promise<OptionType[] | [Record<string, unknown>]> => {
        try {
            const data = await getPanchayatList(inputValue);
            return data.map(({ name, id, district: { name: districtName } }) => ({
                label: `${name} - ${districtName}`,
                value: id,
            }));
        } catch (error) {
            return [{}];
        }
    };

    return (
        <FormSection title="Bank Details">
            <Field name="address.houseName" defaultValue="" label="House Name" isRequired>
                {({ fieldProps }) => <TextField {...fieldProps} />}
            </Field>
            <Field name="address.wardNumber" defaultValue="" label="Acc no." isRequired>
                {({ fieldProps }) => <TextField {...fieldProps} type="number" />}
            </Field>
            <Field<ValueType<OptionType>>
                name="address.panchayat"
                defaultValue={[]}
                label="Panchayat"
                isRequired
            >
                {({ fieldProps: { id, ...rest }, error }) => (
                    <AsyncSelect
                        cacheOptions
                        inputId={id}
                        {...rest}
                        isClearable
                        loadOptions={loadOptions}
                    />
                )}
            </Field>
        </FormSection>
    );
};

export default AddressDetails;
