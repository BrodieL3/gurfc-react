import React from 'react';

const Watch = () => {
  return (
    <section className="watch__body">
      <div className="watch__header">
        <div className="watch__container">
          <div className="shape">
            <div className="shop-header">
              <h1>Watch</h1>
              <h2>GURFC</h2>
            </div>
          </div>
          <h2 style={{ color: '#041e42', textAlign: 'center', paddingTop: '24px', fontSize: '2.5rem', lineHeight: 0 }}>
            Next Match:
          </h2>
          <div className="next-match">
            <div className="score-table">
              <div className="GURFC-card">
                <img src="images/logo.png" id="watch-logo" alt="GURFC Logo" />
              </div>
              <h2>vs.</h2>
              <div className="opponent-card"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="watch__container2">
        <h1>Results</h1>
        <div className="watch__main">
          <div className="watch__video">
            <table className="score-box">
              <thead>
                <tr>
                  <th>Opponent</th>
                  <th>Result</th>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Watch</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Villanova</td>
                  <td>W 48-37</td>
                  <td>Alapocas Run State Park</td>
                  <td>11/4/2023</td>
                  <td>Georgetown vs. Villanova</td>
                </tr>
                <tr className="active-row">
                  <td>Scranton</td>
                  <td>W 50-22</td>
                  <td>North Bay Rugby Club</td>
                  <td>10/28/2023</td>
                  <td>Georgetown vs. Scranton</td>
                </tr>
                <tr>
                  <td>Shippensburg</td>
                  <td>W 28-0</td>
                  <td>@ Shippensburg</td>
                  <td>10/21/2023</td>
                  <td>Shippensburg vs. Georgetown</td>
                </tr>
                <tr>
                  <td>Drexel</td>
                  <td>W 28-0</td>
                  <td>Cooper Field</td>
                  <td>10/14/2023</td>
                  <td>Unavailable</td>
                </tr>
                <tr>
                  <td>Towson</td>
                  <td>W 47-0</td>
                  <td>@ Towson</td>
                  <td>10/7/2023</td>
                  <td>Unavailable</td>
                </tr>
                <tr>
                  <td>Mount C</td>
                  <td>W 78-10</td>
                  <td>@ Mount</td>
                  <td>9/23/2023</td>
                  <td>Unavailable</td>
                </tr>
                <tr>
                  <td>UMBC</td>
                  <td>W 78-10</td>
                  <td>Cooper Field</td>
                  <td>9/16/2023</td>
                  <td>Unavailable</td>
                </tr>
                <tr>
                  <td>York</td>
                  <td>W 28-0</td>
                  <td>@ York</td>
                  <td>9/9/2023</td>
                  <td>Unavailable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="videos">
        <div className="youtube">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/mCCw3i3kI4A?si=mXqDvqglqzNDxq1U&amp;start=844"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Watch;
