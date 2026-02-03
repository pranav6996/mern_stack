<<<<<<< HEAD
import React from 'react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';

const Button = React.forwardRef(({ className, variant = 'primary', size = 'default', children, ...props }, ref) => {
    const variants = {
        primary: 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-primary/25 hover:opacity-90',
        ghost: 'bg-transparent hover:bg-surface text-slate-300 hover:text-white',
        danger: 'bg-red-500 text-white hover:bg-red-600',
    };

    const sizes = {
        default: 'h-11 px-6 py-2',
        sm: 'h-9 px-3 text-xs',
        icon: 'h-10 w-10 p-0 flex items-center justify-center',
    };

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            ref={ref}
            className={cn(
                'inline-flex items-center justify-center rounded-xl font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
});

Button.displayName = 'Button';

export default Button;
=======
const Button = ({ text }) => {
  return (
    <button className="app-btn">
      {text}
    </button>
  )
}

export default Button

>>>>>>> 4ae75b573317e471b48c595de181d66683f07be4
