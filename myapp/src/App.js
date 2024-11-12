import React, { useRef } from 'react';
import Header from './components/Header';
import About from './sections/About';
import Menu from './sections/Menu';
import Contact from './sections/Contact';
import Banner from './components/Banner';

function App() {
  const aboutRef = useRef(null);
  const menuRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className="font-sans">
      <Header
        onMenuClick={() => scrollToSection(menuRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />
      <main className='pt-2'>
        <Banner />
        <About ref={aboutRef} />
        <Menu ref={menuRef} />
        <Contact ref={contactRef} />
      </main>
    </div>
  );
}

export default App;
