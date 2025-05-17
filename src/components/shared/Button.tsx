import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'primary' | 'outline' | 'ghost' | 'link' | 'destructive';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  asChild?: boolean;
  href?: string;
  isLoading?: boolean;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'default', 
    size = 'md', 
    asChild = false,
    href,
    isLoading,
    children, 
    ...props 
  }, ref) => {
    const baseStyles = cn(
      "inline-flex items-center justify-center rounded-md font-medium transition-colors",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "disabled:opacity-50 disabled:pointer-events-none",
      {
        // Variants
        "bg-primary text-primary-foreground hover:bg-primary/90": variant === 'primary',
        "bg-secondary text-secondary-foreground hover:bg-secondary/80": variant === 'default',
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground": variant === 'outline',
        "hover:bg-accent hover:text-accent-foreground": variant === 'ghost',
        "underline-offset-4 hover:underline text-primary": variant === 'link',
        "bg-error text-error-foreground hover:bg-error/90": variant === 'destructive',
        
        // Sizes
        "h-9 px-3 text-sm": size === 'sm',
        "h-10 px-4 py-2": size === 'md',
        "h-11 px-8 text-base": size === 'lg',
        "h-10 w-10": size === 'icon',
      },
      className
    );

    const content = (
      <>
        {isLoading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {children}
      </>
    );

    if (href) {
      return (
        <Link to={href} className={baseStyles}>
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={baseStyles}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;