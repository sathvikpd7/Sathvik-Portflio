import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Plus, Edit2 } from 'lucide-react';
import { format, addDays, startOfWeek, endOfWeek, isToday } from 'date-fns';
import Button from './Button';

type MealItem = {
  time: string;
  items: string[];
};

type DayMeals = {
  breakfast: MealItem;
  lunch: MealItem;
  dinner: MealItem;
};

type MealSchedule = {
  [date: string]: DayMeals;
};

// Mock data for meals
const mockMeals: MealSchedule = {
  '2024-03-07': {
    breakfast: {
      time: '7:00 AM - 9:00 AM',
      items: ['Scrambled Eggs', 'Toast', 'Fruit Salad', 'Coffee/Tea']
    },
    lunch: {
      time: '12:00 PM - 2:00 PM',
      items: ['Grilled Chicken Sandwich', 'French Fries', 'Green Salad', 'Iced Tea']
    },
    dinner: {
      time: '6:00 PM - 8:00 PM',
      items: ['Spaghetti Bolognese', 'Garlic Bread', 'Caesar Salad', 'Brownie']
    }
  },
  '2024-03-08': {
    breakfast: {
      time: '7:00 AM - 9:00 AM',
      items: ['Pancakes', 'Bacon', 'Fresh Fruit', 'Orange Juice']
    },
    lunch: {
      time: '12:00 PM - 2:00 PM',
      items: ['Vegetable Stir Fry', 'Steamed Rice', 'Spring Rolls', 'Green Tea']
    },
    dinner: {
      time: '6:00 PM - 8:00 PM',
      items: ['Roast Chicken', 'Mashed Potatoes', 'Mixed Vegetables', 'Apple Pie']
    }
  }
};

type MealTimetableProps = {
  isAdmin?: boolean;
  onAddMeal?: (date: string, mealType: string) => void;
  onEditMeal?: (date: string, mealType: string) => void;
};

const MealTimetable: React.FC<MealTimetableProps> = ({
  isAdmin = false,
  onAddMeal,
  onEditMeal
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const weekStart = startOfWeek(currentDate, { weekStartsOn: 1 }); // Start from Monday
  const weekEnd = endOfWeek(currentDate, { weekStartsOn: 1 });

  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));

  const handlePreviousWeek = () => {
    setCurrentDate(addDays(currentDate, -7));
  };

  const handleNextWeek = () => {
    setCurrentDate(addDays(currentDate, 7));
  };

  const mealTypes = ['breakfast', 'lunch', 'dinner'] as const;

  return (
    <div className="bg-white rounded-lg shadow">
      {/* Header */}
      <div className="p-6 border-b">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">Weekly Meal Schedule</h2>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePreviousWeek}
            >
              <ChevronLeft size={20} />
            </Button>
            <span className="text-sm font-medium">
              {format(weekStart, 'MMM d')} - {format(weekEnd, 'MMM d, yyyy')}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNextWeek}
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>

      {/* Timetable Grid */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left font-medium text-muted-foreground">Date</th>
              {mealTypes.map((type) => (
                <th key={type} className="p-4 text-left font-medium text-muted-foreground capitalize">
                  {type}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {weekDays.map((date) => {
              const dateStr = format(date, 'yyyy-MM-dd');
              const dayMeals = mockMeals[dateStr] || {};
              const isCurrentDay = isToday(date);

              return (
                <tr key={dateStr} className={`border-b ${isCurrentDay ? 'bg-primary/5' : ''}`}>
                  <td className="p-4">
                    <div className="font-medium">{format(date, 'EEEE')}</div>
                    <div className="text-sm text-muted-foreground">{format(date, 'MMM d')}</div>
                  </td>
                  {mealTypes.map((type) => {
                    const meal = dayMeals[type];
                    return (
                      <td key={type} className="p-4">
                        {meal ? (
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-muted-foreground">{meal.time}</span>
                              {isAdmin && (
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => onEditMeal?.(dateStr, type)}
                                >
                                  <Edit2 size={16} />
                                </Button>
                              )}
                            </div>
                            <ul className="space-y-1">
                              {meal.items.map((item: string, index: number) => (
                                <li key={index} className="text-sm">{item}</li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">No meal scheduled</span>
                            {isAdmin && (
                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => onAddMeal?.(dateStr, type)}
                              >
                                <Plus size={16} />
                              </Button>
                            )}
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MealTimetable; 