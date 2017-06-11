import React from 'react';

const Navbar = (props) => {
	return (
		<nav className="navbar navbar-toggleable-md">
		    <div className="container">
			    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			      <span className="navbar-toggler-icon"></span>
			    </button>
			    <a className="navbar-brand" href="">TMDB</a>

			    <div className="collapse navbar-collapse" id="navbarSupportedContent">
			        <ul className="navbar-nav mr-auto">
				        <li className="nav-item active">
				            <a className="nav-link" href="">Home</a>
				        </li>
				        <li className="nav-item">
				            <a className="nav-link" href="https://github.com/annietoo/react-tmdb-app">Github</a>
				        </li>
			     	</ul>
			    </div>
		    </div>
		</nav>
	);
}

export default Navbar;