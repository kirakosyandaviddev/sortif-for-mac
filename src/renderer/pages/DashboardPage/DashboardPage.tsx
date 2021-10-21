import React from 'react';
import { NavLink } from 'react-router-dom';
import DashboardTable from 'renderer/components/tables/DashboardTable';
import BalanceInfoBadge from 'renderer/components/UI/BalanceInfoBadge/BalanceInfoBadge';
import GraphIcon40 from 'renderer/environment/icons/GraphIcon40';
import LightningIcon34 from 'renderer/environment/icons/LightningIcon34';
import useNavigation from 'renderer/hooks/useNavigation';
import MainLayout from 'renderer/layouts/MainLayout';

const DashboardPage: React.FC = () => {
  const { routes } = useNavigation();
  return (
    <MainLayout>
      <div>
        <div className="text-size_20 text-dark2 mb-5">Dashboard</div>
        <div className="mb-9">
          <BalanceInfoBadge label="balance" value="2,30 $" />
        </div>
        <section className="flex justify-between mb-7">
          <NavLink to={routes.dashboard}>
            <div className="flex flex-col items-center bg-green text-lime rounded-lg hover:opacity-95 px-11 pt-8 pb-9 mr-2.5">
              <LightningIcon34 />
              <span className="text-white text-size_14_lg mt-1.5">
                add new mail account
              </span>
            </div>
          </NavLink>
          <div className="flex flex-1">
            {/* First Card */}
            <div className="flex flex-col items-center border border-gray1 rounded-tl-lg rounded-bl-lg pt-7 pb-8 w-1/4">
              <span className="mb-6 text-dark4 text-size_16 font-medium font-inter-med">
                Invoices total
              </span>
              <div className="flex items-center">
                <span className="text-size_24 text-dark4 mr-3">24,320</span>
                <span>
                  <GraphIcon40 />
                </span>
              </div>
            </div>
            {/* Second Card */}
            <div className="flex flex-col items-center border border-gray1 pt-7 pb-8 w-1/4">
              <span className="mb-6 text-dark4 text-size_16 font-medium font-inter-med">
                Contacts total
              </span>
              <div className="flex items-center">
                <span className="text-size_24 text-dark4 mr-3">1320</span>
                <span>
                  <GraphIcon40 />
                </span>
              </div>
            </div>
            {/* Third Card */}
            <div className="flex flex-col items-center border border-gray1 pt-7 pb-8 w-1/4">
              <span className="mb-6 text-dark4 text-size_16 font-medium font-inter-med">
                Storage total
              </span>
              <div className="flex items-center">
                <span className="text-size_24 text-dark4 mr-3">0,3 GB</span>
                <span>
                  <GraphIcon40 />
                </span>
              </div>
            </div>
            {/* First Card */}
            <div className="flex flex-col items-center justify-center border border-gray1 rounded-tr-lg rounded-br-lg pt-7 pb-8 w-1/4">
              <span className="text-size_24 text-dark4 mb-0.5-3">2,30 $</span>
              <span className="text-dark4 text-size_12">monthly</span>
            </div>
          </div>
        </section>

        <DashboardTable />
      </div>
    </MainLayout>
  );
};

export default DashboardPage;
