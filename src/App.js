import logo from './logo.svg';
import './App.css';
import React from 'react'
import { connect } from 'react-redux'
import SearchForm from './components/SearchForm'
import MovieList from './components/MovieList'


function App(props) {
	return (
		<div className="App">
			<header className="App-header">
				<SearchForm />
			</header>
			<MovieList />
		</div>
	);
}

const mapStateToProps = state => ({ state: state })
const mapDisptchToProps = (dispatch) => ({
	log: () => dispatch({
		type: 'LOG',
		message: 'message from app'
	})
})

const connectedApp = connect(
	mapStateToProps,
	mapDisptchToProps
)(App)

export default connectedApp;
