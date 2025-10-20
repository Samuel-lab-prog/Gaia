import { motion, AnimatePresence } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';

export default function AnimatedOutlet() {
  const location = useLocation();
  

  return (
    <div className="relative w-full h-screen">
      <AnimatePresence >
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
