/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';

import { FormSection, Field } from '@atlaskit/form';
import TextField from '@atlaskit/textfield';
import Select, { ValueType } from '@atlaskit/select';
import Button from '@atlaskit/button/standard-button';
import AddCircleIcon from '@atlaskit/icon/glyph/add-circle';
import TrashIcon from '@atlaskit/icon/glyph/trash';
import randomString from 'utils/randomString';
import styled from 'styled-components';

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

const ButtonContanier = styled.div`
    padding: 1rem 0;
`;

const CultivatedLandDetails: React.FC = () => {
    const [landForms, setLandForms] = useState([randomString(5)]);

    /**
     * to add additional entry
     */
    const addFormOptions = () => {
        setLandForms([...landForms, randomString(5)]);
    };

    /**
     * to remove entry
     * @param id - string
     */
    const removeFormOptions = (id: string) => {
        const removedOption = landForms.filter((el) => el !== id);
        setLandForms(removedOption);
    };

    return (
        <FormSection title="Cultivated Land Details">
            <ButtonContanier>
                <Button
                    onClick={addFormOptions}
                    appearance="primary"
                    iconBefore={
                        <AddCircleIcon
                            label="Icon which checks and unchecks itself"
                            secondaryColor="inherit"
                            size="small"
                        />
                    }
                >
                    Add Entry
                </Button>
            </ButtonContanier>
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
                    <ButtonContanier>
                        <Button
                            onClick={() => {
                                removeFormOptions(el);
                            }}
                            appearance="danger"
                            iconBefore={
                                <TrashIcon
                                    label="Icon which checks and unchecks itself"
                                    secondaryColor="inherit"
                                    size="small"
                                />
                            }
                        >
                            Remove Entry
                        </Button>
                    </ButtonContanier>
                </div>
            ))}
        </FormSection>
    );
};

export default CultivatedLandDetails;
