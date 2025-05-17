import React from 'react';
import { Link } from 'react-router-dom';
import { QrCode, ArrowRight, CalendarDays, ChefHat, Users } from 'lucide-react';
import Button from '../../components/shared/Button';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <QrCode className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl">MealManage</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
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

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Simplify Meal Management with QR Verification
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                A streamlined system for cafeterias and dining halls to manage meals, reduce waste, and improve student experience with QR code-based verification.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/register" variant="primary" size="lg">
                  Get Started
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.pexels.com/photos/6942422/pexels-photo-6942422.jpeg" 
                alt="Meal Management" 
                className="rounded-lg shadow-xl max-h-[400px] object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our meal management system streamlines cafeteria operations and improves student experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg border hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <QrCode className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">QR Code Verification</h3>
              <p className="text-muted-foreground">
                Secure and quick meal verification using personalized QR codes that prevent meal sharing and duplication.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CalendarDays className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
              <p className="text-muted-foreground">
                Book or cancel meals in advance, view upcoming meals, and manage your meal schedule easily.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <ChefHat className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Menu Management</h3>
              <p className="text-muted-foreground">
                Admins can easily update daily and weekly menus, track inventory, and manage food resources efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Join our meal management system today and experience streamlined meal service with QR verification
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/register" variant="primary" size="lg">
              Create Account
            </Button>
            <Button href="/login" variant="outline" size="lg">
              Sign In
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-10 mt-auto border-t">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <QrCode className="h-6 w-6 text-primary" />
              <span className="font-bold">MealManage</span>
            </div>
            <div className="text-sm text-muted-foreground">
              &copy; 2025 MealManage. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;