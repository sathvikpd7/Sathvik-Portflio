import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

type SubMenuItem = {
  title: string;
  path: string;
  icon?: React.ReactNode;
};

type SidebarLinkProps = {
  title: string;
  path: string;
  icon?: React.ReactNode;
  subItems?: SubMenuItem[];
  isCollapsed?: boolean;
};

const SidebarLink: React.FC<SidebarLinkProps> = ({ 
  title, 
  path, 
  icon, 
  subItems = [],
  isCollapsed = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubItems = subItems.length > 0;

  const toggleSubmenu = (e: React.MouseEvent) => {
    if (hasSubItems) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  if (isCollapsed) {
    return (
      <div className="relative group">
        <NavLink 
          to={hasSubItems ? '#' : path}
          onClick={toggleSubmenu}
          className={({ isActive }) => cn(
            "sidebar-link justify-center p-2",
            isActive && !hasSubItems ? "sidebar-link-active" : "sidebar-link-inactive"
          )}
        >
          {icon}
        </NavLink>
        
        {hasSubItems && (
          <div className="absolute left-full top-0 ml-2 hidden group-hover:block z-50">
            <div className="bg-card shadow-lg rounded-md py-2 w-48">
              <div className="px-3 py-2 text-sm font-medium border-b">{title}</div>
              {subItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) => cn(
                    "sidebar-link",
                    isActive ? "sidebar-link-active" : "sidebar-link-inactive"
                  )}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <NavLink
        to={hasSubItems ? '#' : path}
        onClick={toggleSubmenu}
        className={({ isActive }) => cn(
          "sidebar-link",
          isActive && !hasSubItems ? "sidebar-link-active" : "sidebar-link-inactive",
          hasSubItems && "justify-between"
        )}
      >
        <div className="flex items-center gap-3">
          {icon}
          <span>{title}</span>
        </div>
        {hasSubItems && (
          isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />
        )}
      </NavLink>
      
      {hasSubItems && isOpen && (
        <div className="sidebar-submenu">
          {subItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) => cn(
                "sidebar-link",
                isActive ? "sidebar-link-active" : "sidebar-link-inactive"
              )}
            >
              {item.icon}
              <span>{item.title}</span>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarLink;