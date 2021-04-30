import React from 'react';
import { connect } from 'react-redux';
import './MovieList.css';


class MovieList extends React.Component {



	render() {
		console.log(this.props.movies);
		return (
			<div className='movies'>
				<ul>
				{this.props.movies.map((c, i) => (
					<li key={c.id}>
						<div>{c.title}</div>
						<div>{c.original_title}</div>
						<div>{c.release_date}</div>
						<div><img src={'https://www.themoviedb.org/t/p/w94_and_h141_bestv2/' + c.poster_path} /></div>
						<div>{c.overview}</div>
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