import React from 'react';

import '../../src/styles/styles.css';

function MainIndex() {
  return (
    <main>
      <section id="home">
        <h2>Discover Delicious Recipes</h2>
        <p>Welcome to Food Corner, your go-to website for delicious and easy-to-make recipes. Explore our collection of diverse dishes from around the world, perfect for any occasion.</p>
        <div className="images">
          <img src="images/nm.jpg" alt="Main Page" />
          <img src="images/nnyama.jpg" alt="Nyama" />
        </div>
        
      </section>
    </main>
  );
}

export default MainIndex;
