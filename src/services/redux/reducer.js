
const initialState = {
	movies : []
}

function reducer(state = initialState, action) {

	switch (action.type) {
		case 'LOG':
			console.log(action.message)
			break;
	
		default:
			break;
	}
	return state;
}

export default reducer;