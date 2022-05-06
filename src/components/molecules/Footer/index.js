import React from 'react';
import './style.css';

const Footer = (props) => {
  return (
    <footer className="Footer">
      <div>
        Made by Shivangi Mohanty
      </div>

      <br/>
      <div className="Footer__Items">
        <a
          href="https://github.com/Shivangi-27/Sorting-Algorithm-Visualizer"
          target="_blank"
          rel="noopener noreferrer"
          className="Footer__Link"
        >
          Source Code
        </a>
      </div>
    </footer>
  );
};

export default Footer;
