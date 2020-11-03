import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Spinner from '@atlaskit/spinner';

const Loading: React.FC = () => {
    return (
        <div
            css={css`
                display: flex;
                width: '100%';
                height: '100%';
                justify-content: 'center';
                align-items: 'center';
            `}
        >
            <Spinner size="medium" />
        </div>
    );
};

export default Loading;
