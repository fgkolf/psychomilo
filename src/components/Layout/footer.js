import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      setVisible(entries[0].isIntersecting);
    });
    intersectionObserver.observe(footerRef.current);

    return () => intersectionObserver.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className={visible ? 'slide-right' : 'slide-left'}>
      <strong>
        <p>Πραγματοποιούνται online συνεδρίες.</p>
        <p>
          Για περισσότερες πληροφορίες&nbsp;
          <Link to="/contact">επικοινωνήστε μαζί μου</Link>
        </p>
      </strong>
    </footer>
  );
};

export default Footer;
