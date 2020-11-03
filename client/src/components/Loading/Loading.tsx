import React from 'react';

import Spinner from '@atlaskit/spinner';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

const Loading: React.FC = () => {
    return (
        <Container>
            <Spinner size="large" />
        </Container>
    );
};

export default Loading;
