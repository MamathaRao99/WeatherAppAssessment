import React, { useState } from 'react'
import { Modal } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { setClearsearchItems } from '../../redux/recSearchSlice';
import { useNavigate } from 'react-router-dom';


const Recent = () => {
  const dispatch = useDispatch();
  //modal prep
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //modal styling
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 200,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };


  let favarr = JSON.parse(localStorage.getItem("searchlist") || "[]");
  
  //redux
  const clearList = () => {
    dispatch(setClearsearchItems());
    handleClose();
  };

  let favid = JSON.parse(localStorage.getItem("favid") || "[]");
  const navigate = useNavigate();
  const sendbacktohome = (i) => {
    let item2 = favarr[i];
    localStorage.setItem("searchfromthunk", JSON.stringify(item2));
    navigate("/");
  };

  return (
    <>
      {favarr.length === 0 ? (
        <div className="no-fav">
          <img src={require("../../assets/icon_nothing.png")} alt="no-fav" />
          <h3>No favourites added</h3>
        </div>
      ) : (
        <div className="favourite-container">
          <div className="top-dets">
            <div className="no-cities">You recently search for</div>
            <div className="remove-all-button" onClick={handleOpen}>
              Clear all
            </div>
          </div>
          <>
            {favarr.reverse().map((e, i) => (
              <div className="eachdiv" key={i}>
                <div className="city-dets" onClick={() => sendbacktohome(i)}>
                  <span>{e.name}</span>, <span>{e.sys.country}</span>
                </div>
                <div className="tempdets">
                  <img
                    src={require(`../../assets/weathericons/${e.weather[0].icon}@2x.png`)}
                    alt="wicon"
                    className="w-icon"
                  />
                  <span className="temp-value-in-fav">
                    <span className="temp-det-in-fav">
                      {e.main.temp.toFixed(0)}
                    </span>
                    <span>&#176;C</span>
                  </span>
                  <span>{e.weather[0].description}</span>
                </div>
                {favid.map((f, i) => {
                  if (e.id === f) {
                    return (
                      <div className="heart">
                        <img
                          src={require("../../assets/icon_favourite_Active.png")}
                          alt="heart"
                          className="heart-yellow"
                        />
                      </div>
                    );
                  } else {
                    return (
                      <div>
                        <img
                          src={require("../../assets/icon_favourite.png")}
                          width="18px"
                          alt="heart"
                          className="heart-yellow"
                        />
                      </div>
                    );
                  }
                })}
              </div>
            ))}
          </>
          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <div style={style} className="modal-div">
                <h3>Are you sure you want to clear all recent searches?</h3>
                <div className="buttons">
                  <button className="modal-button" onClick={handleClose}>
                    NO
                  </button>
                  <button className="modal-button" onClick={clearList}>
                    YES
                  </button>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      )}
    </>
  );
}

export default Recent