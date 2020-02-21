import React, { Component } from "react";

class Header extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-dark clearfix">
				<div className="container-fluid">
					<div className="navbar-header">
						<a className="navbar-brand  text-white" href="/">
							Passport Template
						</a>
					</div>
					<div className="float-right">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<a className="nav-link text-white" href="/login">
									Login
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-white" href="/create-account">
									Sign Up
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Header;
