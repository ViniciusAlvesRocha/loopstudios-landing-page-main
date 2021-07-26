import React from 'react';
import imageInteractive from '../../images/mobile/image-interactive.jpg';
import imageInteractiveDesktop from '../../images/desktop/image-interactive.jpg';
import './leader-style-mobile.css';
import './leader-style-desktop.css';

const Leader = () => {
  return (
    <section className="section-leader container">
      <img className="image-interactive" src={ imageInteractive } alt="the leader"/>
      <img className="image-interactive-desktop" src={ imageInteractiveDesktop } alt="the leader"/>
      <div className="content-leader-interactive">
        <h2 className="h2-leader-interactive">
          The leader in interactive VR
        </h2>
        <p className="p-leader-interactive">
          Founded in 2011, Loopstudios has been producing world-class virtual reality 
          projects for some of the best companies around the globe. Our award-winning 
          creations have transformed businesses through digital experiences that bind 
          to their brand.
        </p>
      </div>
    </section>
  );
}

export default Leader;