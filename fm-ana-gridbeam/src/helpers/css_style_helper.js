/* Build Style Helper Functions */
const buildTypes = {
    Chair: 'sitting',
    Table: 'surfaces',
    Bed: 'resting',
};

const setSubtileColor = (buildName) => {
    return `tile-shared subtile ${buildTypes[buildName]}`;
  }

const setBuildTileStyle = (buildName) => {
    return `tile-shared build-step-tile ${buildTypes[buildName]}`;
}

/* Organization Tile Style Helper Functions */
const orgBackgroundStyles = {
    'Flatbush Mixtape': "org-fm",
    'Architecture and Advocacy': "org-ana",
};

const getTextColorHex = (textColorType) => {
    if (textColorType === 'dark') {
        return 'org-dark-text'; // Dark text color
    }
    return 'org-light-text'; // Light text color
}

const setCollapsedOrganizationTileStyle = (org) => {
    const backgroundColor = orgBackgroundStyles[org.name] || 'org-default';
    const textColor = getTextColorHex(org.textColor);
    return `organization-tile-shared org-tile ${backgroundColor} ${textColor}`;
}

const setExpandedOrganizationTileStyle = (org) => {
    const backgroundColor = orgBackgroundStyles[org.name] || 'org-default';
    const textColor = getTextColorHex(org.textColor);
    return `org-card-expanded ${backgroundColor} ${textColor}`;
}

export {
     setSubtileColor,
     setBuildTileStyle,
     setCollapsedOrganizationTileStyle,
     setExpandedOrganizationTileStyle,
    };