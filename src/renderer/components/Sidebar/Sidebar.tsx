import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import AccountsIcon19 from 'renderer/environment/icons/AccountsIcon19';
import ContactsIcon18 from 'renderer/environment/icons/ContactsIcon18';
import HomeIcon19 from 'renderer/environment/icons/HomeIcon19';
import SettingsIcon20 from 'renderer/environment/icons/SettingsIcon20';
import StarIcon22 from 'renderer/environment/icons/StarIcon22';
import SupportIcon20 from 'renderer/environment/icons/SupportIcon20';
import TorchIcon18 from 'renderer/environment/icons/TorchIcon18';
import useNavigation from 'renderer/hooks/useNavigation';
import MailAccountSwitcher from '../MailAccountSwitcher/MailAccountSwitcher';
import SuccessBadge from '../UI/Badge/SuccessBadge';
import WarningBadge from '../UI/Badge/WarningBadge';
import AppLogo from '../UI/Logo/AppLogo';
import Modal from '../UI/Modal/Modal';
import NavItem from '../UI/NavItem/NavItem';

const Sidebar: React.FC = () => {
  const { routes } = useNavigation();
  const [showModal, setShowModal] = useState(false);

  return (
    <aside className="flex flex-col min-h-screen w-80 bg-light1 border-r border-gray1">
      <div className="pt-12 pb-16 pl-9">
        <AppLogo />
      </div>
      <div className="flex flex-col pb-9 border-b border-gray1">
        <NavItem
          className="ml-9 mb-5"
          title="Home"
          href={routes.dashboard}
          icon={() => <HomeIcon19 />}
        />
        <NavItem
          className="ml-9 mb-5"
          title="Contacts"
          href={routes.contacts}
          icon={() => <ContactsIcon18 />}
          badge={() => <WarningBadge label="1,3K" />}
        />
        <NavItem
          className="ml-9"
          title="Accounts"
          href={routes.accountsSettings}
          icon={() => <AccountsIcon19 />}
          badge={() => <SuccessBadge label="4" />}
        />
      </div>
      <div className="border-b border-gray1 pl-9 pb-6 pt-6">
        <NavLink
          to={routes.dashboard}
          className="flex items-end text-dark4 hover:text-black"
        >
          <span className="text-size_12 font-inter-med font-medium mr-2">
            Do you have questions?
          </span>
          <TorchIcon18 />
        </NavLink>
      </div>
      <div className="flex flex-col pt-7 pb-10 border-b border-gray1">
        <span className="ml-8 mb-8 text-size_11 font-medium font-inter-med text-dark-4">
          Quick actions
        </span>
        <NavItem
          className="ml-9 mb-5"
          title="Start import"
          href={routes.paymentSettings}
          icon={() => <StarIcon22 />}
        />
        <NavItem
          className="ml-9 mb-5"
          title="Add mail account"
          href={routes.addEditMailConfig('add')}
          icon={() => <SettingsIcon20 />}
        />
        <NavItem
          className="ml-9 mb-5"
          title="Config settings"
          href={routes.profileSettings}
          icon={() => <SettingsIcon20 />}
        />
        <NavItem
          className="ml-9"
          title="Support"
          href={routes.dashboard}
          icon={() => <SupportIcon20 />}
        />
      </div>
      <div className="flex flex-1 items-end ml-8 mb-8">
        <div className="flex">
          <div className="mr-3">
            {/* <img className="h-10 w-10 rounded-full" src="" alt="" /> */}
            <div className="h-10 w-10 rounded-full bg-gray7" />
          </div>
          <div className="flex flex-col mr-4">
            <span className="text-size_14 font-medium font-inter-med text-black mb-1">
              testus..@gmail.com
            </span>
            <span className="text-size_13 text-black">profile settings</span>
          </div>
          <button
            type="button"
            className="pt-1"
            onClick={() => setShowModal(true)}
          >
            <SettingsIcon20 />
          </button>
        </div>
      </div>

      <Modal
        title="Switch mail account"
        open={showModal}
        onClose={() => setShowModal(false)}
      >
        <MailAccountSwitcher />
      </Modal>
    </aside>
  );
};

export default Sidebar;
