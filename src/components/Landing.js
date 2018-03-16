import React from 'react';

const Landing = () => (
  <section className="landing">

    <div className="title">
      <div className="title-text">
        <h1 className="hero-title">Turn the music up!</h1>
      </div>
      <img className="Boombox_photo" src="./../../assets/images/Boombox_photo.jpg" alt="Boombox" />
    </div>

    <section className="flex-container">
      <span className="pointSections">
        <div className="point">
          <h2 className="point-title">Choose your music</h2>
          <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
        </div>
      </span>
      <span className="pointSections">
        <div className="point">
          <h2 className="point-title">Unlimited, streaming, ad-free</h2>
          <p className="point-description">No arbritrary limits. No distractions.</p>
        </div>
      </span>
      <span className="pointSections">
        <div className="point">
          <h2 className="point-title">Mobile enabled</h2>
          <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
        </div>
      </span>
    </section>
  </section>
);

export default Landing;
