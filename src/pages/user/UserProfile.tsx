import React from 'react';
import PageHeader from '../../components/shared/PageHeader';
import { UserCircle } from 'lucide-react';

const UserProfile = () => {
  return (
    <div className="p-6">
      <PageHeader 
        title="My Profile" 
        description="View and manage your account settings"
        icon={UserCircle}
      />
      
      <div className="mt-6 bg-white rounded-lg shadow p-6">
        <div className="space-y-6">
          <div className="border-b pb-6">
            <h3 className="text-lg font-medium text-gray-900">Personal Information</h3>
            <div className="mt-4 grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <div className="mt-1 text-gray-900">John Doe</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <div className="mt-1 text-gray-900">john.doe@example.com</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Student ID</label>
                <div className="mt-1 text-gray-900">12345678</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900">Meal Plan Information</h3>
            <div className="mt-4 grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Current Plan</label>
                <div className="mt-1 text-gray-900">Standard Meal Plan</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Balance</label>
                <div className="mt-1 text-gray-900">$250.00</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Plan Expiry</label>
                <div className="mt-1 text-gray-900">December 31, 2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;