import React from 'react';
import Header from 'renderer/components/Header/Header';
import Sidebar from 'renderer/components/Sidebar/Sidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
}: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen max-w-screen-2xl mx-auto 2xl:border-l 2xl:border-r 2xl:border-gray1 overflow-hidden max-h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <main className="pl-8 pr-9 py-10 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
