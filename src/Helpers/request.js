const API_KEY='6f5f64ef17d8caf9df73f52bab2946a7'

export default{
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchNetFlixOriginal:`/discover/movie?api_key=${API_KEY}&with_network=213`,
    fetchDocumentries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
};