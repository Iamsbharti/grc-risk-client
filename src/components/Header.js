import React from "react";

import { Link } from "react-router-dom";
import "../css/login.css";
import history from "./history";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidUpdate(prevProps, prevState) {}
  handleLogout() {
    localStorage.clear();
    history.push("/");
  }
  render() {
    return (
      <div>
        <nav
          className="nav navbar-static-top"
          style={{
            height: "70px",
            background: "#0f0326",
            fontColor: "#510B0B",
          }}
        >
          <Link
            className="nav-item nav-link text-white mt-3"
            style={{
              fontSize: "18px",
              marginLeft: "70px",
              fontWeight: "bold",
            }}
            to="/"
          >
            GRC-RISKS
          </Link>
          {localStorage.getItem("user") !== null ? (
            <>
              <p
                className="nav-item nav-link text-white mt-3 auth"
                style={{
                  fontSize: "18px",
                  marginLeft: "70px",
                  fontWeight: "bold",
                }}
                onClick={() => this.handleLogout()}
              >
                Logout
              </p>
            </>
          ) : (
            <>
              <Link
                className="nav-item nav-link text-white mt-3"
                style={{
                  fontSize: "18px",
                  marginLeft: "70px",
                  fontWeight: "bold",
                }}
                to="/"
              >
                Login
              </Link>
            </>
          )}

          {localStorage.getItem("user") !== null && (
            <p
              className="nav-item nav-link text-white mt-3"
              style={{
                fontSize: "18px",
                marginLeft: "70px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Welcome {JSON.parse(localStorage.getItem("user")).login}
            </p>
          )}
        </nav>
      </div>
    );
  }
}

export default Header;
