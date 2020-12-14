import React, { createContext, useState } from 'react';

const OverlayContext = createContext({});

const OverlayProvider = ({ children }) => {
  const [overlay, setOverlay] = useState({ show: false, initial: true });

  return <OverlayContext.Provider value={{ overlay, setOverlay }}>{children}</OverlayContext.Provider>;
};

export { OverlayProvider, OverlayContext };
