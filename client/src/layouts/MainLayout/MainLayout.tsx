import React from 'react';
import { Content, Main, PageLayout, TopNavigation } from '@atlaskit/page-layout';
import Navbar from './components/Navbar';

const MainLayout: React.FC = ({ children }) => {
    return (
        <PageLayout>
            <TopNavigation isFixed id="navigation" skipLinkTitle="Navigation">
                <Navbar />
            </TopNavigation>
            <Content testId="content">
                <Main>{children}</Main>
            </Content>
        </PageLayout>
    );
};

export default MainLayout;
