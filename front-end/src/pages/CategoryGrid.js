import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/CategoryGrid.css';

const CategoryGrid = () => {
  const categories = [
    { 
      name: 'FEMME', 
      image: '/image/alexi-romano-CCx6Fz_CmOI-unsplash.jpg',
      color: '#f8d7da'
    },
    { 
      name: 'HOMME', 
      image: '/image/sirio-7_ZNLVlJchs-unsplash.jpg',
      color: '#d1ecf1'
    },
    { 
      name: 'BÉBÉ', 
      image: '/image/brytny-com-C4rXIFSzEXk-unsplash.jpg',
      color: '#fff3cd'
    },
    { 
      name: 'Electronique', 
      image: '/image/alexandru-acea-GhwCef9VRr4-unsplash.jpg',
      color: '#d4edda'
    }
  ];

  return (
    <section className="category-grid">
      <div className="main-title">
        <h2>ALLER A LA MODE</h2>
      </div>
      
      <div className="categories-container">
        {categories.map((category, index) => (
          <Link 
            to={`/${category.name.toLowerCase()}`} 
            className="category-card" 
            key={index}
            style={{ backgroundColor: category.color }}
          >
            <div 
              className="category-image" 
              style={{ backgroundImage: `url(${category.image})` }}
            ></div>
            <div className="category-name">
              <h3>{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;