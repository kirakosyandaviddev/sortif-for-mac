import React from 'react';
import SettingsTabs from 'renderer/components/SettingsTabs/SettingsTabs';
import SecondaryButton from 'renderer/components/UI/Buttons/SecondaryButton';
import Input from 'renderer/components/UI/Input/Input';
import ClockIcon20 from 'renderer/environment/icons/ClockIcon20';
import MainLayout from 'renderer/layouts/MainLayout';

const ProfileSettingsPage: React.FC = () => {
  return (
    <MainLayout>
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-size_20 text-dark2 ">Profile information</span>
          <SecondaryButton
            className="text-white"
            title="SAVE CHANGES"
            onClick={() => {}}
            type="button"
            leftIcon={() => <ClockIcon20 />}
          />
        </div>
        {/* Tabs */}
        <SettingsTabs />
        {/* First Inputs Block */}
        <div className="pt-14">
          <div className="text-size_11 text-dark4 font-semibold font-inter-semi uppercase mb-6">
            PROFILE INFORMATION FOR INVOICE
          </div>
          <div className="flex flex-col pb-16 border-b border-gray1">
            <div className="flex mb-6">
              <Input
                className="mr-5"
                name="firstName"
                label="FIRST NAME"
                onChange={() => {}}
                value=""
                placeholder="John"
              />
              <Input
                className="mr-5"
                name="lastName"
                label="LAST NAME"
                onChange={() => {}}
                value=""
                placeholder="Doe"
              />
              <Input
                name="company"
                label="COMPANY NAME"
                onChange={() => {}}
                value=""
                placeholder="Sample company"
              />
            </div>
            <div className="flex">
              <Input
                className="mr-5"
                name="postalCode"
                label="POSTAL CODE"
                onChange={() => {}}
                value=""
                placeholder="XXXX"
              />
              <Input
                className="mr-5"
                name="street"
                label="STREET"
                onChange={() => {}}
                value=""
                placeholder="sample-street-21"
              />
            </div>
          </div>
        </div>
        {/* Second Inputs Block */}
        <div className="flex pt-10 pb-14 border-b border-gray1">
          <div className="flex flex-col mr-28">
            <div className="text-size_11 text-dark4 font-semibold font-inter-semi uppercase mb-6">
              ACCOUNT INFORMATION
            </div>
            <div className="flex mb-6">
              <Input
                className="mr-5"
                name="email"
                label="E-MAIL ADDRESS"
                onChange={() => {}}
                value=""
                placeholder="John"
              />
              <Input
                name="password"
                label="CHANGE PASSWORD"
                onChange={() => {}}
                value=""
                placeholder="Old password"
              />
            </div>
            <div className="inline-flex">
              <Input
                name="confirmPassword"
                label="CONFIRM PASSWORD"
                onChange={() => {}}
                value=""
                placeholder="New password"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between mb-6">
              <span className="text-size_11 text-dark4 font-semibold font-inter-semi uppercase">
                UPLOAD AVATAR
              </span>
              <span className="text-size_12 text-gray16">Optional</span>
            </div>

            <div className="flex flex-col justify-center text-center px-6 pt-16 pb-10 bg-gray17 rounded-md w-80">
              <div className="flex flex-col text-sm text-gray-600 mb-6">
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer relative"
                >
                  <div className="inline-flex text-dark4 text-size_12 py-3 px-4 rounded-md border border-neutral20 bg-white shadow-input">
                    Browse Files
                  </div>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    accept="images/*"
                  />
                </label>
              </div>
              <p className="text-size_12_lg text-neutral40">
                JPG, PNG, GIF up to 8MB
              </p>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProfileSettingsPage;
