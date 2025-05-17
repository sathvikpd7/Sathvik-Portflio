import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Utensils, QrCode, Package, ArrowRight, ChefHat, Calendar } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import PageHeader from '../../components/shared/PageHeader';
import Button from '../../components/shared/Button';
import SubMenuCard from '../../components/shared/SubMenuCard';

// Mock stats for dashboard
const stats = [
  { id: 1, name: 'Total Students', value: '248', change: '+12% from last month', icon: <Users className="h-5 w-5" /> },
  { id: 2, name: 'Today\'s Bookings', value: '183', change: '94% of capacity', icon: <Calendar className="h-5 w-5" /> },
  { id: 3, name: 'QR Scans Today', value: '156', change: '85% of bookings', icon: <QrCode className="h-5 w-5" /> },
  { id: 4, name: 'Low Stock Items', value: '5', change: 'Requires attention', icon: <Package className="h-5 w-5" /> },
];

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();
  
  // Mock data for today's meals
  const todaysMeals = [
    {
      type: 'Breakfast',
      time: '7:00 AM - 9:00 AM',
      bookings: 72,
      scanned: 68,
      items: ['Scrambled Eggs', 'Toast', 'Fruit Salad', 'Coffee/Tea'],
    },
    {
      type: 'Lunch',
      time: '12:00 PM - 2:00 PM',
      bookings: 183,
      scanned: 88,
      items: ['Grilled Chicken Sandwich', 'French Fries', 'Green Salad', 'Iced Tea'],
    },
    {
      type: 'Dinner',
      time: '6:00 PM - 8:00 PM',
      bookings: 154,
      scanned: 0,
      items: ['Spaghetti Bolognese', 'Garlic Bread', 'Caesar Salad', 'Brownie'],
    },
  ];

  return (
    <div>
      <PageHeader 
        title={`Welcome, ${user?.name}`} 
        description="Here's an overview of today's cafeteria operations"
        actions={
          <Button 
            href="/admin/reports" 
            variant="outline"
          >
            View Reports
          </Button>
        }
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white p-6 rounded-lg border shadow-sm"
          >
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                {stat.icon}
              </div>
              <div>
                <dt className="text-sm font-medium text-muted-foreground truncate">
                  {stat.name}
                </dt>
                <dd className="mt-1 text-2xl font-semibold tracking-tight">
                  {stat.value}
                </dd>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {stat.change}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Today's Meals Overview */}
      <h2 className="text-xl font-semibold mb-4">Today's Meals Status</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {todaysMeals.map((meal, index) => (
          <div
            key={index}
            className={`p-5 rounded-lg border ${
              meal.scanned === 0
                ? 'bg-white'
                : meal.scanned < meal.bookings 
                  ? 'bg-warning/10' 
                  : 'bg-success/10'
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-medium">{meal.type}</h3>
                <p className="text-sm text-muted-foreground">{meal.time}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">
                  {meal.scanned} / {meal.bookings}
                </p>
                <p className="text-xs text-muted-foreground">
                  Served / Booked
                </p>
              </div>
            </div>
            
            <div className="mb-3">
              <div className="text-sm font-medium mb-1">Menu</div>
              <ul className="text-sm space-y-1">
                {meal.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Utensils size={14} className="mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="w-full bg-secondary h-2 rounded-full mt-4">
              <div 
                className={`h-2 rounded-full ${
                  meal.scanned === 0 
                    ? 'bg-muted-foreground/30' 
                    : meal.scanned === meal.bookings 
                      ? 'bg-success' 
                      : 'bg-warning'
                }`}
                style={{ width: `${(meal.scanned / meal.bookings) * 100}%` }}
              />
            </div>
            <div className="text-xs text-right mt-1 text-muted-foreground">
              {Math.round((meal.scanned / meal.bookings) * 100)}% served
            </div>
          </div>
        ))}
      </div>

      {/* Quick Links */}
      <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        <SubMenuCard
          title="User Management"
          description="Add, edit or remove users"
          path="/admin/users"
          icon={<Users size={18} />}
        />
        
        <SubMenuCard
          title="Menu Management"
          description="Update weekly menus"
          path="/admin/menus"
          icon={<ChefHat size={18} />}
        />
        
        <SubMenuCard
          title="QR Scan Logs"
          description="Monitor meal verification"
          path="/admin/qrlogs"
          icon={<QrCode size={18} />}
        />
        
        <SubMenuCard
          title="Inventory"
          description="Check stock levels"
          path="/admin/inventory"
          icon={<Package size={18} />}
        />
      </div>

      {/* Low Stock Alert */}
      <div className="bg-warning/10 rounded-lg p-6 flex flex-col sm:flex-row justify-between items-center">
        <div>
          <h3 className="font-medium text-lg">Low Stock Alert</h3>
          <p className="text-muted-foreground">5 items are running low and need to be restocked</p>
        </div>
        <Button 
          href="/admin/inventory" 
          variant="warning"
          className="mt-4 sm:mt-0 flex items-center gap-1"
        >
          View Inventory
          <ArrowRight size={16} />
        </Button>
      </div>
    </div>
  );
};

export default AdminDashboard;