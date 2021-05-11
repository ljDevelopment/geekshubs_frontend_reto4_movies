
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
			var genres = {};
			for (let i = action.genres.length - 1; i >= 0; i--)
			{
				const e = action.genres[i];
				genres[e.id] = e.name;
			}
			return  {
				...state,
				genres: genres 
			}
		default:
			break;
	}
	return state;
}

export default reducer;