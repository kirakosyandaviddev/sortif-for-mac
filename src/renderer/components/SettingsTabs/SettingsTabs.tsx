import React from 'react';
import { NavLink } from 'react-router-dom';
import useNavigation from 'renderer/hooks/useNavigation';

const SettingsTabs = () => {
  const { routes } = useNavigation();
  return (
    <nav className="border-b border-gray1 pb-4">
      <NavLink
        to={routes.profileSettings}
        className="text-size_13 text-dark4 font-medium font-inter-med rounded-md py-2.5 px-3.5 mr-5"
        activeClassName="active-tab"
      >
        Profile information
      </NavLink>
      <NavLink
        to={routes.accountsSettings}
        className="text-size_13 text-dark4 font-medium font-inter-med rounded-md py-2.5 px-3.5 mr-5"
        activeClassName="active-tab"
      >
        Mail accounts
      </NavLink>
      <NavLink
        to={routes.paymentSettings}
        className="text-size_13 text-dark4 font-medium font-inter-med rounded-md py-2.5 px-3.5"
        activeClassName="active-tab"
      >
        Payment method
      </NavLink>
    </nav>
  );
};

export default SettingsTabs;
