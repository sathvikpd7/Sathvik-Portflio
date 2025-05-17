import React from 'react';
import { CalendarClock } from 'lucide-react';
import PageHeader from '../../components/shared/PageHeader';
import MealTimetable from '../../components/shared/MealTimetable';

const UserTimetable: React.FC = () => {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Meal Timetable"
        description="View the weekly meal schedule"
        icon={CalendarClock}
      />

      <MealTimetable isAdmin={false} />
    </div>
  );
};

export default UserTimetable; 