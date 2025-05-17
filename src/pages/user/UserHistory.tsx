import React from 'react';
import PageHeader from '../../components/shared/PageHeader';
import { CalendarClock } from 'lucide-react';

const UserHistory = () => {
  return (
    <div className="p-6">
      <PageHeader 
        title="Meal History" 
        description="View your past meal transactions and history"
        icon={CalendarClock}
      />
      
      <div className="mt-6 bg-white rounded-lg shadow">
        <div className="p-6">
          <div className="space-y-4">
            {/* Placeholder for meal history content */}
            <p className="text-gray-600">Your meal history will be displayed here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHistory;