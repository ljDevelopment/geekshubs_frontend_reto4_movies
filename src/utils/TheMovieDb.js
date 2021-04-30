
const getMovies = async () => {
	let res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + process.env.REACT_APP_THEMOVIEDB_API_KEY);
	res = await res.json();
	const movies = res.results;
	return movies;
}


export default getMovies;