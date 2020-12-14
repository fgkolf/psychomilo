import React, { useEffect, useState } from 'react';

const Overlay = ({ visible, toggle, children }) => {
  if (!visible) return null;

  const [inner, setInner] = useState(true);

  useEffect(() => {
    const html = document.querySelector('html');
    if (inner) {
      html.style.overflowY = 'hidden';
    } else {
      html.style.overflowY = 'visible';
      setTimeout(toggle, 400);
    }
  }, [inner]);

  return (
    <div className={`overlay ${inner ? 'slide-right' : 'slide-left'}`}>
      <button type="button" onClick={() => setInner(false)} className="close">
        Close
      </button>
      {children}
    </div>
  );
};

export default Overlay;
