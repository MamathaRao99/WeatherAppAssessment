import React, { useState, useEffect } from "react";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherAction } from "../../redux/weatherSlice";
import { setTrue } from "../../redux/recSearchSlice";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [autocompleteData, setautocompleteData] = useState([]);
  const dispatch = useDispatch();
  const [inputValue, setinputValue] = useState("");

  useEffect(() => {
    dispatch(fetchWeatherAction("udupi"));
  }, [dispatch]);

  const item = useSelector((state) => state);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchWeatherAction(inputValue));
    hidesearchFn();
    const weatherDetails = item && item.weatherReducer.weather;
    dispatch(setTrue());
  };

  const [showDrawer, setshowDrawer] = useState(false);
  const [showsearch, setshowsearch] = useState(false);

  const showDrawerFn = () => {
    setshowDrawer(true);
  };
  const hideDrawerFn = () => {
    setshowDrawer(false);
  };

  const showsearchFn = () => {
    setshowsearch(true);
  };
  const hidesearchFn = () => {
    setshowsearch(false);
  };
  return (
    <>
      <div className="header">
        <img
          src={require("../../assets/logo_web.png")}
          className="weatherlogo"
          alt="logo"
        />
        <form className="form" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Search for a city"
            value={inputValue}
            className="searchfield"
            onChange={(e) => setinputValue(e.target.value)}
          />
          <img
            className="search-glass-icn"
            src={require("../../assets/PngItem_307511.png")}
            alt="glass"
          />
        </form>
      </div>
      <div className="headermobile">
        <img
          src={require("../../assets/icon_menu_white.png")}
          alt="burger"
          className="burgericon"
          onClick={showDrawerFn}
        />
        <img
          src={require("../../assets/logo.png")}
          alt="logo-mobile"
          className="logo-mobile-icn"
        />
        <img
          src={require("../../assets/icon_search_white.png")}
          alt="magglass"
          className="search-icn"
          onClick={showsearchFn}
        />
        {showDrawer && (
          <div className="mobile-drawer-main" onClick={hideDrawerFn}>
            <div className="mobile-drawer-content">
              <NavLink to="/" className="mobile-nav">
                <h3>Home</h3>
              </NavLink>
              <NavLink to="/fav" className="mobile-nav">
                <h3>Favourite</h3>
              </NavLink>
              <NavLink to="/rec" className="mobile-nav">
                <h3>Recent Search</h3>
              </NavLink>
            </div>
          </div>
        )}
        {showsearch && (
          <div className="searchbar-for-mobile">
            <form className="search-bar-div-mobile" onSubmit={submitHandler}>
              <input
                type="text"
                placeholder="Search for a city"
                value={inputValue}
                className="search-input-mobile"
                onChange={(e) => setinputValue(e.target.value)}
              />
              <img
                onClick={hidesearchFn}
                className="search-back-icn"
                src={require("../../assets/back.png")}
                alt="glass"
              />
            </form>
            <div className="search-results-div"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
