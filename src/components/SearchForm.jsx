import React from 'react';
import { connect } from 'react-redux';
import './SearchForm.css';
import {getMovies, getPopular, moviesByGenre} from '../utils/TheMovieDb';

const escapeKeyCode = 27;

class SearchForm extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			value: '',
		};
	}

	onSubmitHandle = (e) => {

		e.preventDefault();

		if (this.state.value && this.state.value.trim()) {
			this.props.movies(this.state.value.trim());
		}
	}

	onKeyUpHandle = (e) => {
		
		if (e.keyCode === escapeKeyCode) {
			return;
		}

		this.setState({
			...this.state,
			value: e.target.value
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmitHandle}>
				<input type="text" placeholder="Your query..." onKeyUp={(e) => this.onKeyUpHandle(e)} />
				<div>
					<input type="submit" value="Search" />
				</div>
				<div>
					<input type="button" value="Popular" onClick={(e) => this.props.popular(10)} />
				</div>
				<div>
					<select onChange={(e) => this.props.genre(e.target.value)}>
						<option key="genre_none" value="-1">---</option>
						{Object.entries(this.props.genres).map((e) => (
							
							<option key={"genre_" + e[0]} value={e[0]}>{e[1]}</option>
						))}
					</select> 
				</div>
			</form>
			</div>
		)
	};
}

const mapStateToProps = (state) => ({
	genres: state.genres || {}
});

const mapDispatchToProps = (dispatch) => ({

	movies: (title) => {
		getMovies(title)
			.then(m =>
				dispatch({
					type: 'MOVIES',
					movies: m
				})
			);
	},
	popular: (count) => {
		count = count || 10;
		getPopular()
			.then(m =>
				dispatch({
					type: 'MOVIES',
					movies: m.slice(0, count)
				})
			);
	},
	genre: (genreId) => {
		
		if (!genreId || genreId < 0)
		{
			dispatch({
				type: 'MOVIES',
				movies: []
			});
			return;	
		}
		moviesByGenre(genreId)
			.then(m =>
				dispatch({
					type: 'MOVIES',
					movies: m
				})
			);
	},
});

const connected = connect(mapStateToProps, mapDispatchToProps)(SearchForm);
export default connected;