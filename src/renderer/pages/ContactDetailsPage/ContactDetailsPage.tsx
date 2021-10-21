import React from 'react';
import ContactDetailsTable from 'renderer/components/tables/ContactDetailsTable';
import BalanceInfoBadge from 'renderer/components/UI/BalanceInfoBadge/BalanceInfoBadge';
import PrimaryButton from 'renderer/components/UI/Buttons/PrimaryButton';
import SearchInput from 'renderer/components/UI/SearchInput/SearchInput';
import DownloadIcon21 from 'renderer/environment/icons/DownloadIcon21';
import MainLayout from 'renderer/layouts/MainLayout';

const ContactDetailsPage: React.FC = () => {
  return (
    <MainLayout>
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-size_20 text-dark2">
            Apple INC - 18 Invoices
          </span>
          <PrimaryButton
            className="text-lime"
            title="Download Folder"
            onClick={() => {}}
            type="button"
            leftIcon={() => <DownloadIcon21 />}
          />
        </div>
        <div className="flex items-center mb-8">
          <BalanceInfoBadge label="Storage" value="0,1 GB" className="mr-5" />
          <SearchInput
            className="w-96"
            name="search"
            value=""
            onChange={() => {}}
            placeholder="Search Invoice ID, Name, Address, Amoun, Date"
          />
        </div>

        <ContactDetailsTable />
      </div>
    </MainLayout>
  );
};

export default ContactDetailsPage;
