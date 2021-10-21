import React from 'react';
import { NavLink } from 'react-router-dom';

import AuthInput from 'renderer/components/UI/AuthInput/AuthInput';
import Badge from 'renderer/components/UI/Badge/Badge';
import PrimaryButtonLarge from 'renderer/components/UI/Buttons/PrimaryButtonLarge';
import useNavigation from 'renderer/hooks/useNavigation';
import AuthLayout from 'renderer/layouts/AuthLayout';
import CheckIcon14 from '../../environment/icons/CheckIcon14';
import loginImgSrc from '../../../../assets/login-img.svg';

const LoginPage: React.FC = () => {
  const { routes, navigate } = useNavigation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(routes.dashboard);
  };

  return (
    <AuthLayout asideContent={<img src={loginImgSrc} alt="login" />}>
      <div className="flex flex-col">
        <div className="flex justify-between border-b border-green pb-7 mb-10">
          <div className="text-size_16 font-semibold font-inter-semi text-black">
            Login
          </div>
          <NavLink to={routes.signUp} className="text-size_13 text-gray2">
            Create your account
          </NavLink>
        </div>

        <form onSubmit={handleSubmit}>
          <AuthInput
            className="mb-8"
            name="email"
            value=""
            label="Your email"
            placeholder="email@example.com"
            onChange={() => {}}
            onBlur={() => {}}
          />
          <div className="flex flex-col mb-10">
            <AuthInput
              className="mb-4"
              name="password"
              value=""
              label="Password"
              placeholder="Password"
              onChange={() => {}}
              onBlur={() => {}}
            />
            <Badge
              label="completely encrypted"
              rightIcon={() => <CheckIcon14 />}
            />
          </div>
          <div className="pt-9 border-t border-gray4">
            <div className="mx-8">
              <PrimaryButtonLarge
                className="w-full"
                title="Login in to your account"
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

export default LoginPage;
