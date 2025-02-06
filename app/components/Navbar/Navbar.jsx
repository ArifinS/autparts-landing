"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import './Navbar.scss';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Check which section is in view
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = !menuOpen ? 'hidden' : '';
  };

  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        // Close mobile menu if open
        if (menuOpen) {
          handleMenuClick();
        }
  
        // Smooth scroll to section
        window.scrollTo({
          top: section.offsetTop - 80, // Adjust offset based on navbar height
          behavior: 'smooth',
        });
      }
    }
  };
  

  const menuItems = [
    { id: 'banner-grid',  label: 'Demos' },
    { id: 'features', label: 'Features' },
    { id: 'rtl-support', label: 'RTL Support' },
    { id: 'clients-feedback', label: 'Clients Feedback' },
    { id: 'documentation', label: 'Documentation' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg bg-gray-900/95 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <nav className={`w-4xl mx-auto flex items-center justify-between   transition-all duration-300 ${
        isScrolled ? 'pt-6 pb-6' : 'pt-9 pb-9'
      }`}>
        {/* Logo */}
        <button 
          onClick={() => scrollToSection('home')} 
          className="nav-logo cursor-pointer"
        >
          <Image
            src="/images/logo/logo.svg"
            alt="Classima Logo"
            width={230}
            height={50}
          />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white gap-x-4">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button 
                onClick={() => scrollToSection(item.id)}
                className={`hover:text-gray-300 transition-colors duration-200 ${
                  activeSection === item.id ? 'text-blue-400' : ''
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        
        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={handleMenuClick}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity duration-300 md:hidden ${
            menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={handleMenuClick}
        />

        {/* Mobile Menu Panel */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-gray-800 transform transition-transform duration-300 ease-in-out md:hidden ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full bg-black1">
            <div className="flex justify-between p-4">
            <Image
            src="/images/logo/logo.svg"
            alt="Classima Logo"
            width={150}
            height={50}
          />
              <button
                onClick={handleMenuClick}
                className="text-white focus:outline-none"
                aria-label="Close Menu"
              >
                <X size={24} />
              </button>
            </div>
            <ul className="flex flex-col space-y-4 p-6 bg-black1 text-white">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`block py-2 hover:text-gray-300 transition-colors duration-200 w-full text-left ${
                      activeSection === item.id ? 'text-blue-400' : ''
                    }`}
                  >
                    {item.label}
                  </button> 
                </li>
              ))}
            </ul>
            {/* Mobile CTA Buttons */}
            <div className="Mobile-Cta-button mt-auto p-6 space-y-4">
            <button className="bg-gradient-to-r from-red-700 to-red-500 hover:bg-red-700 text-white font-semibold py-4 px-7 rounded-lg text-sm">
            Buy Theme $39
          </button>
            </div>
          </div>
        </div>

        {/* Desktop CTA Buttons */}
        <div className="Desktop-button hidden md:flex space-x-4 ">
          <button className="bg-gradient-to-r from-red-700 to-red-500 hover:bg-red-700 text-white font-semibold py-4 px-7 rounded-lg text-sm">
            Buy Theme $39
          </button>
        </div>
      </nav>
    </header>
  );
}