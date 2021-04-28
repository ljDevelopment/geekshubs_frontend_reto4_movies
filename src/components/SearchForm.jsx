import React from 'react';
import { connect } from 'react-redux';
import './SearchForm.css';

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
			<div className='board'>
				<form className="addCardForm" onSubmit={this.onSubmitHandle}>
				<input type="text" className="newCardName" placeholder="Enter a title for this card..." onKeyUp={(e) => this.onKeyUpHandle(e)} />
				<div className="addCardFormButtons">
					<input type="submit" className="addCardSubmit" value="Add card" />
					<input type="button" className="addCardCloseButton" value="X" onClick={() => this.setShowForm(false)} />
				</div>
			</form>
			</div>
		)
	};
}

const getMovies = async () => {
	let res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + process.env.REACT_APP_THEMOVIEDB_API_KEY);
	res = await res.json();
	const movies = res.results;
	return movies;
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({

	movies: (title) => {
		getMovies()
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