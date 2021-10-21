import React from 'react';
import SettingsTabs from 'renderer/components/SettingsTabs/SettingsTabs';
import PaymentMethodTable from 'renderer/components/tables/PaymentMethodTable';
import PrimaryButton from 'renderer/components/UI/Buttons/PrimaryButton';
import Input from 'renderer/components/UI/Input/Input';
import CheckIcon14 from 'renderer/environment/icons/CheckIcon14';
import MasterCardIcon from 'renderer/environment/icons/MasterCardIcon';
import MainLayout from 'renderer/layouts/MainLayout';

const PaymentSettingsPage: React.FC = () => {
  return (
    <MainLayout>
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-size_20 text-dark2">Payment method</span>
          <PrimaryButton
            className="text-white"
            title="Save changes"
            onClick={() => {}}
            type="button"
            leftIcon={() => <CheckIcon14 />}
          />
        </div>
        {/* Tabs */}
        <SettingsTabs />
        {/* Contnet */}
        <div className="flex flex-col">
          <div className="flex flex-wrap border-b border-gray1 py-6 mb-10">
            <div className="flex flex-col mr-48 mb-10">
              <span className="text-size_11 text-dark4 font-semibold font-inter-semi uppercase mb-9">
                SELECT PAYMENT METHOD
              </span>
              <div className="flex flex-col">
                {/* Card */}
                <div className="flex items-center p-4 rounded bg-gray18 mb-2  w-96">
                  <input
                    defaultChecked
                    id="card"
                    name="payment"
                    type="radio"
                    className="focus:ring-green h-4 w-4 text-green border-gray-300"
                  />
                  <label
                    htmlFor="card"
                    className="ml-2 block text-size_14 text-dark4"
                  >
                    Credit or Debit Card
                  </label>
                </div>
                {/* Card */}
                {/* Paypal */}
                <div className="flex items-center p-4 rounded w-96">
                  <input
                    id="paypal"
                    name="payment"
                    type="radio"
                    disabled
                    className="focus:ring-green h-4 w-4 text-green border-gray-300 disabled:text-neutral40"
                  />
                  <label
                    htmlFor="paypal"
                    className="ml-2 block text-size_14 text-neutral40"
                  >
                    Paypal
                  </label>
                </div>
                {/* Paypal */}
              </div>
            </div>
            {/* Add Card Form */}
            <div className="rounded-xl border border-gray1 px-4 pt-10 pb-6 w-96">
              <div className="mb-10">
                <Input
                  name="cardNumber"
                  label="CARD NUMBER"
                  onChange={() => {}}
                  value=""
                  placeholder=""
                />
              </div>
              <div className="flex items-end">
                <Input
                  style={{ minWidth: '168px' }}
                  className="flex-1 mr-4"
                  name="expiry"
                  label="EXPIRY DATE"
                  onChange={() => {}}
                  value=""
                  placeholder="MM/DD"
                />
                <Input
                  style={{ minWidth: '72px', maxWidth: '72px' }}
                  className="mr-12"
                  inputClassName="w-16 min-w-full"
                  name="cvc"
                  label="CVC"
                  onChange={() => {}}
                  value=""
                  placeholder="000"
                />
                <MasterCardIcon />
              </div>
            </div>
          </div>
          {/* Payments Table */}
          <PaymentMethodTable />
        </div>
      </div>
    </MainLayout>
  );
};

export default PaymentSettingsPage;
