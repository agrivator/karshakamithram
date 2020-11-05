import React from 'react';
import {
    AtlassianNavigation,
    PrimaryButton,
    CustomProductHome,
} from '@atlaskit/atlassian-navigation';
import AgrivatorLogo from 'assets/images/logo.png';

const ProductHome = () => (
    <CustomProductHome
        onClick={console.log}
        iconUrl={AgrivatorLogo}
        logoUrl={AgrivatorLogo}
        iconAlt="Agrivator"
        logoAlt="Agrivator"
        siteTitle="Karshakamithram"
    />
);

const Navbar: React.FC = () => {
    return (
        <AtlassianNavigation
            label="site"
            moreLabel="More"
            primaryItems={[<PrimaryButton isHighlighted>Farmers</PrimaryButton>]}
            renderProductHome={ProductHome}
        />
    );
};

export default Navbar;
