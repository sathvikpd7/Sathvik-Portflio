import React from 'react';
import PageHeader from '../../components/shared/PageHeader';

const UserMeals = () => {
  return (
    <div className="p-6">
      <PageHeader 
        title="Meal Plans" 
        description="View and manage your meal plans"
      />
      
      <div className="mt-6 bg-white rounded-lg shadow">
        <div className="p-6">
          {/* Meal plans content will be implemented later */}
          <p className="text-gray-600">Your meal plans will be displayed here.</p>
        </div>
      </div>
    </div>
  );
};

export default UserMeals;