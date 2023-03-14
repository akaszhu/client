import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/ulava logo.png";
import Avatar from "../../components/Avatar/Avatar";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setCurrentUser } from "../../actions/currentUser.js";
import decode from "jwt-decode";
import "./Navbar.css";
import { ImSearch } from "react-icons/im";
import Ullavar2 from '../../assets/ullavar2.png'

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const Navigate = useNavigate();

  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);

  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodeToken = decode(token);
      if (decodeToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [User?.token, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      Navigate(`/search/${searchQuery}`);
    }
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    Navigate("/");
    dispatch(setCurrentUser(null));
  };

  const handleAbout = () => {
    Navigate("/about");
  };

  return (
    <nav className="main-nav">
      <div className="navbar">
      <div className="main-bar-header">
      <Link to='/' >
                        <img src={Ullavar2}alt='logo' />
                    </Link>
      </div>
        <Link to="/about" onClick={handleAbout} className="button-87" style={{ width: "100px" }}>
          About
        </Link>
        <Link to="/" className=" button-87 " style={{ width: "100px" }}>
          Products
        </Link>
        <Link to="/" className="button-87" style={{ width: "100px" }}>
          For Teams
        </Link>
        <form onSubmit={handleSubmit}>
          <div class="search">
            <label htmlFor="search-input"></label>
            <input
              type="text"
              id="search-input"
              class="searchTerm"
              placeholder="Search by a tag name?"
              style={{ width: "200px" }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" class="searchButton">
              <ImSearch />
            </button>
          </div>
        </form>
        {User === null ? (
          <Link to="/Auth" className="nav-item nav-links">
            Log in
          </Link>
        ) : (
          <>
            <Avatar backgroundColor="green" px="8px" py="5px" paddingRight="10px" borderRadius="4px" color="white">
              <Link to={`/Users/${User?.result._id}`}>{User.result.name.charAt(0).toUpperCase()}</Link>
            </Avatar>
            <button className="nav-item nav-links" paddingLeft="10px" onClick={handleLogout}>
              Log Out
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
