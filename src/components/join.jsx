import React from 'react';

const Join = () => {
  return (
    <div className="watch__body">
      <div className="shape">
        <div className="shop-header">
          <h1>Join</h1>
          <h2>GURFC</h2>
        </div>
      </div>
      <div className="about__main">
        <div className="about__container">
          <div className="about__content">
            <h2>Dear Prospective Players,</h2>
            <p>
              Georgetown Rugby welcomes you to practice with us on Cooper Field
              each Tuesday and Thursday from 7pm to 9pm during the academic
              year. Absolutely no prior experience is required to join the team.
              Many GURFC legends have started their rugby careers with our team,
              and now we invite you to join us in the hunt for the national
              title.
            </p>
          </div>
        </div>
        <button className="join__btn"><b>Are You Ready?</b></button>
        <hr />
        <div id="joinimg" style={{ marginTop: '12px' }}></div>
      </div>
      <div className="join-blog">
        <div className="join-articles">
          <div className="article-card"></div>
          <div className="article-card"></div>
          <div className="article-card"></div>
          <div className="article-card"></div>
        </div>
      </div>
    </div>
  );
};

export default Join;
