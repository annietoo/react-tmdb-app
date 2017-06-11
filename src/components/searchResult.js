import React from 'react';

const SearchResult = (props) => {

	const {genres, info} = props;

	return (
		<div className="row">
	        <div className="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2" >
	            <div className="row search-result">
	            	<div className="col-md-5 result-image">
	              		<img className="img-fluid" src={`http://image.tmdb.org/t/p/w500${info.poster_path}`} alt="Poster"/>
	            	</div>
	            	<div className="col-md-7 re">
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
			            <div className="info">
		                    <div><span>Original Release:</span> {info.release_date}</div>
		                    <div><span>Box Office:</span> {info.runtime} mins</div>
		                    <div><span>Runtime:</span> {info.vote_average} / 10</div>
		                    <div><span>Vote Average:</span> ${parseInt(info.revenue, 0).toLocaleString()}</div>
	                	</div>
	            	</div>
	            </div>
	        </div>
	    </div>
	);
}

export default SearchResult;