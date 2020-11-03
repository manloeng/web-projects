import React from 'react';
import { Link } from '@reach/router';

const Header = () => {
	return (
		<section>
			<nav>
				<Link className="brand" to="/">
					Andrew Chung
				</Link>
				<Link className="links" to="/about-me">
					About Me
				</Link>
				<Link className="links" to="/portfolio">
					Portfolio
				</Link>
			</nav>
		</section>
	);
};

export default Header;
