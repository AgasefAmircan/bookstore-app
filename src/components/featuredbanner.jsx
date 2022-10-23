import React from "react";
import mask from '../../src/assets/Mask Group.png'
import mask1 from '../../src/assets/Mask Group (1).png'

const featuredbanner = () => {
  return (
    <div className="featuredbanner">
      <div className="banner-1 banner">
        <img className="img" src={mask} alt="" />
        <h2>Recomended For You</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          molestias ducimus similique sequi distinctio aut!
        </p>
        <div className="image">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="iconnext">
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
      <div className="banner-2 banner">
        <img className="img" src={mask1} alt="" />
        <h2>Popular in 2020</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
          Nesciunt, quidem rerum consectetur accusantium corrupti amet.
        </p>
        <div className="image">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="iconnext">
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
};

export default featuredbanner;
