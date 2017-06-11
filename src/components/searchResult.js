import React from 'react';

const SearchResult = (props) => {
	// const {title} = props;
	// const {genres} = props;
	// const {tagline} = props;
	// const {overview, poster} = props;
	// const {otherDetails} = props;
	const {genres, info} = props;
	// console.log(genres);

	return (
		<div className="row">
	        <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2" >
	            <div className="row search-result">
	            	<div className="col-sm-5">
	              		<img className="img-fluid" src={`http://image.tmdb.org/t/p/w500${info.poster_path}`} />
	            	</div>
	            	<div className="col-sm-7">
			            <div className="title"><h3>{info.title}</h3></div>
			            <div className="genres">
			            	{genres.map((g, i) => {
			            			let sep = genres.length - 1 === i ? '' : ',';
			            			return g.name + sep + ' ';
			            		}
			            	)}
			            </div>
			            <h6 className="tagline">{info.tagline}</h6>
			            <p className="overview">{info.overview}</p>
			            <div className="row info">
			                <div className="col sm-6">
			                    <h6>Original Release:</h6>
			                    <p>{info.release_date}</p>

			                    <h6>Box Office:</h6>
			                    <p>${parseInt(info.revenue).toLocaleString()}</p>
			                </div>
			                <div className="col sm-6">
			                    <h6>Runtime:</h6>
			                    <p>{info.runtime} mins</p>

			                    <h6>Vote Average:</h6>
			                    <p>{info.vote_average} / 10</p>
			                </div>
	                	</div>
	            	</div>
	            </div>
	        </div>
	    </div>
	);
}

export default SearchResult;