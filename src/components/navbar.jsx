import React from "react";

const NavBar = ({ totalCounters }) => {
  console.log("Navbar - rendered");
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            Cart Counter:{" "}
            <span className="badge bg-secondary">{totalCounters}</span>
          </span>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
