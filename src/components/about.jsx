import React from 'react';

const About = () => {
  return (
    <div className="watch__body">
      <div className="about__header">
        <h1>About Us</h1>
      </div>
      <div className="about__main">
        <div className="about__container">
          <div className="about__content">
            <h2>Our History</h2>
            <p>
              Founded in 1967, Georgetown University Rugby Football Club is a
              club sport team that has competed at the highest levels of
              collegiate rugby since its inception. The team competes in the
              Mid-Atlantic Rugby Conference in Division II of National
              Collegiate Rugby. Our team carries the values of our institution
              onto the rugby field, and vice versa. The team culture that has
              been passed on from class to class continues because of the active
              involvement of our alumni network. They play an active role
              supporting the next generation of Hoyas in their rugby and
              professional careers.
            </p>
            <div className="abt-imgs">
              <img src="images/PD.jpeg" id="abtimg" alt="History Image 1"/>
              <img src="images/uncs.png" id="abtimg2" alt="History Image 2"/>
            </div>
          </div>
        </div>
        <hr />
        <div className="Slideshow">
          <div className="about__content2">
            {/* Add slides here */}
          </div>
        </div>
        <hr />
        <div className="about__content3">
          <h2>Embracing Tradition</h2>
          <p>
            As a part of GURFC, you're not just joining a team but becoming part
            of a rich tradition. We take pride in our history, honoring the
            legacy of those who have worn our jersey before us. From game-day
            rituals to alumni events, we cherish the traditions that define our
            club. Moreover, we're committed to creating new memories and
            experiences for our members, ensuring that every season brings
            moments that will be cherished for a lifetime.
          </p>
          <iframe
            width="500"
            height="315"
            src="https://www.youtube.com/embed/M8ItVtysA5o?si=OM4Yzymn_uKCERls"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
