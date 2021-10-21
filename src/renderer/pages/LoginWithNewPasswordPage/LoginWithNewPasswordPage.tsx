import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthInput from 'renderer/components/UI/AuthInput/AuthInput';
import Badge from 'renderer/components/UI/Badge/Badge';
import PrimaryButtonLarge from 'renderer/components/UI/Buttons/PrimaryButtonLarge';
import CheckIcon14 from 'renderer/environment/icons/CheckIcon14';
import useNavigation from 'renderer/hooks/useNavigation';
import AuthLayout from 'renderer/layouts/AuthLayout';
import forgotPassImgSrc from '../../../../assets/forgot-password-img.svg';

const LoginWithNewPasswordPage: React.FC = () => {
  const { routes, navigate } = useNavigation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(routes.login);
  };

  return (
    <AuthLayout asideContent={<img src={forgotPassImgSrc} alt="forgot" />}>
      <div className="flex flex-col">
        <div className="flex justify-between border-b border-green pb-7 mb-10">
          <div className="text-size_16 font-semibold font-inter-semi text-black">
            Enter new password
          </div>
          <NavLink to={routes.signUp} className="text-size_13 text-gray2">
            Create your account
          </NavLink>
        </div>

        <form onSubmit={handleSubmit}>
          <AuthInput
            className="mb-8 shadow-input"
            name="email"
            value="bowie2032@gmail.com"
            label="Your email"
            placeholder="email@example.com"
            onChange={() => {}}
            onBlur={() => {}}
            readOnly
          />
          <div className="flex flex-col mb-10">
            <AuthInput
              className="mb-4"
              name="password"
              value=""
              label="New password"
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

export default LoginWithNewPasswordPage;
