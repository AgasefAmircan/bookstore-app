import React, { useState, useRef, useEffect } from "react";
import logo from "../../src/assets/logo.png";
import menu1 from "../../src/assets/menu 1.png";
import chevron from "../../src/assets/right-chevron (1) 1.png";
import profile from "../../src/assets/profile 1.png";
const Header = () => {
  const [drop, setDrop] = useState(0);
  const dropOpen = () => {
    setDrop(!drop);
  };
  const useOnOutsideClick = (ref, callback) => {
    const callbackRef = useRef(callback);

    useEffect(() => {
      callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
      const handler = (event) => {
        const element = ref.current;
        if (element) {
          if (!element.contains(event.target)) {
            callbackRef.current(event);
          }
        }
      };
      document.addEventListener("mousedown", handler);
      document.addEventListener("touchstart", handler);
      return () => {
        document.removeEventListener("mousedown", handler);
        document.removeEventListener("touchstart", handler);
      };
    }, []);
  };
  const dropRef=useRef();
  useOnOutsideClick(dropRef, () => {
    if (drop) setDrop(0);
  });
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="search">
        <div className="menu" onClick={dropOpen} ref={dropRef}>
          <img src={menu1} alt="" />
          <p>Menus</p>
          <img src={chevron} alt="" />
        </div>
        {drop ? (
          <div className="dropdown-menu">
            <ul>
              <a href="!#">
                <li>Books</li>
              </a>
              <a href="!#">
                <li>News</li>
              </a>
              <a href="!#">
                <li>Category</li>
              </a>
              <a href="!#">
                <li>Newspaper</li>
              </a>
            </ul>
          </div>
        ) : null}
        <div className="search-bar">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search over 30 million book titles ..."
          />
          <div className="search-stick">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
      <div className="access">
        <button id="login">Log In</button>
        <button id="signup">
          <img src={profile} alt="" /> <span>Sign Up</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
