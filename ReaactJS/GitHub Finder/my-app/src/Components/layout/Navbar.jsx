import React from "react";
import { FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar({ title }) {
  return (
    <nav>
      <div>
        <div>
          <FaGithub />
          <Link to="/">{title}</Link>
        </div>
        <div>
          <div>
            <Link to="/" className="button">
              Home
            </Link>
          </div>
          <Link to="/about" className="button">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Github Finder",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
