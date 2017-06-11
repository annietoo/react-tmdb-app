import axios from 'axios';

const API_KEY = 'e8174be6da251dccb28b91ea2e221b2d';
const ROOT_URL = 'https://api.themoviedb.org/3/';
export const GET_SPOTLIGHT_MOVIES = 'get_spotlight_movies';

export function getSpotlightMovies() {
	// const request = axios.get(`${ROOT_URL}/discover/movie?sort_by=popularity.desc?api_key=${API_KEY}`);
	const request = axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc?&api_key=cfe422613b250f702980a3bbf9e90716').then((res) => console.log(res.data));

	return {
		type: GET_SPOTLIGHT_MOVIES,
		payload: request
	}
}
