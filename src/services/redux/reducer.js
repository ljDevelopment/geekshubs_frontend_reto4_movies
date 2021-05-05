
const initialState = {
	movies : [
	]
}


function reducer(state = initialState, action) {

	switch (action.type) {
	
		case 'MOVIES':
			return {
				...state,
				movies: action.movies
			}
		case 'GENRES':
			return  {
				...state,
				genres: action.genres
			}
		default:
			break;
	}
	return state;
}

export default reducer;