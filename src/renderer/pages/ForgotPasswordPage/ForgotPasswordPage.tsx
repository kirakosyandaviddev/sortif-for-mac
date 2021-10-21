import React from 'react';
import { NavLink } from 'react-router-dom';

import AuthInput from 'renderer/components/UI/AuthInput/AuthInput';
import PrimaryButtonLarge from 'renderer/components/UI/Buttons/PrimaryButtonLarge';
import useNavigation from 'renderer/hooks/useNavigation';
import AuthLayout from 'renderer/layouts/AuthLayout';
import forgotPassImgSrc from '../../../../assets/forgot-password-img.svg';

const ForgotPasswordPage: React.FC = () => {
  const { routes, navigate } = useNavigation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(routes.loginWithNewPassword);
  };

  return (
    <AuthLayout
      asideContent={<img src={forgotPassImgSrc} alt="forgot-password" />}
    >
      <div className="flex flex-col">
        <div className="flex justify-between border-b border-green pb-7 mb-14">
          <div className="text-size_16 font-semibold font-inter-semi text-black">
            Forgot password?
          </div>
          <NavLink to={routes.login} className="text-size_13 text-gray2">
            Remember your password?
          </NavLink>
        </div>

        <form onSubmit={handleSubmit}>
          <AuthInput
            className="mb-14"
            name="email"
            value=""
            label="Your email"
            placeholder="email@example.com"
            onChange={() => {}}
            onBlur={() => {}}
          />

          <div className="pt-16 border-t border-gray4">
            <div className="mx-8">
              <PrimaryButtonLarge
                className="w-full"
                title="Reset my password"
                onClick={() => {}}
                type="submit"
              />
            </div>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
