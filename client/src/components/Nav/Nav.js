import React from "react";
import "./header.css";

function Header() {
	return (
		<header className="bg-info p-3 d-flex justify-content-around">
			<h2>VINYL</h2>
			<nav className="navbar bg-body-tertiary">
				<div className="container-fluid">
					<form className="d-flex" role="search">
						<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
						<button className="btn btn-outline-success" type="submit">
							Search
						</button>
					</form>
				</div>
			</nav>
		</header>
	);
}

export default Header;
