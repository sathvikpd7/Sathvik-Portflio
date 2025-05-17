import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu, X, Home, CalendarClock, QrCode, History, FileText, UserCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import SidebarLink from '../components/shared/SidebarLink';
import Button from '../components/shared/Button';

const UserLayout: React.FC = () => {
  const { user, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex min-h-screen">
      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-40">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleSidebar}
          aria-label="Toggle Menu"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-card border-r transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-4 border-b">
            <h2 className="text-xl font-bold">Meal Management</h2>
            <p className="text-sm text-muted-foreground">User Dashboard</p>
          </div>

          {/* Sidebar Links */}
          <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
            <SidebarLink
              title="Dashboard"
              path="/user"
              icon={<Home size={18} />}
            />
            <SidebarLink
              title="My Meals"
              path="/user/meals"
              icon={<CalendarClock size={18} />}
            />
            <SidebarLink
              title="My QR Code"
              path="/user/qrcode"
              icon={<QrCode size={18} />}
            />
            <SidebarLink
              title="Meal History"
              path="/user/history"
              icon={<History size={18} />}
            />
            <SidebarLink
              title="My Reports"
              path="/user/reports"
              icon={<FileText size={18} />}
            />
            <SidebarLink
              title="Profile"
              path="/user/profile"
              icon={<UserCircle size={18} />}
            />
          </nav>

          {/* User Info & Logout */}
          <div className="p-4 border-t">
            <div className="flex items-center space-x-3 mb-3">
              <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                {user?.name.charAt(0)}
              </div>
              <div>
                <p className="font-medium text-sm">{user?.name}</p>
                <p className="text-xs text-muted-foreground">{user?.email}</p>
              </div>
            </div>
            <Button 
              onClick={logout} 
              variant="outline" 
              className="w-full justify-start"
            >
              Logout
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64">
        <div className="p-6">
          <Outlet />
        </div>
      </main>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden" 
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default UserLayout;