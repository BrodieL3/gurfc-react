import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import "./style.css"

const Home = () => {
  return (
    <div>
        <div className="main">
          <div className="main__container">
            <div className="main__content">
              <br />
              <br />
              <h1>Georgetown University Rugby Football Club</h1>
              <h2>Est. 1967</h2>
            </div>
            <button className="main__btn"><a href="/match">Watch Now</a></button>
          </div>
        </div>
        <div className="instagram">
          <h1>
            Follow us on Instagram!
          </h1>
          <div className="igbox">
            <InstagramEmbed url="https://www.instagram.com/gurfc"></InstagramEmbed>
          </div>
        </div>
    </div>
  );
};

export default Home;
