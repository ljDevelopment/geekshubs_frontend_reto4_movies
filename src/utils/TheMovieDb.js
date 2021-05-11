const api_key = process.env.REACT_APP_THEMOVIEDB_API_KEY;

const getMovies = async (term) => {
	const url = 'https://api.themoviedb.org/3/search/movie?api_key=' 
		+ api_key
		+ '&query=' + term;
	console.log(url);
	let res = await fetch(url);
	res = await res.json();
	const movies = res.results;
	return movies;
}

const getPopular = async () => {

	const url = 'https://api.themoviedb.org/3/movie/popular?api_key=' 
		+ api_key 
		;
	console.log(url);
	let res = await fetch(url);
	res = await res.json();
	const movies = res.results;
	return movies;
}

const getGenres = async () => {

	const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=' 
		+ api_key 
		;
	console.log(url);
	let res = await fetch(url);
	res = await res.json();
	const genres = res.genres;
	return genres;
}

export {getMovies, getPopular, getGenres}