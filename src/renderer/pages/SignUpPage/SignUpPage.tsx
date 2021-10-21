import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import AuthInput from 'renderer/components/UI/AuthInput/AuthInput';
import Badge from 'renderer/components/UI/Badge/Badge';
import Checkbox from 'renderer/components/UI/Checkbox/Checkbox';
import PrimaryButtonLarge from 'renderer/components/UI/Buttons/PrimaryButtonLarge';
import CheckIcon14 from 'renderer/environment/icons/CheckIcon14';
import useNavigation from 'renderer/hooks/useNavigation';
import AuthLayout from 'renderer/layouts/AuthLayout';
import signUpImgSrc from '../../../../assets/signup-img.svg';

const SignUpPage: React.FC = () => {
  const { routes, navigate } = useNavigation();
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(routes.loginVerify);
  };

  return (
    <AuthLayout
      asideContent={
        <div className="flex flex-col items-center">
          <img src={signUpImgSrc} alt="signup" />
          <span className="text-size_16 text-white">
            Save more than few hours per month with us.
          </span>
        </div>
      }
    >
      <div className="flex flex-col">
        <div className="flex justify-between border-b border-green pb-7 mb-10">
          <div className="text-size_16 font-semibold font-inter-semi text-black">
            New Account
          </div>
          <NavLink to={routes.login} className="text-size_13 text-gray2">
            Sign In
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
          <div className="flex flex-col mb-12">
            <AuthInput
              className="mb-4"
              name="password"
              value=""
              label="Password"
              placeholder="Password"
              onChange={() => {}}
              onBlur={() => {}}
            />
            <div className="flex">
              <Badge className="mr-2" label="1 lowercase letter" disabled />
              <Badge
                className="mr-2"
                label="completely encrypted"
                rightIcon={() => <CheckIcon14 />}
              />
              <Badge label="1 number" disabled />
            </div>
          </div>
          <div className="pt-9 border-t border-gray4">
            <div className="flex flex-col mx-8">
              <div className="mb-6">
                <Checkbox
                  name="agree"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                >
                  <>
                    <span className="text-size_12_lg">
                      By signing up for an account you agree to our{' '}
                    </span>
                    <a href="/" className="text-size_12_lg text-blue">
                      Terms and Conditions{' '}
                    </a>
                    <span className="text-size_12_lg">and </span>
                    <a href="/" className="text-size_12_lg text-blue">
                      Privacy Policy
                    </a>
                  </>
                </Checkbox>
              </div>
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

export default SignUpPage;
