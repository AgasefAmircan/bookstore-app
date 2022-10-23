import React from "react";

const featuredbooks = () => {
  return (
    <div className="featuredbooks">
      <div className="title">
        <h1>Featured Books</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          fugiat aliquam cum non pariatur facilis.
        </p>
      </div>
      <div className="featured">
        <div className="image"></div>
        <div className="imageinfo">
          <div className="header">
            <i className="fa-regular fa-bookmark"></i>
            <i className="fa-solid fa-star"></i>
            <h1>Battle Drive</h1>
            <p>SPORTS,DRAMA</p>
          </div>
          <h4>Synopsis</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            tempora deserunt dolor ut itaque maxime voluptate sapiente ratione
            aliquid, ad inventore aperiam alias esse blanditiis pariatur animi
            harum sunt dolores repellendus atque quos ea fugiat.
          </p>
          <div className="author">
            <span>
              <h5>Writen by</h5>
              <h4>Kevin Smiley</h4>
            </span>
            <span>
              <h5>Year</h5>
              <h4>2019</h4>
            </span>
          </div>
          <div className="price">
            <div className="amount">
              <h4>$84.78</h4>
              <h5>$90.00</h5>
            </div>
            <button>
              <i className="fa-solid fa-cart-shopping"></i> ADD
            </button>
          </div>
        </div>
      </div>
      <div className="books">
        <div className="books-1">
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
        </div>
        <div className="books-2">
          <div className="book"></div>
          <div className="book"></div>
          <div className="book"></div>
        </div>
      </div>
    </div>
  );
};

export default featuredbooks;
