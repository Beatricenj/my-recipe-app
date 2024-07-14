import React from 'react';

import '../../src/styles/styles.css';

function MainAbout() {
  return (
    <main>
      <div className="content">
        <h2>Why us</h2>
        <p>We are passionate about providing you with an extensive collection of delicious food recipes. Whether you're a seasoned chef or a novice in the kitchen, our goal is to guide you through each recipe step-by-step, ensuring you create culinary masterpieces every time.</p>
        <p>Explore our diverse range of recipes, from quick and easy meals to gourmet dishes. Each recipe comes with detailed instructions, ingredient lists, and helpful tips to enhance your cooking experience.</p>
        <p>Join our community of food enthusiasts and embark on a flavorful journey with us!</p>
      </div>
      <div className="blog-section">
        <div className="container">
          <h2>Latest Blogs</h2>
          <p>Explore our latest blogs to discover more about our recipes, cooking tips, and behind-the-scenes insights.</p>
          <div className="blog-wrap">
            <h3>Blog Title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem...</p>
            
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainAbout;
