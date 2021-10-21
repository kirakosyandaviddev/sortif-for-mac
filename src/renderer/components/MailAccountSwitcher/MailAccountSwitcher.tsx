import React from 'react';
import SecondaryButtonLarge from '../UI/Buttons/SecondaryButtonLarge';

const MailAccountSwitcher = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="text-size_12 text-dark4 mb-4">Select mail address</div>
      {/* Accountsp */}
      <div className="flex flex-col mb-10">
        <div className="flex items-center p-3 rounded border border-gray15 mb-2">
          <input
            defaultChecked
            id="mail-test"
            name="mail"
            type="radio"
            className="focus:ring-green h-4 w-4 text-green border-gray-300"
          />
          <label
            htmlFor="mail-test"
            className="ml-2 block text-size_13 text-dark4"
          >
            mail-mail-test@domain.com
          </label>
        </div>
        <div className="flex items-center p-3 rounded border border-gray15">
          <input
            id="mail"
            name="mail"
            type="radio"
            className="focus:ring-green h-4 w-4 text-green border-gray-300"
          />
          <label htmlFor="mail" className="ml-2 block text-size_13 text-dark4">
            mail@domain.com
          </label>
        </div>
      </div>
      <SecondaryButtonLarge
        title="Switch mail account"
        onClick={() => {}}
        type="button"
      />
    </div>
  );
};

export default MailAccountSwitcher;
