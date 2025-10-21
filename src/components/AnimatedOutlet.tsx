import { AnimatePresence } from 'framer-motion';
import { Outlet } from 'react-router-dom';

export default function AnimatedOutlet() {
  

  return (
    <div className="relative w-full h-screen">
      <AnimatePresence >
        <div>
          <Outlet />
        </div>
      </AnimatePresence>
    </div>
  );
}
