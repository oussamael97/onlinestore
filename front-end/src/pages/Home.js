import React, { useEffect } from 'react'
import { NavBar } from './NavBar'
import '../Styles/Home.css'
import { Link } from 'react-router-dom'
import CategoryGrid from './CategoryGrid'
import ContactSection from './ContactSection'

export const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar-container');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='home-page'>  
      <div className="home-background">
        <NavBar/>
        <div className="home-content">
          <h1 className="welcome-title">Welcome to Your Store Online</h1>
          <button className="shop-now-btn">
            <Link to="/Products">Shop Now Pay Later</Link>
          </button>
        </div>
      </div>
      <CategoryGrid/>
      <ContactSection/>
    </div>
  )
}