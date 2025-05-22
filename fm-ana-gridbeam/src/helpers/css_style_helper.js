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

export { setSubtileColor, setBuildTileStyle };