import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './output.css';

// Tile component with smooth expand/collapse behavior
function Tile({ title, children, onClick, expanded, colorClass }) {
  return (
    <motion.div
      layout
      onClick={onClick}
      className={`cursor-pointer rounded-lg p-4 m-2 shadow-lg ${colorClass}`}
    >
      <motion.h2 layout className="text-2xl font-bold">
        {title}
      </motion.h2>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function TileSection({ title, colorClass, children, active, onClick }) {
  return (
    <div className="tile-section">
      <div className={`parent-tile ${colorClass}`} onClick={onClick}>
        <h2>{title}</h2>
      </div>
      <AnimatePresence>
        {active && (
          <motion.div
            className="subtile-container"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function App() {
  const [activeTile, setActiveTile] = useState(null);

  const handleTileClick = (tileName) => {
    setActiveTile(activeTile === tileName ? null : tileName);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Builds Section */}
      <TileSection
        title="Builds"
        colorClass="red"
        active={activeTile === 'Builds'}
        onClick={() => handleTileClick('Builds')}
      >
        <div className="subtile blue">Chair</div>
        <div className="subtile blue">Table</div>
        <div className="subtile blue">Bed</div>
      </TileSection>

      {/* About Gridbeam Section */}
      <TileSection
        title="About Gridbeam"
        colorClass="green"
        active={activeTile === 'About Gridbeam'}
        onClick={() => handleTileClick('About Gridbeam')}
      >
        <div className="subtile purple" style={{ width: '300px', height: '150px' }}>
          <p className="p-2">
            Gridbeam is our innovative system for designing and building modular furniture.
          </p>
        </div>
      </TileSection>

      {/* About Us Section */}
      <TileSection
        title="About Us"
        colorClass="yellow"
        active={activeTile === 'About Us'}
        onClick={() => handleTileClick('About Us')}
      >
        <div className="subtile purple">Architecture and Advocacy</div>
        <div className="subtile purple">Flatbush Mixtape</div>
      </TileSection>
    </div>
  );
}

// // Homepage layout with main tiles and nested content
// function App() {
//   // Keep track of which tile is expanded (if any)
//   const [activeTile, setActiveTile] = useState(null);

//   const handleTileClick = (tileName) => {
//     setActiveTile(activeTile === tileName ? null : tileName);
//   };

//   return (
//     <div className="container tile-container mx-auto p-4">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {/* "Builds" Tile */}
//         <Tile
//           title="Builds"
//           expanded={activeTile === 'Builds'}
//           onClick={() => handleTileClick('Builds')}
//           colorClass="bg-red-500 text-white"
//           className="tile red"
//         >
//           <div className="grid grid-cols-3 gap-2">
//             <div className="bg-blue-500 text-white p-2 text-center rounded">Chair</div>
//             <div className="bg-blue-500 text-white p-2 text-center rounded">Table</div>
//             <div className="bg-blue-500 text-white p-2 text-center rounded">Bed</div>
//           </div>
//         </Tile>

//         {/* "About Gridbeam" Tile */}
//         <Tile
//           title="About Gridbeam"
//           expanded={activeTile === 'About Gridbeam'}
//           onClick={() => handleTileClick('About Gridbeam')}
//           colorClass="bg-green-500 text-white"
//         >
//           <div className="p-2">
//             <p>
//               Gridbeam is our innovative system for designing and building modular furniture. [More details
//               here…]
//             </p>
//           </div>
//         </Tile>

//         {/* "About Us" Tile */}
//         <Tile
//           title="About Us"
//           expanded={activeTile === 'About Us'}
//           onClick={() => handleTileClick('About Us')}
//           colorClass="bg-yellow-500 text-white"
//         >
//           <div className="grid grid-cols-2 gap-2">
//             <div className="bg-purple-500 text-white p-2 text-center rounded">
//               Architecture and Advocacy
//             </div>
//             <div className="bg-purple-500 text-white p-2 text-center rounded">
//               Flatbush Mixtape
//             </div>
//           </div>
//         </Tile>
//       </div>
//     </div>
//   );
// }

export default App;