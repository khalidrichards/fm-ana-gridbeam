import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { setSubtileColor, setBuildTileStyle } from '../../helpers/css_style_helper';

export default function BuildStep({ build, stepImage, stepNumber }) {
    <div key={stepNumber} className={`tile-shared build-step-tile sitting`}>
        <img src={stepImage} alt={`Step ${stepNumber}`} className="step-image" />
    </div>
}