import React from 'react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
    return (
        <motion.input
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            type={type}
            className={cn(
                'flex h-11 w-full rounded-xl border border-slate-700 bg-surface/50 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200',
                className
            )}
            ref={ref}
            {...props}
        />
    );
});

Input.displayName = 'Input';

export default Input;
