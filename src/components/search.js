import React, {Component} from 'react';
import Select from 'react-select'
import axios from 'axios';
import SearchBar from './searchBar';
import SearchResult from './searchResult';


import {ROOT_URL, API_KEY} from './App';

class Search extends Component {

	constructor(props) {
		super(props);

		this.state = {movie: '', genres: []};
	}

	componentDidMount() {
		const id = {value: 297762};
		this.onSelect(id);
	}

	fetchMovie(input) {
		const a = "hello";
		return axios.get(`${ROOT_URL}search/movie?query=${input}&page=1&api_key=${API_KEY}`)
				.then((res) => {
					console.log(res.data.results);
					const results = res.data.results.map((result) => {
							return {value: result.id, label: result.title}	
						});
					
					return {options: results};
				}).catch((error) => console.log(error));
		// console.log(`${ROOT_URL}search/movie/?query=${input}&page=1&api_key=${API_KEY}`);
		// return fetch(`${ROOT_URL}search/movie/?query=last&page=1&api_key=${API_KEY}`)
		// 			.then((res) => res.json())
		// 			.then((data) => {
		// 				const results = data.results.map((result) => {
		// 					return {value: result.title, label: result.title}	
		// 				});
		// 				return {options: results};
		// 			});

		// const ret = axios.get("https://api.themoviedb.org/3/search/movie?query=last&api_key=e8174be6da251dccb28b91ea2e221b2d")
		// .then((res) => console.log(res));
	}

	onSelect(val) {
		const movie = axios.get(`${ROOT_URL}movie/${val.value}?api_key=${API_KEY}`).
			then((res) => {
				console.log(res.data);
				this.setState({movie: res.data, genres: res.data.genres});
			});
	}

	render() {
		return (

			<section id="search" style={{backgroundImage: `url(http://image.tmdb.org/t/p/w1280${this.state.movie.backdrop_path})`}}>
			    <div className="mask"></div>
			    <div className="container">
			    	<div className="row">
			    		<div className="col-sm-4 searchBar">
				    		<Select.Async
				    			name="form-field-name"
				    			value="one"
				    			loadOptions={this.fetchMovie}
				    			onChange={this.onSelect.bind(this)}
				    		/>
				    	</div>
						<SearchResult
							info={this.state.movie}
							genres={this.state.genres}

						/>
			    	</div>
			    </div>
			</section>
		);
	}
}

export default Search;