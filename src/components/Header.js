import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Header = (props) => {
  return (
    <div>
      <header className="header">
        <Link to="/">
          <img src="../images/logo.png" alt="logo" />
        </Link>

        <Link to="/add-post">
          <Button variant="contained">Add post</Button>
        </Link>
      </header>
    </div>
  );
};

export default Header;
