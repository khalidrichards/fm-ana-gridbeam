import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TileSection({ title, colorClass, children, active, onClick }) {
    return (
      <div className="tile-section">
        <div className={`parent-tile ${colorClass}`} onClick={onClick}>
          {title}
        </div>
        <AnimatePresence>
          {active && (
            <motion.div
              className="subtile-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }