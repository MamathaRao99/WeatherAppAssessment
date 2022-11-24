import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './TabLinks.css'

const TabLinks = () => {
  const [todaysDate, setTodaysDate] = useState("");
  const date = new Date();
  setInterval(function () {
    today();
  }, 1000);

  const today = () => {
    setTodaysDate(
      `${date.toLocaleString("en-us", {
        weekday: "short",
      })} ${date.getDate()}, ${date.toLocaleString("en-us", {
        month: "short",
      })} ${date.getFullYear()}  ${date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })}`
    );
  };

  return (
    <>
      <div className="tabheader-container">
        <div className="left-section">
          <NavLink to="/" className="link-names">
            <h3 className="home">HOME</h3>
          </NavLink>
          <NavLink to="/fav" className="link-names">
            <h3 className="favourite">FAVOURITE</h3>
          </NavLink>
          <NavLink to="/rec" className="link-names">
            <h3 className="recent-search">RECENT SEARCH</h3>
          </NavLink>
        </div>
        <div className="right-section">{todaysDate}</div>
      </div>
      <div className="date-section-mobile">{todaysDate}</div>
    </>
  );
};

export default TabLinks