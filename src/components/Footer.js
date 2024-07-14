import React from 'react';

import '../../src/styles/styles.css';


function Footer() {
  return (
    <footer>
      <div className="Facebook">
        <img src="/images/fbn.jpg" alt="facebook" />
      </div>
      <div className="Instagram">
        <img src="/images/ign.jpg" alt="instagram" />
      </div>
      <div className="Linkedin">
        <img src="/images/lkn.jpg" alt="linkedin" />
      </div>
      <p>&copy; 2024 Food Corner</p>
    </footer>
  );
}

export default Footer;
