import React from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import AuthLogo from 'renderer/components/UI/Logo/AuthLogo';
import useNavigation from 'renderer/hooks/useNavigation';

interface AuthLayoutProps {
  children: React.ReactNode;
  asideContent: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  asideContent,
}: AuthLayoutProps) => {
  const { pathname } = useLocation();
  const { routes } = useNavigation();

  return (
    <div className="flex min-h-screen ">
      <div className="w-1/2 pt-36 pb-14 flex justify-center">
        <div className="flex flex-col max-w-md w-full">
          <header
            className={`flex flex-col ${
              pathname === routes.signUp ? 'mb-20' : 'mb-12'
            }`}
          >
            <AuthLogo />
            {pathname !== routes.signUp && (
              <span className="mt-5 text-size_14 font-medium font-inter-med">
                Welcome back
              </span>
            )}
          </header>
          <main>{children}</main>
          <footer className="flex flex-1 items-end">
            <NavLink
              to={routes.root}
              className="text-size_12_lg text-gray6 mr-5"
            >
              Home
            </NavLink>
            <NavLink
              to={routes.root}
              className="text-size_12_lg text-gray6 mr-5"
            >
              Imprint
            </NavLink>
            <NavLink
              to={routes.forgotPassword}
              className="text-size_12_lg text-gray6"
            >
              Helpcenter
            </NavLink>
          </footer>
        </div>
      </div>
      <aside className="w-1/2 flex justify-center items-center bg-green">
        {asideContent}
      </aside>
    </div>
  );
};

export default AuthLayout;
