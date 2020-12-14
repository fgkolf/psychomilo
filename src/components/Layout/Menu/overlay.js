import React from 'react';

const Overlay = ({ overlay, children }) => {
  if (overlay.initial) return null;

  return <div className={`overlay ${overlay.show ? 'slide-right' : 'slide-left'}`}>{children}</div>;
};

export default Overlay;
