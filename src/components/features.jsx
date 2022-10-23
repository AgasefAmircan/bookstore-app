import React from "react";
import icon from '../../src/assets/icon.png'
import icon1 from '../../src/assets/icon (1).png'
import icon2 from '../../src/assets/icon (2).png'
import icon3 from '../../src/assets/icon (3).png'

const features = () => {
  return (
      <div className="features">
        <div className="item-1 item">
          <img src={icon} alt="" />
          <h2>Quick Delivery</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
            debitis.
          </p>
        </div>
        <div className="item-2 item">
          <img src={icon1} alt="" />
          <h2>Secure Payment</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit,
            consectetur!
          </p>
        </div>
        <div className="item-3 item">
          <img src={icon2} alt="" />
          <h2>Best Quality</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit,
            consectetur!
          </p>
        </div>
        <div className="item-4 item">
          <img src={icon3} alt="" />
          <h2>Return Guarantee</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit,
            consectetur!
          </p>
        </div>
      </div>
  );
};

export default features;
