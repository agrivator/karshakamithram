/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';

import { FormSection, Field } from '@atlaskit/form';
import TextField from '@atlaskit/textfield';
import Select, { ValueType } from '@atlaskit/select';
import Button from '@atlaskit/button/standard-button';
import AddCircleIcon from '@atlaskit/icon/glyph/add-circle';
import TrashIcon from '@atlaskit/icon/glyph/trash';
import randomString from 'utils/randomString';

interface OptionType {
    label: string;
    value: string;
}

const landTypeOptions = [
    { label: 'Garden Land', value: 'gardenLand' },
    { label: 'Wet Land', value: 'wetLand' },
];

const ownerShipOptions = [
    { label: 'Owned Land', value: 'own' },
    { label: 'Leased Land', value: 'lease' },
];

const CultivatedLandDetails: React.FC = () => {
    const [landForms, setLandForms] = useState([randomString(5)]);

    const addFormOptions = () => {
        setLandForms([...landForms, randomString(5)]);
    };

    const removeFormOptions = (id: string) => {
        const removedOption = landForms.filter((el) => el !== id);
        setLandForms(removedOption);
    };

    return (
        <FormSection title="Cultivated Land Details">
            <Button onClick={addFormOptions}>
                <AddCircleIcon
                    label="Icon which checks and unchecks itself"
                    secondaryColor="inherit"
                />
            </Button>
            {landForms.map((el, index) => (
                <div key={el}>
                    <Field
                        name={`cultivatedLand.${index}.area`}
                        defaultValue=""
                        label="Area"
                        isRequired
                    >
                        {({ fieldProps }) => <TextField {...fieldProps} type="number" />}
                    </Field>
                    <Field<ValueType<OptionType>>
                        name={`cultivatedLand.${index}.ownerShip`}
                        defaultValue={[]}
                        label="Ownership"
                        isRequired
                    >
                        {({ fieldProps: { id, ...rest }, error }) => (
                            <Select<OptionType>
                                validationState={error ? 'error' : 'default'}
                                inputId={id}
                                {...rest}
                                options={ownerShipOptions}
                                isClearable
                            />
                        )}
                    </Field>
                    <Field<ValueType<OptionType>>
                        name={`cultivatedLand.${index}.typeOfLand`}
                        defaultValue={[]}
                        label="Type of land"
                        isRequired
                    >
                        {({ fieldProps: { id, ...rest }, error }) => (
                            <Select<OptionType>
                                validationState={error ? 'error' : 'default'}
                                inputId={id}
                                {...rest}
                                options={landTypeOptions}
                                isClearable
                            />
                        )}
                    </Field>
                    <Button
                        onClick={() => {
                            removeFormOptions(el);
                        }}
                    >
                        <TrashIcon
                            label="Icon which checks and unchecks itself"
                            secondaryColor="inherit"
                        />
                    </Button>
                </div>
            ))}
        </FormSection>
    );
};

export default CultivatedLandDetails;
