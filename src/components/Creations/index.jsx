import React from 'react';
import './creations-style-mobile.css';
import './creations-style-desktop.css';

const Creations = () => {
  return (
    <>
      <section className="section-creations container">
        <div>
          <h2 className="our-creations">Our Creations</h2>
          <button className="btn-see-all-desktop">See All</button>
        </div>
        <div className="container-creations">
          <div className="deep-earth item-creation">
            <div>Deep earth</div>
          </div>

          <div className="night-arcade item-creation">
            <div>Night arcade</div>
          </div>

          <div className="soccer-team-vr item-creation">
            <div>Soccer team VR</div>
          </div>

          <div className="the-grid item-creation">
            <div>The<br />grid</div>
          </div>

          <div className="from-up-above-vr item-creation">
            <div>From up above VR</div>
          </div>
      
          <div className="pocket-borealis item-creation">
            <div>Pocket borealis</div>
          </div>
      
          <div className="the-curiosity item-creation">
            <div>The curiosity</div>
          </div>
      
          <div className="make-it-fisheye item-creation">
            <div>Make it fisheye</div>
          </div>
        </div>
        <button className="btn-see-all container">See All</button>
      </section>
      
    </>
  );
}

export default Creations;