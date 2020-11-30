import React, { useEffect, useState } from 'react';

const Overlay = ({ visible, toggle, children }) => {
  if (!visible) return null;

  const [inner, setInner] = useState(true);

  useEffect(() => {
    const html = document.querySelector('html');
    if (!inner) {
      html.style.overflowY = 'visible';
    }
    setTimeout(() => {
      if (inner) {
        html.style.overflowY = 'hidden';
      } else {
        toggle();
      }
    }, 250);
  }, [inner]);

  return (
    <div className={`overlay  ${inner ? 'transition-slide-right' : 'transition-slide-left'}`}>
      <button type="button" onClick={() => setInner(false)} className="close">
        Close
      </button>
      {children}
    </div>
  );
};

export default Overlay;
