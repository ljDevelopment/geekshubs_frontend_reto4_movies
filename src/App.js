import './App.css';
import React from 'react'
import { connect } from 'react-redux'
import SearchForm from './components/SearchForm'
import MovieList from './components/MovieList'
import {getGenres} from './utils/TheMovieDb';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.props.genres(getGenres());
	  }

	render() {
		return (
		<div className="App">
			<header className="App-header">
				<SearchForm />
			</header>
			<div className="App-Result">
				<MovieList />
			</div>
		</div>);
	}
}

const mapStateToProps = state => ({ state: state })
const mapDisptchToProps = (dispatch) => ({
	genres: (genres) => {
		genres.then(g => dispatch({
				type: 'GENRES',
				genres: g
			})
		);
	},
})

const connectedApp = connect(
	mapStateToProps,
	mapDisptchToProps
)(App)

export default connectedApp;
