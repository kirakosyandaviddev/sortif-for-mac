import React from 'react';
import ContactsTable from 'renderer/components/tables/ContactsTable';
import BalanceInfoBadge from 'renderer/components/UI/BalanceInfoBadge/BalanceInfoBadge';
import SecondaryButton from 'renderer/components/UI/Buttons/SecondaryButton';
import SearchInput from 'renderer/components/UI/SearchInput/SearchInput';
import DownloadIcon21 from 'renderer/environment/icons/DownloadIcon21';
import MainLayout from 'renderer/layouts/MainLayout';

const ContactsPage: React.FC = () => {
  return (
    <MainLayout>
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-size_20 text-dark2 ">1320 contacts</span>
          <SecondaryButton
            className="text-lime"
            title="Download all folders and invoice structure"
            onClick={() => {}}
            type="button"
            leftIcon={() => <DownloadIcon21 />}
          />
        </div>
        <div className="flex items-center mb-8">
          <BalanceInfoBadge label="balance" value="2,30 $" className="mr-5" />
          <SearchInput
            name="search"
            value=""
            onChange={() => {}}
            placeholder="Search ID, Name, Address"
          />
        </div>

        <ContactsTable />
      </div>
    </MainLayout>
  );
};

export default ContactsPage;
