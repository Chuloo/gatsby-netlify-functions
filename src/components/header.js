import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="navbar is-dark" style={{ marginBottom: "2em" }}>
      <div className="navbar-brand">
        <Link
          to="/"
          style={{
            marginLeft: "3em",
            padding: "10px",
          }}
          className="has-text-white is-size-3"
        >
          {siteTitle} 🐶
        </Link>
      </div>
      <div className="navbar-end" style={{ marginRight: "3em" }}>
        <div className="navbar-item">
          <Link
            to="/"
            style={{
              padding: "10px",
            }}
            className="has-text-white"
          >
            Home
          </Link>
          <Link
            to="/gallery/"
            style={{
              padding: "10px",
            }}
            className="has-text-white"
          >
            Gallery
          </Link>
        </div>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
