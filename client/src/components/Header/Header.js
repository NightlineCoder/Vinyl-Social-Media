import React from "react";
import "./header.css";

function Header() {
  return (
    <header className="bg-info p-3 d-flex justify-content-around">
      <h2>VINYL</h2>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
}

export default Header;
