import React from 'react';
import SettingsTabs from 'renderer/components/SettingsTabs/SettingsTabs';
import MailAccountsTable from 'renderer/components/tables/MailAccountsTable';
import MainLayout from 'renderer/layouts/MainLayout';

const AccountsSettingsPage: React.FC = () => {
  return (
    <MainLayout>
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-size_20 text-dark2 pt-1.5 pb-2">
            Mail accounts
          </span>
        </div>
        {/* Tabs */}
        <SettingsTabs />
        {/* Contnet */}
        <div className="flex justify-between flex-wrap pt-10">
          <div className="flex flex-col w-64 mb-10">
            <span className="text-size_11 text-dark4 font-semibold font-inter-semi uppercase mb-5">
              ALL MAIL ACCOUNTS
            </span>
            <span className="text-size_12 text-dark4">
              Here is an overview of all existing users. When the mail account
              is deleted, all data is completely deleted.
              <br />
              <br />
              You can`t take it back. You have to create and import your data
              again.
            </span>
          </div>
          {/* ACcounts Table */}
          <MailAccountsTable />
        </div>
      </div>
    </MainLayout>
  );
};

export default AccountsSettingsPage;
