export const TMDB_CONFIG = {
  BASE_URL: 'https://api.themoviedb.org/3',
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  Headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  }
}

export const fetchPopularMovies=async({query}:{query:string})=>{
  const endpoint= query
  ?`${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
  :`${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

  const response=await fetch(endpoint, {
    method: 'GET',
    headers: TMDB_CONFIG.Headers,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch movies: ${response.statusText}`);
  }
  const data=await response.json();
  return data.results;
}


/* const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkN2Q3Y2I5NWZiNzE3ZDJlZjIxMzA3MmEyM2Q1Nzg1NyIsIm5iZiI6MTc1MTk2NDYyOC4zMDA5OTk5LCJzdWIiOiI2ODZjZGJkNDhhZjYxNWMwNGQ5YTQ5MDYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.-f22_jgeUntdwg3r30ikigIk4X1X89EWTIG_d3K_MZ4'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error(err)); */