import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { setSubtileColor, setBuildTileStyle } from '../helpers/css_style_helper';
import BuildStep from './build/BuildStep';
import CoverPage from './build/CoverPage';

export default function Build({ build, isActive, onClick }) {
    return (
        <div className="build-wrapper">
          <div className="build-main-row">
            {/* Cover page */}
            <CoverPage build={build} onClick={onClick} />
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
                hi
                {build.steps.map((stepImage, idx) => (
                  <BuildStep
                    key={idx}
                    build={build}
                    stepImage={stepImage}
                    stepNumber={idx + 1}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
}