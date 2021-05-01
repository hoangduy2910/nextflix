import { BaseService } from "./base-service";

const API_KEY = "6752da525e01b55d9228b83d8c5104c6";

export const MovieService = {
  GetPopularMovies: async (pageNumber = 1) => {
    return await BaseService.Get(
      `/movie/popular?page=${pageNumber}&api_key=${API_KEY}`
    );
  },
  GetTrendingMovies: async (pageNumber = 1) => {
    return await BaseService.Get(
      `/trending/movie/day?page=${pageNumber}&api_key=${API_KEY}`
    );
  },
  GetMovieById: async (id) => {
    return await BaseService.Get(`/movie/${id}?api_key=${API_KEY}`);
  },
  GetCastByMovieId: async (id) => {
    const res = await BaseService.Get(
      `/movie/${id}/credits?api_key=${API_KEY}`
    );

    if (res && res.cast) return res.cast;
    return null;
  },
};
