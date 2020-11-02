import React from 'react';
import { Content, PageLayout, Main } from '@atlaskit/page-layout';

const MinimalLayout: React.FC = ({ children }) => {
    return (
        <PageLayout>
            <Content>
                <Main>{children}</Main>
            </Content>
        </PageLayout>
    );
};

export default MinimalLayout;
