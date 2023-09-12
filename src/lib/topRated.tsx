const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`;

const getMovies = async () => {
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTZlYWM4YWIwZjRjNjlmZTA2ZjkyZjYwMjhlYzhiYiIsInN1YiI6IjY0ZmYxMjc3ZGI0ZWQ2MTAzNDNmMWRhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uPbQaUqLz-3qbYfpHMjRa9G-ODlMjWvXaepvu6bvoCY",
      },
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message);
    }
    const transactions = await response.json();
    return transactions;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default {
  getMovies,
};