import React from "react";
// import "swiper/css/pagination";
// import { Swiper, SwiperSlide } from "swiper/react";
import "../assets/style.css";
const mainhero = () => {
  return (
    <div className="mainhero">
      <div className="mainbanner">
        <div className="heading">
          <p>BACK TO SCHOOL</p>
          <h1>
            Special 50% Off <br />
            <span>for our student community</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </p>
          <button className="deal">
            Get the deal{" "}
            <span>
              <i className="fa-solid fa-right-long"></i>
            </span>
          </button>
          <button className="promos">See other promos</button>
          <div className="sliders">
            <div className="slider 1"></div>
            <div className="slider 2"></div>
            <div className="slider 3"></div>
            <div className="slider 4"></div>
          </div>
        </div>
      </div>
      <div className="secondbanner">
        <div>
          <h1>Best Seller</h1>
          <p>Based sales this week</p>
          <div className="circle circle-1">
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <div className="image"></div>
          <div className="circle circle-2">
            <i className="fa-solid fa-chevron-right"></i>
          </div>
          <h4>Purshing Cloud</h4>
          <h6>ADVANTURE, SCIENCE, COMEDY</h6>
          <button>
            <span>60.00</span>
            <span> USD 45.25</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default mainhero;
