import React from 'react';
import { Link } from 'react-router-dom';
import { QrCode, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn, formatDate } from '../../lib/utils';
import Button from '../../components/shared/Button';

// Mock data for the timetable
const mockWeekData = [
  {
    date: new Date(2025, 0, 6),
    breakfast: ['Scrambled Eggs', 'Toast', 'Fruit Salad', 'Coffee/Tea'],
    lunch: ['Grilled Chicken Sandwich', 'French Fries', 'Green Salad', 'Iced Tea'],
    dinner: ['Spaghetti Bolognese', 'Garlic Bread', 'Caesar Salad', 'Brownie'],
  },
  {
    date: new Date(2025, 0, 7),
    breakfast: ['Pancakes', 'Maple Syrup', 'Bacon', 'Orange Juice'],
    lunch: ['Vegetable Soup', 'Tuna Sandwich', 'Chips', 'Soda'],
    dinner: ['Baked Fish', 'Rice Pilaf', 'Steamed Vegetables', 'Cheesecake'],
  },
  {
    date: new Date(2025, 0, 8),
    breakfast: ['Oatmeal', 'Fresh Berries', 'Yogurt', 'Coffee/Tea'],
    lunch: ['Beef Burrito', 'Spanish Rice', 'Refried Beans', 'Churro'],
    dinner: ['Roast Chicken', 'Mashed Potatoes', 'Green Beans', 'Apple Pie'],
  },
  {
    date: new Date(2025, 0, 9),
    breakfast: ['Breakfast Burrito', 'Salsa', 'Fresh Fruit', 'Coffee/Tea'],
    lunch: ['Pizza', 'Garden Salad', 'Breadsticks', 'Soda'],
    dinner: ['Stir Fry Tofu', 'Steamed Rice', 'Spring Rolls', 'Fortune Cookie'],
  },
  {
    date: new Date(2025, 0, 10),
    breakfast: ['French Toast', 'Syrup', 'Sausage Links', 'Orange Juice'],
    lunch: ['Chicken Caesar Wrap', 'Potato Salad', 'Pickle', 'Iced Tea'],
    dinner: ['Beef Stroganoff', 'Egg Noodles', 'Broccoli', 'Chocolate Cake'],
  },
  {
    date: new Date(2025, 0, 11),
    breakfast: ['Bagel with Cream Cheese', 'Smoked Salmon', 'Fruit Cup', 'Coffee/Tea'],
    lunch: ['Hamburger', 'Sweet Potato Fries', 'Coleslaw', 'Milkshake'],
    dinner: ['Vegetable Lasagna', 'Garlic Bread', 'Caesar Salad', 'Tiramisu'],
  },
  {
    date: new Date(2025, 0, 12),
    breakfast: ['Belgian Waffles', 'Whipped Cream', 'Strawberries', 'Coffee/Tea'],
    lunch: ['Grilled Cheese', 'Tomato Soup', 'Apple', 'Lemonade'],
    dinner: ['BBQ Ribs', 'Corn on the Cob', 'Baked Beans', 'Ice Cream'],
  },
];

const PublicTimetable: React.FC = () => {
  const [currentWeek, setCurrentWeek] = React.useState(mockWeekData);
  
  const handlePreviousWeek = () => {
    // In a real app, this would fetch the previous week's data
    alert('In a real app, this would load the previous week');
  };
  
  const handleNextWeek = () => {
    // In a real app, this would fetch the next week's data
    alert('In a real app, this would load the next week');
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <QrCode className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl">MealManage</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link to="/login" className="text-sm font-medium hover:text-primary">
              Login
            </Link>
            <Button href="/register" variant="primary" size="sm">
              Sign Up
            </Button>
          </nav>
          <div className="md:hidden">
            <Button href="/login" variant="primary" size="sm">
              Login
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Weekly Meal Timetable</h1>
          <p className="text-muted-foreground mb-6">
            View what's on the menu for the week of {formatDate(currentWeek[0].date)} to {formatDate(currentWeek[6].date)}
          </p>

          {/* Week Navigation */}
          <div className="flex justify-between items-center mb-6">
            <Button 
              onClick={handlePreviousWeek} 
              variant="outline" 
              size="sm"
              className="flex items-center gap-1"
            >
              <ChevronLeft size={16} />
              Previous Week
            </Button>
            
            <Button 
              onClick={handleNextWeek} 
              variant="outline" 
              size="sm"
              className="flex items-center gap-1"
            >
              Next Week
              <ChevronRight size={16} />
            </Button>
          </div>

          {/* Timetable */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-3 bg-secondary text-left">Day</th>
                  <th className="border p-3 bg-secondary text-left">Breakfast</th>
                  <th className="border p-3 bg-secondary text-left">Lunch</th>
                  <th className="border p-3 bg-secondary text-left">Dinner</th>
                </tr>
              </thead>
              <tbody>
                {currentWeek.map((day, index) => (
                  <tr key={index} className={cn(
                    "transition-colors",
                    new Date().toDateString() === day.date.toDateString() 
                      ? "bg-primary/5" 
                      : index % 2 === 0 ? "bg-white" : "bg-secondary/30"
                  )}>
                    <td className="border p-3">
                      <div className="font-medium">
                        {day.date.toLocaleDateString('en-US', { weekday: 'long' })}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {day.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </div>
                    </td>
                    <td className="border p-3">
                      <ul className="list-disc list-inside space-y-1">
                        {day.breakfast.map((item, i) => (
                          <li key={i} className="text-sm">{item}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="border p-3">
                      <ul className="list-disc list-inside space-y-1">
                        {day.lunch.map((item, i) => (
                          <li key={i} className="text-sm">{item}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="border p-3">
                      <ul className="list-disc list-inside space-y-1">
                        {day.dinner.map((item, i) => (
                          <li key={i} className="text-sm">{item}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA */}
          <div className="mt-8 p-6 bg-primary/5 rounded-lg text-center">
            <h2 className="text-xl font-bold mb-3">Want to book meals or access more features?</h2>
            <p className="text-muted-foreground mb-4">
              Sign up for an account to book meals, get your personalized QR code, and access your meal history.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/register" variant="primary">
                Create Account
              </Button>
              <Button href="/login" variant="outline">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card py-6 border-t mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; 2025 MealManage. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PublicTimetable;