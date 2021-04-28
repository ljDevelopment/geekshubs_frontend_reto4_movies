
const initialState = {
	movies : [
		{
			id: 1,
			title: "movie1"
		},
		{
			id: 2,
			title: "movie2"
		}
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