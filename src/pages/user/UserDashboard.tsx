import React from 'react';
import { CalendarClock, Utensils, QrCode, ArrowRight } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import PageHeader from '../../components/shared/PageHeader';
import Button from '../../components/shared/Button';
import { Link } from 'react-router-dom';

// Mock today's meals
const todaysMeals = [
  {
    type: 'Breakfast',
    time: '7:00 AM - 9:00 AM',
    menu: ['Scrambled Eggs', 'Toast', 'Fruit Salad', 'Coffee/Tea'],
    isBooked: true,
    isPast: true,
  },
  {
    type: 'Lunch',
    time: '12:00 PM - 2:00 PM',
    menu: ['Grilled Chicken Sandwich', 'French Fries', 'Green Salad', 'Iced Tea'],
    isBooked: true,
    isPast: false,
  },
  {
    type: 'Dinner',
    time: '6:00 PM - 8:00 PM',
    menu: ['Spaghetti Bolognese', 'Garlic Bread', 'Caesar Salad', 'Brownie'],
    isBooked: false,
    isPast: false,
  },
];

// Mock stats
const stats = [
  { id: 1, name: 'Meals Consumed', value: 24 },
  { id: 2, name: 'Meals Booked', value: 30 },
  { id: 3, name: 'Favorite Meal', value: 'Lunch' },
];

const UserDashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div>
      <PageHeader 
        title={`Welcome, ${user?.name}!`} 
        description="Here's an overview of your meal plan for today"
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white p-6 rounded-lg border shadow-sm flex flex-col"
          >
            <dt className="text-sm font-medium text-muted-foreground">
              {stat.name}
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight">
              {stat.value}
            </dd>
          </div>
        ))}
      </div>

      {/* Today's Meals */}
      <h2 className="text-xl font-semibold mb-4">Today's Meals</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {todaysMeals.map((meal, index) => (
          <div
            key={index}
            className={`p-5 rounded-lg border ${
              meal.isPast
                ? 'bg-muted/50'
                : meal.isBooked
                ? 'bg-success/10 border-success/20'
                : 'bg-white'
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-medium">{meal.type}</h3>
                <p className="text-sm text-muted-foreground">{meal.time}</p>
              </div>
              <div className="flex items-center">
                {meal.isPast ? (
                  <span className="px-2 py-1 text-xs bg-muted rounded">
                    Expired
                  </span>
                ) : meal.isBooked ? (
                  <span className="px-2 py-1 text-xs bg-success/20 text-success rounded">
                    Booked
                  </span>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs"
                  >
                    Book Now
                  </Button>
                )}
              </div>
            </div>
            <div className="mb-3">
              <div className="text-sm font-medium mb-1">Menu</div>
              <ul className="text-sm space-y-1">
                {meal.menu.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Utensils size={14} className="mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {!meal.isPast && meal.isBooked && (
              <Button
                href="/user/qrcode"
                variant="outline"
                size="sm"
                className="w-full mt-3"
              >
                <QrCode size={14} className="mr-2" />
                Show QR Code
              </Button>
            )}
          </div>
        ))}
      </div>

      {/* Quick Links */}
      <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Link
          to="/user/meals"
          className="p-4 bg-white border rounded-lg flex items-center gap-3 hover:bg-secondary/50 transition-colors"
        >
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
            <CalendarClock size={20} className="text-primary" />
          </div>
          <div>
            <h3 className="font-medium">Book Meals</h3>
            <p className="text-xs text-muted-foreground">For upcoming days</p>
          </div>
        </Link>
        
        <Link
          to="/user/qrcode"
          className="p-4 bg-white border rounded-lg flex items-center gap-3 hover:bg-secondary/50 transition-colors"
        >
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
            <QrCode size={20} className="text-primary" />
          </div>
          <div>
            <h3 className="font-medium">My QR Code</h3>
            <p className="text-xs text-muted-foreground">For meal verification</p>
          </div>
        </Link>
        
        <Link
          to="/user/history"
          className="p-4 bg-white border rounded-lg flex items-center gap-3 hover:bg-secondary/50 transition-colors"
        >
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
            <CalendarClock size={20} className="text-primary" />
          </div>
          <div>
            <h3 className="font-medium">Meal History</h3>
            <p className="text-xs text-muted-foreground">View past consumption</p>
          </div>
        </Link>
        
        <Link
          to="/user/profile"
          className="p-4 bg-white border rounded-lg flex items-center gap-3 hover:bg-secondary/50 transition-colors"
        >
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
          </div>
          <div>
            <h3 className="font-medium">My Profile</h3>
            <p className="text-xs text-muted-foreground">Update your information</p>
          </div>
        </Link>
      </div>

      {/* Weekly Menu Link */}
      <div className="bg-primary/5 rounded-lg p-6 flex flex-col sm:flex-row justify-between items-center">
        <div>
          <h3 className="font-medium text-lg">View Full Weekly Menu</h3>
          <p className="text-muted-foreground">See what's being served all week</p>
        </div>
        <Button 
          href="/timetable" 
          variant="primary"
          className="mt-4 sm:mt-0 flex items-center gap-1"
        >
          View Timetable
          <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
};

export default UserDashboard;