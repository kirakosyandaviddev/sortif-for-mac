import React from 'react';

import DefaultButtonLarge from 'renderer/components/UI/Buttons/DefaultButtonLarge';
import PrimaryButtonLarge from 'renderer/components/UI/Buttons/PrimaryButtonLarge';
import ArrowLeft20 from 'renderer/environment/icons/ArrowLeft20';
import useNavigation from 'renderer/hooks/useNavigation';
import AuthLayout from 'renderer/layouts/AuthLayout';
import loginImgSrc from '../../../../assets/login-img.svg';

const LoginVerifyPage: React.FC = () => {
  const { routes, navigate } = useNavigation();

  return (
    <AuthLayout asideContent={<img src={loginImgSrc} alt="login" />}>
      <div className="flex flex-col">
        <div className="rounded-md bg-light2 shadow-card mb-16">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center w-full border-b border-green mx-2 pt-8 pb-7 ">
              <button
                type="button"
                className="mr-4 cursor-pointer"
                onClick={() => navigate(routes.login)}
              >
                <ArrowLeft20 />
              </button>
              <span className="font-semibold font-inter-semi text-dark4 text-size_16">
                Verification
              </span>
            </div>
          </div>
          <div className="flex flex-col px-6 pt-7 pb-8">
            <div className="mb-6">
              Enter the authorization code sent to ***-*gmail.com.
            </div>
            <div className="flex justify-between mb-8">
              <input
                className="rounded-md py-5 px-4 w-14 h-14 border border-neutral20 text-neutral40 focus:border-green focus:ring-green"
                type="text"
                value=""
                onChange={() => {}}
              />
              <input
                className="rounded-md py-5 px-4 w-14 h-14 border border-neutral20 text-neutral40 focus:border-green focus:ring-green"
                type="text"
                value=""
                onChange={() => {}}
              />
              <input
                className="rounded-md py-5 px-4 w-14 h-14 border border-neutral20 text-neutral40 focus:border-green focus:ring-green"
                type="text"
                value=""
                onChange={() => {}}
              />
              <input
                className="rounded-md py-5 px-4 w-14 h-14 border border-neutral20 text-neutral40 focus:border-green focus:ring-green"
                type="text"
                value=""
                onChange={() => {}}
              />
              <input
                className="rounded-md py-5 px-4 w-14 h-14 border border-neutral20 text-neutral40 focus:border-green focus:ring-green"
                type="text"
                value=""
                onChange={() => {}}
              />
            </div>
            <div className="flex justify-between">
              <DefaultButtonLarge
                title="Reset code"
                onClick={() => {}}
                type="button"
              />
              <DefaultButtonLarge
                title="Verify"
                onClick={() => {}}
                type="button"
              />
            </div>
          </div>
        </div>

        <div className="mx-8">
          <PrimaryButtonLarge
            className="w-full"
            title="Login in to your account"
            onClick={() => navigate(routes.forgotPassword)}
            type="button"
          />
        </div>
      </div>
    </AuthLayout>
  );
};

export default LoginVerifyPage;
