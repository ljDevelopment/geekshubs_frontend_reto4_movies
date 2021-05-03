
const initialState = {
	movies : [
	]
}


function reducer(state = initialState, action) {

	switch (action.type) {
	
		case 'MOVIES':
			const newState = {
				...state,
				movies: action.movies
			}
			return newState;
		default:
			break;
	}
	return state;
}

export default reducer;