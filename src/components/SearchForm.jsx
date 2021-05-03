import React from 'react';
import { connect } from 'react-redux';
import './SearchForm.css';
import getMovies from '../utils/TheMovieDb';

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
				<input type="text" className="newCardName" placeholder="Your query..." onKeyUp={(e) => this.onKeyUpHandle(e)} />
				<div className="addCardFormButtons">
					<input type="submit" className="addCardSubmit" value="Search" />
				</div>
			</form>
			</div>
		)
	};
}

const mapStateToProps = (state) => ({
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
});

const connected = connect(mapStateToProps, mapDispatchToProps)(SearchForm);
export default connected;