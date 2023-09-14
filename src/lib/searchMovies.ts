const url = "https://api.themoviedb.org/3/search/movie";

const searchMovies = async (movie: string) => {
  try {
    const response = await fetch(
      `${url}?query=${movie}&include_adult=false&language=en-US&page=1`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOTZlYWM4YWIwZjRjNjlmZTA2ZjkyZjYwMjhlYzhiYiIsInN1YiI6IjY0ZmYxMjc3ZGI0ZWQ2MTAzNDNmMWRhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uPbQaUqLz-3qbYfpHMjRa9G-ODlMjWvXaepvu6bvoCY",
        },
      }
    );

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message);
    }
    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error(error.message);
  }
};

export default {
  searchMovies,
};
