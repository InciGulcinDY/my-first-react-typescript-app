import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import SignIn from "../../components/SignIn/SignIn";
import SignOut from "../../components/SignOut/SignOut";

type Props = {};

const Navbar = (props: Props) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    function handleSignIn() {
        setIsAuthenticated(true);
    }

    function handleSignOut() {
        setIsAuthenticated(false);
    }

  return (
    <div className="NavbarLayout">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          {/*Navbar Buttons*/}
          <div className="container-fluid col-12 col-md-4">
            <Link className="navbar-brand btn" to="/">
              Home
            </Link>
            <Link className="navbar-brand btn" to="/">
              All Products
            </Link>
            <Link className="navbar-brand btn" to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-phone mb-1"
                viewBox="0 0 16 16"
              >
                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
              </svg>
              Phone
            </Link>
            <Link className="navbar-brand btn" to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-laptop mb-1"
                viewBox="0 0 16 16"
              >
                <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
              </svg>
              Laptop
            </Link>
          </div>

          {/*Search*/}
          <div className="container-fluid">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>

          {/*Customer*/}
          <div className="col-12 col-md-4">
            {isAuthenticated ? <SignIn signOut={handleSignOut}/> : <SignOut signIn={handleSignIn}/>}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
