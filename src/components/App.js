import React, { Component } from 'react';
import Navbar from './navbar';
import Spotlight from './spotlight';
import Search from './search';

import logo from '../logo.svg';
import './App.css';
import 'react-select/dist/react-select.css';

export const API_KEY = 'e8174be6da251dccb28b91ea2e221b2d';
export const ROOT_URL = 'https://api.themoviedb.org/3/';

class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Search />
				<Spotlight />

			</div>
		);
	}
}

export default App;