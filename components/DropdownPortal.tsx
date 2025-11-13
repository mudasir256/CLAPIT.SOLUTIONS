"use client";
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';

interface DropdownPortalProps {
  children: React.ReactNode;
  isOpen: boolean;
}

export default function DropdownPortal({ children, isOpen }: DropdownPortalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key="dropdown-overlay"
          className="fixed inset-0 bg-dark/20 backdrop-blur-sm z-[999]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute left-1/2 top-20 -translate-x-1/2 w-full max-w-7xl mx-auto px-4">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
