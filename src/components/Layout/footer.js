import React from 'react';
import { Link } from 'gatsby';

const Footer = () => (
  <footer>
    <strong>
      <p>Πραγματοποιούνται ONLINE συνεδρίες.</p>
      <p>
        Για περισσότερες πληροφορίες
        <Link to="/contact"> επικοινωνήστε μαζί μου</Link>
      </p>
    </strong>
  </footer>
);

export default Footer;
