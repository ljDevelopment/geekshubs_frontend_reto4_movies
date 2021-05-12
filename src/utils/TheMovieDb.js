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

const moviesByGenre = async (genreId) => {
	
	if (!genreId || genreId < 0)
	{
		return new Promise((resolve, reject) => {
			  resolve([]);
		  });
	}

	const url = 'https://api.themoviedb.org/3/discover/movie?api_key=' 
		+ api_key 
		+ "&with_genres=" + genreId
		;
	console.log(url);
	let res = await fetch(url);
	res = await res.json();
	const movies = res.results;
	return movies;
}

export {getMovies, getPopular, getGenres, moviesByGenre}