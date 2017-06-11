import React from 'react';

const Movie = (props) => {

	const {data} = props;

	return (
		<div className="spotlight-item col-xs-12 col-sm-6 col-md-3">
			<img src={`http://image.tmdb.org/t/p/w500${data.poster_path}`} className="img-fluid" />
			<div className="spotlight-item-overlay">
				<h5>{data.title}</h5>
			</div>
		</div>
	);
}

export default Movie;