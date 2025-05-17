import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

type SubMenuCardProps = {
  title: string;
  description: string;
  path: string;
  icon?: React.ReactNode;
  className?: string;
};

const SubMenuCard: React.FC<SubMenuCardProps> = ({ 
  title,
  description,
  path,
  icon,
  className
}) => {
  return (
    <Link 
      to={path}
      className={cn(
        "sidebar-card block",
        className
      )}
    >
      <div className="flex items-start gap-3">
        {icon && (
          <div className="mt-0.5 text-primary">
            {icon}
          </div>
        )}
        <div>
          <h3 className="font-medium text-sm">{title}</h3>
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default SubMenuCard;