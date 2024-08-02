import React from 'react';
import $ from 'jquery'

const Roster = () => {
  const NameSort = () => {
    var alphabeticallyOrderedDivs = $('.card__container').sort(function(a, b) {
      var lastNameA = $(a).data('lastname').toLowerCase();
      var lastNameB = $(b).data('lastname').toLowerCase();
      return lastNameA.localeCompare(lastNameB);
    });
    updateContainer(alphabeticallyOrderedDivs);
  };

  const YrSort = () => {
    var numericallyOrderedDivs = $('.card__container').sort(function(a, b) {
      var yearA = $(a).data('year');
      var yearB = $(b).data('year');
      return yearB - yearA;
    });
    updateContainer(numericallyOrderedDivs);
  };

  const PosSort = () => {
    var positionallyOrderedDivs = $('.card__container').sort(function(a, b) {
      var posA = $(a).data('pos');
      var posB = $(b).data('pos');
      return posA - posB;
    });
    updateContainer(positionallyOrderedDivs);
  };

  const updateContainer = (sortedDivs) => {
    var container = $("#player__list");
    container.detach().empty().append(sortedDivs);
    $('main').append(container);
  };

  const dropdown = () => {
    document.getElementById("sort-options").classList.toggle("show");
  };

  window.onclick = (event) => {
    if (!event.target.matches('.sortbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };

  return (
    <main>
      <div className="shop">
        <div className="roster__header">
          <h1>Roster</h1>
        </div>
        <div className="sort-menu">
          <button onClick={dropdown} className="sortbtn">Sort by</button>
          <div id="sort-options" className="dropdown-content">
            <a className="namesort" href="#" onClick={NameSort}>Name</a>
            <a id="yrsort" href="#" onClick={YrSort}>Year</a>
            <a id="possort" href="#" onClick={PosSort}>Position</a>
          </div>
        </div>
        <div id="player__list" className="roster__container">
          <div className="card__container" data-lastname="lee" data-year="3" data-pos="4">
            <div className="image-container">
              <img src="images/roster/brodie.jpg" alt="Player Image" />
            </div>
            <div className="profile__container">
              <div className="profile-header">
                <h1 className="name">Brodie Lee</h1>
                <h2 className="board-position"><i>Webmaster</i></h2>
              </div>
              <table className="details">
                <tr>
                  <th className="position">Position:</th>
                  <th className="year">Year:</th>
                  <th className="hometown">Hometown:</th>
                </tr>
                <tr>
                  <td className="player_position">Lock</td>
                  <td className="player_year">Jr.</td>
                  <td className="player_hometown">Brookline, MA</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="card__container" data-lastname="miller" data-year="3" data-pos="15">
            <div className="image-container">
              <img src="images/roster/willer.jpg" alt="Player Image" />
            </div>
            <div className="profile__container">
              <div className="profile-header">
                <h1 className="name">Will Miller</h1>
                <h2 className="board-position">Webmaster</h2>
              </div>
              <table className="details">
                <tr>
                  <th className="position">Position:</th>
                  <th className="year">Year:</th>
                  <th className="hometown">Hometown:</th>
                </tr>
                <tr>
                  <td className="player_position">Fullback</td>
                  <td className="player_year">Jr.</td>
                  <td className="player_hometown">Washington, DC</td>
                </tr>
              </table>
            </div>
          </div>
          {/* Add more player cards similarly */}
        </div>
      </div>
    </main>
  );
};

export default Roster;
