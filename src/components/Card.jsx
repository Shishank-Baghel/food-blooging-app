import React from "react";
import './Card.css'

function Cards({img,title,desc}) {

  return (
    <>
      <div className="card-container">
        <div className="card-img">
          <img src={img} />
        </div>
        <div className="card-title">
          {title}
        </div>
        <div className="card-desc">
          {desc}
        </div>
        <div className="card-btn">
          <button>Read More</button>
        </div>
      </div>
    </>
  );
}

export default Cards;
