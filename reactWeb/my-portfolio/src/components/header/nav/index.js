import React from 'react';
import './index.css';

function Nav() {
	return (
		<nav class="navbar navbar-expand-md fixed-top navbar-dark bg-dark p-10">
			<a class="navbar-brand" href="#">
				Manloeng Andrew Chung
			</a>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon" />
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item dropdown">
						<a
							class="nav-link dropdown-toggle"
							href="#"
							id="navbarDropdown"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							About Me
						</a>
						<div class="dropdown-menu" aria-labelledby="navbarDropdown">
							<a href="#" class="dropdown-item">
								My Portfolio
							</a>
							<a href="#" class="dropdown-item">
								My CV
							</a>
							<div class="dropdown-divider" />
							<a href="#" class="dropdown-item">
								Extras
							</a>
						</div>
					</li>
				</ul>
			</div>

			<div class="nav navbar d-none d-md-block">
				<a href="https://www.facebook.com/andrew.chung.963">
					<i class="fa fa-facebook fa-lg" />
				</a>
				<a href="https://linkedin.com/in/andrew-chung-crane/">
					<i class="fa fa-linkedin fa-lg" />
				</a>
				<a href="https://github.com/manloeng">
					<i class="fa fa-github fa-lg" />
				</a>
			</div>
		</nav>
	);
}

export default Nav;
