import React, { useMemo } from 'react';
import { useLocation } from 'react-router';
import ArrowLeft20 from 'renderer/environment/icons/ArrowLeft20';
import LogoutIcon24 from 'renderer/environment/icons/LogoutIcon24';
import useNavigation from 'renderer/hooks/useNavigation';
import DefaultButton from '../UI/Buttons/DefaultButton';

const Header: React.FC = () => {
  const { routes, navigate, goBack } = useNavigation();
  const { pathname } = useLocation();

  const pageTitle = useMemo<string | React.ReactNode>(() => {
    if (pathname === routes.dashboard) {
      return 'Home';
    }

    if (pathname === routes.contacts) {
      return 'Contacts';
    }

    if (pathname.includes(routes.contacts)) {
      return (
        <div>
          <button
            type="button"
            className="mr-2 cursor-pointer"
            onClick={() => goBack()}
          >
            <ArrowLeft20 />
          </button>
          <span>Back to contacts</span>
        </div>
      );
    }

    if (pathname.includes(routes.addEditMailConfig(''))) {
      return 'Add mail account';
    }

    if (pathname.includes('/settings-')) {
      return 'Account settings';
    }

    return 'Home';
  }, [pathname, routes]);

  return (
    <header className="flex items-center justify-between w-full py-8 pl-8 pr-9 border-b border-gray1">
      <div className="text-size_24_lg text-dark2 font-grotesk-reg">
        {pageTitle}
      </div>
      <div className="flex items-center">
        <span className="text-size_14 text-dark2 font-grotesk-reg mr-8">
          1 GB Storage
        </span>
        <DefaultButton
          title="Secure Log Out"
          onClick={() => navigate(routes.login)}
          type="button"
          leftIcon={() => <LogoutIcon24 />}
        />
      </div>
    </header>
  );
};

export default Header;
