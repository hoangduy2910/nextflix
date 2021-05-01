import { BaseService } from "./base-service";

const API_KEY = "6752da525e01b55d9228b83d8c5104c6";

export const TvShowService = {
  GetPopularTvShows: async (pageNumber = 1) => {
    return await BaseService.Get(
      `/tv/popular?page=${pageNumber}&api_key=${API_KEY}`
    );
  },
  GetTrendingTvShows: async (pageNumber = 1) => {
    return await BaseService.Get(
      `/trending/tv/day?page=${pageNumber}&api_key=${API_KEY}`
    );
  },
};
