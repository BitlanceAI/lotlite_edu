import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

interface StickyBottomBarProps {
  isMenuOpen: boolean;
}

export default function StickyBottomBar({ isMenuOpen }: StickyBottomBarProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleModalStateChange = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && typeof customEvent.detail.isOpen === 'boolean') {
        setIsModalOpen(customEvent.detail.isOpen);
      }
    };

    window.addEventListener('modal-state-change', handleModalStateChange);
    return () => {
      window.removeEventListener('modal-state-change', handleModalStateChange);
    };
  }, []);

  return (
    <AnimatePresence>
      {!isMenuOpen && !isModalOpen && (
        <div className="fixed bottom-0 left-0 right-0 z-[60] md:hidden p-4 pb-8 bg-linear-to-t from-white to-transparent pointer-events-none">
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="bg-offwhite/80 backdrop-blur-md rounded-2xl flex items-center justify-between p-3 border border-border shadow-[0_-10px_40px_rgba(0,0,0,0.1)] pointer-events-auto"
          >
            <div className="flex flex-col pl-2">
              <span className="text-[10px] font-bold text-wine uppercase tracking-[0.2em]">Admission Open</span>
              <span className="text-black font-bold text-xs uppercase tracking-widest">B.REM Program 2026</span>
            </div>
            <button 
              onClick={() => {
                const element = document.getElementById('apply');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-wine text-white px-5 py-2.5 rounded-xl font-bold border border-transparent text-xs uppercase tracking-widest shadow-lg shadow-wine/20 hover:bg-transparent hover:text-wine hover:border-wine active:scale-95 transition-all"
            >
              Apply Now
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
