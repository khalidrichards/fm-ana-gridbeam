import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { setSubtileColor, setBuildTileStyle } from '../helpers/css_style_helper';

export default function Build({ build, isActive, onClick }) {
    return (
        <div className="build-wrapper">
          <div className="build-main-row">
            {/* The build tile itself */}
            <div
              className={ setSubtileColor(build.title) }
              onClick={onClick}
              style={{ backgroundImage: `url(${build.cover_image})` }}
            >
              <div className="subtile-overlay">{build.title}</div>
          </div>
    
          {/* Step tiles */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                className="build-steps-inline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {build.steps.map((stepImage, idx) => (
                  <div key={idx} className={ setBuildTileStyle(build.title) }>
                    <img src={stepImage} alt={`Step ${idx + 1}`} className="step-image" />
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        </div>
      );
}