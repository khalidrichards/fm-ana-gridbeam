import React, { useState } from 'react';
import TileSection from './components/TileSection';
import Build from './components/Build';
import OrganizationCard from './components/OrganizationCard';
import { chair, bed, table } from './data/builds';
import organizations from './data/organizations';
import banner from './images/banner.jpg';
import './output.css';

// You can create more builds like "table", "bed" similarly

export default function App() {
  const [activeTile, setActiveTile] = useState(null);
  const [activeBuild, setActiveBuild] = useState(null);
  const [expandedOrg, setExpandedOrg] = useState(null);

  const handleTileClick = (tileName) => {
    if (tileName !== 'Builds') {
      setActiveTile(tileName);
      setActiveBuild(null);
    } else {
      setActiveTile(activeTile === tileName ? null : tileName);
      setActiveBuild(null);
    }
  };

  const builds = [
    chair,
    bed,
    table,
  ];

  return (
    <div className="page-container">
      <div className="banner-container">
        <img src={ banner } alt="Gridbeam Banner" className="banner-image"></img>
      </div>
      <div className="tile-row">
        {/* If there is no active tile, render all tiles */}
        {!activeTile && (
          <>
            <TileSection
              title="Builds"
              colorClass="red"
              active={false}
              onClick={() => handleTileClick('Builds')}
            />
            <TileSection
              title="About Gridbeam"
              colorClass="green"
              active={false}
              onClick={() => handleTileClick('About Gridbeam')}
            />
            <TileSection
              title="About Us"
              colorClass="yellow"
              active={false}
              onClick={() => handleTileClick('About Us')}
            />
          </>
        )}
        {/* Builds Section */}
        {activeTile === 'Builds' && (<TileSection
          title="Builds"
          colorClass="red"
          active={activeTile === 'Builds'}
          onClick={() => handleTileClick('Builds')}
        >
          {!activeBuild ? (
            <div className="subtile-grid">
              {/* Show all builds */}
              {builds.map((build) => (
                <Build
                  key={build.title}
                  build={build}
                  isActive={false}
                  onClick={() => setActiveBuild(build.title)}
                />
              ))}
            </div>
          ) : (
            <div className="selected-build">
              {/* Show only selected build with its steps */}
              {builds.map((build) =>
                activeBuild === build.title ? (
                  <Build
                    key={build.title}
                    build={build}
                    isActive={true}
                    onClick={() => setActiveBuild(null)}
                  />
                ) : null
              )}
            </div>
          )}
        </TileSection>
        )}

        {/* About Gridbeam Section */}
        {activeTile === 'About Gridbeam' && (<TileSection
          title="About Gridbeam"
          colorClass="green"
          active={activeTile === 'About Gridbeam'}
          onClick={() => handleTileClick('About Gridbeam')}
        >
          <div
            className="tile-shared subtile"
            style={{
              width: '300px',
              height: '150px',
              backgroundColor: '#B10DC9',
              padding: '10px',
              textAlign: 'center',
            }}
          >
            Gridbeam is our innovative system for designing modular furniture.
          </div>
        </TileSection>
        )}

        {/* About Us Section */}
        {activeTile==='About Us' && (<TileSection
          title="About Us"
          colorClass="yellow"
          active={activeTile === 'About Us'}
          onClick={() => handleTileClick('About Us')}
        >
          {!expandedOrg ? (
                <div className="subtile-grid">
                  {organizations.map((org) => (
                    <OrganizationCard
                      key={org.title}
                      org={org}
                      isExpanded={false}
                      onClick={(org) => setExpandedOrg(org)}
                    />
                  ))}
                </div>
          ) : (
            <div className="selected-org">
              {organizations.map((org) =>
                expandedOrg.name === org.name ? (
                  <OrganizationCard
                    key={org.title}
                    org={org}
                    isExpanded={true}
                    onBack={() => setExpandedOrg(null)}
                  />
                ) : null
              )}
            </div>
          )}
        </TileSection>)}
      </div>
    </div>
  );
}