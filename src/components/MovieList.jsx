import React from 'react';
import { connect } from 'react-redux';
import './MovieList.css';


class MovieList extends React.Component {

	renderMovieImg = (movie) => {
		const imgName = (movie.poster_path || movie.backdrop_path);
		return (
			imgName &&
				<img src={'https://www.themoviedb.org/t/p/w94_and_h141_bestv2/' + imgName }/>
		);
	}

	render() {
		console.log(this.props.movies);
		return (
			<div className='movies'>
				<ul>
				{this.props.movies.map((c, i) => (
					<li key={c.id} class="movie-card">
						<header>{c.title}</header>
						<div class="subtitle">({c.original_title})</div>
						<div class="subtitle2">{c.release_date}</div>
						<div>{this.renderMovieImg(c)}</div>
						<article class="overflowed">{c.overview}</article>
					</li>
				))}
				</ul>
			</div>
		)
	};
}


const mapStateToProps = (state) => ({
	movies: state.movies
});

const mapDispatchToProps = (dispatch) => ({
});

const connected = connect(mapStateToProps, mapDispatchToProps)(MovieList);
export default connected;