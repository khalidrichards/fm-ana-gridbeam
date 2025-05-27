import React from 'react';
import {
     setCollapsedOrganizationTileStyle,
     setExpandedOrganizationTileStyle } from '../helpers/css_style_helper';

export default function OrganizationCard({ org, isExpanded, onBack, onClick }) {
  if (isExpanded) {
    return (
      <div className={setExpandedOrganizationTileStyle(org)}>
        <h2 className="org-header">{org.name}</h2>
        <img src={org.logo} alt={`${org.name} logo`} className="org-logo" />
        <p className="org-description">{org.description}</p>
        <button className="org-back-button" onClick={onBack}>
          ← Back
        </button>
      </div>
    );
  }

  return (
    <div className={setCollapsedOrganizationTileStyle(org)} onClick={() => onClick(org)}>
      <img src={org.logo} alt={`${org.name} logo`} className="org-logo" />
      {org.name}
    </div>
  );
}
