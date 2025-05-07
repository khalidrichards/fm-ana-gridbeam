import React from 'react';
import { setSubtileColor, setBuildTileStyle } from '../../helpers/css_style_helper';

export default function CoverPage({ build, onClick }) {
    return (
        <div
            className={ setSubtileColor(build.title) }
            onClick={onClick}
        >
            <div className="subtile-overlay">{build.title}</div>
        </div>
  );
}