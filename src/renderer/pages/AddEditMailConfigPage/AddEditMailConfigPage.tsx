import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BalanceInfoBadge from 'renderer/components/UI/BalanceInfoBadge/BalanceInfoBadge';
import DangerButton from 'renderer/components/UI/Buttons/DangerButton';
import SecondaryButton from 'renderer/components/UI/Buttons/SecondaryButton';
import Input from 'renderer/components/UI/Input/Input';
import ClockIcon20 from 'renderer/environment/icons/ClockIcon20';
import ConnectIcon20 from 'renderer/environment/icons/ConnectIcon20';
import GoogleIcon from 'renderer/environment/icons/GoogleIcon';
import OutlookIcon from 'renderer/environment/icons/OutlookIcon';
import useNavigation from 'renderer/hooks/useNavigation';
import MainLayout from 'renderer/layouts/MainLayout';

const AddEditMailConfigPage: React.FC = () => {
  const { routes } = useNavigation();
  const params = useParams<{ id: string }>();
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (params && params.id) {
      if (params.id !== 'add') {
        setIsEditMode(true);
      }
    }
  }, [params]);

  return (
    <MainLayout>
      <div className="flex flex-col">
        <div className="text-size_20 text-dark2 mb-5">
          Import a fresh mail account
        </div>
        <div className="mb-10">
          <BalanceInfoBadge label="balance" value="1 $" />
        </div>
        {/* Form */}
        <section className="mb-6">
          <div className="flex flex-col bg-white border border-gray1 rounded-lg">
            <div className="bg-green rounded-lg py-4 pl-8">
              <div className="text-size_12 text-white">
                1. ADD MAIL CONFIGURATION VIA (IMAP) - ( 1$ / FOR EACH 20 MB)
              </div>
            </div>
            <div className="flex items-end pt-10 pb-8 px-8">
              <Input
                className="mr-5"
                name="host"
                label="1.) IMAP HOST"
                onChange={() => {}}
                value=""
                placeholder="sample.yourdomain.com"
              />
              <Input
                className="mr-5"
                name="port"
                label="2.) Port incoming MAIL"
                onChange={() => {}}
                value=""
                placeholder="720 PORT SAMPLE"
              />
              <Input
                className="mr-5"
                name="email"
                label="3.) Your mail username"
                onChange={() => {}}
                value=""
                placeholder="720 PORT SAMPLE"
              />
              <Input
                className="mr-5"
                name="password"
                label="3.) Your mail PASSWORD"
                onChange={() => {}}
                value=""
                placeholder="******"
              />
              <DangerButton
                className="whitespace-nowrap text-white"
                title="TEST CONNECTION"
                onClick={() => {}}
                type="button"
                leftIcon={() => <ConnectIcon20 />}
              />
            </div>
          </div>
        </section>
        {/* Gmail And Outlook */}
        <section className="mb-10">
          <div className="flex flex-col bg-white border border-gray1 rounded-lg">
            <div className="bg-gray9 rounded-lg py-4 pl-8">
              <div className="text-size_12 text-dark4 font-medium font-inter-med">
                FOR GMAIL OR OUTLOOK INTERGRATION - USE THIS HERE
              </div>
            </div>
            <div className="flex items-center pt-10 pb-8 pl-8">
              <button type="button" onClick={() => {}} className="mr-10">
                <GoogleIcon />
              </button>
              <button type="button" onClick={() => {}} className="mr-10">
                <OutlookIcon />
              </button>
              <span className="text-size_11 font-semibold font-inter-semi uppercase text-dark4">
                Click on the icons and follow the process. We&apos;ll FETCH the
                settings here.
              </span>
            </div>
          </div>
        </section>
        {/* Start Import */}
        <section>
          <div className="flex flex-col bg-white border border-gray1 rounded-lg">
            <div className="bg-gray9 rounded-lg py-4 pl-8 flex items-center">
              <div className="text-size_12 text-dark4 font-semibold font-inter-semi mr-3">
                START IMPORT
              </div>
              <span className="text-size_12 text-dark4">
                (Import can take a few minutes)
              </span>
            </div>
            <div className="flex pt-10 pb-8 px-8">
              <div className="flex items-center w-full">
                <div className="flex-1 relative mr-6">
                  <div className="mb-2">
                    <span className="text-dark4 font-semibold font-inter-semi text-size_14_lg">
                      30{' '}
                      <span className="font-medium font-inter-med">
                        Invoices found /
                      </span>{' '}
                      22 MB
                    </span>
                  </div>
                  <div className="overflow-hidden h-1.5 text-xs flex rounded bg-neutral1">
                    <div
                      style={{ width: '80%' }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange"
                    />
                  </div>
                </div>

                <SecondaryButton
                  className="text-white"
                  title="START IMPORT"
                  onClick={() => {}}
                  type="button"
                  leftIcon={() => <ClockIcon20 />}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default AddEditMailConfigPage;
