import React from 'react';

import '../../src/styles/styles.css';

function MainRecipes() {
  return (
    <main>
      <section id="recipes">
        <h2>Recipes</h2>
        <p>If you are a food lover, then this is the place to be! Have fun as you learn the best ways to prepare your favorite food.</p>
       
        <div className="recipe-item">
          <h3>Pakistani Lachna Paratha</h3>
          <p>Soft and flaky parathas (flat bread) with lots of layers</p>
          <div className="recipe-images">
            <img src="images/nncha.jpg" alt="Pakistani Lachna Paratha" />
          </div>
          <h3>INGREDIENTS</h3>
          <ul>
            <li>1kg all-purpose flour</li>
            <li>2 tsp salt</li>
            <li>3 tsp sugar</li>
            <li>2 tbsp milk powder</li>
            <li>3 cups water (room temperature)</li>
            <li>2 tbsp oil</li>
            <li>2 tbsp ghee</li>
          </ul>
          <h3>INSTRUCTIONS</h3>
          <ul>
            <li>In a bowl, add flour, salt, sugar, milk powder and baking powder. Mix well.</li>
            <li>Pour water little by little and mix. Start with 2 cups of water. Add remaining accordingly. Mix well until everything comes together. If the dough is too sticky, add little flour. It should be soft and not very hard. Rub with oil and let it rest covered for 10 minutes.</li>
            <li>Add oil and knead well for about 5-10 minutes. The dough should be soft and smooth.</li>
            <li>Oil it, cover and let it rest for one hour</li>
            <li>Make medium or small sized balls. With small balls I got 20 parathas. Usually Pakistani parathas are very big.</li>
            <li>In a small bowl, mix together 2 tbsp flour and ghee and make a paste.</li>
            <li>Roll out the dough and spread the ghee paste all over it.</li>
            <li>Fold it in half and spread the ghee paste on top.</li>
            <li>Twirl the dough like a rose</li>
            <li>Press it down and repeat the same with all the other dough balls</li>
            <li>Roll out each dough balls into a medium thin paratha.</li>
            <li>Place it on a medium hot tawa or pan. The flame should be at medium high.</li>
            <li>Apply ghee on both sides and cook until there are golden brown spots on both sides of the paratha.</li>
            <li>After cooking 3-4 parathas, while it is still hot, stack them one on top of the other and crush the parathas to see the layers more clearly. This is not required, but I like to do it.</li>
            <li>Stack them one on top of the other to keep them soft in a hot pan.</li>
          </ul>
        </div>
        <div className="recipe-item">
          <h3>Chicken Curry</h3>
          <p>A flavorful dish made with chicken simmered in a rich and spicy curry sauce.</p>
          <div className="recipe-images">
            <img src="images/chicken.jpg" alt="Chicken Curry" />
          </div>
          <h3>Ingredients</h3>
          <ul>
            <li><strong>For the marinade:</strong></li>
            <ul>
              <li>500g boneless chicken pieces (cut into bite-sized pieces)</li>
              <li>1/2 cup plain yogurt</li>
              <li>1 tsp turmeric powder</li>
              <li>1 tsp red chili powder</li>
              <li>1 tsp salt</li>
            </ul>
            <li><strong>For the curry:</strong></li>
            <ul>
              <li>2 tbsp vegetable oil</li>
              <li>1 large onion, finely chopped</li>
              <li>2 tomatoes, finely chopped</li>
              <li>2 tbsp ginger-garlic paste</li>
              <li>1 tsp cumin seeds</li>
              <li>1 tsp coriander powder</li>
              <li>1 tsp garam masala</li>
              <li>1 tsp turmeric powder</li>
              <li>1 tsp red chili powder</li>
              <li>1 tsp salt (adjust to taste)</li>
              <li>1 cup coconut milk or water</li>
              <li>Fresh coriander leaves for garnish</li>
            </ul>
          </ul>
          <h3>Instructions</h3>
          <ul>
            <li><strong>Marinate the Chicken:</strong>
              <ul>
                <li>In a large bowl, mix the yogurt, turmeric powder, red chili powder, and salt.</li>
                <li>Add the chicken pieces, coat them well with the marinade, and let it sit for at least 30 minutes. You can also marinate overnight in the refrigerator for better flavor.</li>
              </ul>
            </li>
            <li><strong>Prepare the Curry:</strong>
              <ul>
                <li>Heat the vegetable oil in a large pan over medium heat.</li>
                <li>Add the cumin seeds and let them splutter.</li>
                <li>Add the chopped onions and sauté until they turn golden brown.</li>
                <li>Add the ginger-garlic paste and cook for another 2-3 minutes until the raw smell disappears.</li>
              </ul>
            </li>
            <li><strong>Cook the Tomatoes and Spices:</strong>
              <ul>
                <li>Add the chopped tomatoes and cook until they become soft and oil starts to separate from the mixture.</li>
                <li>Add the coriander powder, garam masala, turmeric powder, and red chili powder. Mix well and cook for 2 minutes.</li>
              </ul>
            </li>
            <li><strong>Add the Chicken:</strong>
              <ul>
                <li>Add the marinated chicken pieces to the pan. Cook for 5-7 minutes until the chicken is no longer pink.</li>
                <li>Add the coconut milk or water and stir well. Bring the curry to a boil, then reduce the heat to low. Cover and simmer for 20 minutes, or until the chicken is cooked through and tender.</li>
              </ul>
            </li>
            <li><strong>Garnish and Serve:</strong>
              <ul>
                <li>Check the seasoning and add salt if needed.</li>
                <li>Garnish with fresh coriander leaves.</li>
                <li>Serve hot with rice or naan.</li>
              </ul>
            </li>
          </ul>
        </div>
        {/* Add more recipes here */}
      </section>
    </main>
  );
}

export default MainRecipes;
