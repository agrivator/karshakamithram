import React from 'react';
import styled from 'styled-components';

const DivContainer = styled.div`
    max-width: 1024px;
    padding: 1rem;
    width: 100%;
    display: block;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
`;

const Container: React.FC = ({ children }) => {
    return <DivContainer>{children}</DivContainer>;
};

export default Container;
