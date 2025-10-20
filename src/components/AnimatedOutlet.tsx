import { motion, AnimatePresence } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function AnimatedOutlet() {
  const location = useLocation();
  const [firstLoad, setFirstLoad] = useState(true);
  useEffect(() => {
    setFirstLoad(false);
  }, []);

  return (
    <div className="relative w-full h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={
            firstLoad
              ? { opacity: 1, x: '0%' }
              : { opacity: 1, x: '0%' }
          }
          animate={{ opacity: 1, x: '0%' }}
          exit={{ opacity: 0, x: '-100%' }}
          transition={{ duration: 0.4 }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
