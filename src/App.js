import logo from './logo.svg';
import './App.css';
import React from 'react'
import {connect} from 'react-redux'

function App(props) {
  return (
    <div className="App">
		<button onClick={() => props.log()}>
			log
		</button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapStateToProps = state => ({state: state})
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
