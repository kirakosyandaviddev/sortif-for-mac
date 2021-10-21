import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavItemProps {
  className?: string;
  href: string;
  title: string;
  icon: () => React.ReactNode;
  badge?: () => React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({
  className,
  href,
  title,
  icon,
  badge,
}: NavItemProps) => {
  return (
    <NavLink
      to={href}
      className={`flex items-end text-dark4 hover:text-black ${className}`}
    >
      <span className="mr-2.5 w-6">{icon()}</span>
      <span className="text-size_14 font-semibold font-inter-semi w-32">
        {title}
      </span>
      {badge && <span>{badge()}</span>}
    </NavLink>
  );
};

NavItem.defaultProps = {
  className: '',
  badge: () => null,
};

export default NavItem;
