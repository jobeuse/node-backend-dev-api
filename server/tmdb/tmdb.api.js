import axiosClient from "../axios/axios.client";
import tmdbEndPoints from "../tmdb/tmdb.endpoints";
const tmdbApi = {
  mediaList: async ({ mediaType, mediaCategory, page }) =>
    await axiosClient.get(
      tmdbEndPoints.mediaList({ mediaType, mediaCategory, page })
    ),

  mediaDetails: async ({ mediaType, page }) =>
    await axiosClient.get(tmdbEndPoints.mediaDetails({ mediaType, page })),

  mediaGeneres: async ({ mediaType }) =>
    await axiosClient.get(tmdbEndPoints.mediaGeneres({ mediaType })),

  mediaCreatedit: async ({ mediaType, mediaId }) =>
    await axiosClient.get(tmdbEndPoints.mediaCreatedit({ mediaType, mediaId })),

  mediaVideos: async ({ mediaType, mediaId }) =>
    await axiosClient.get(tmdbEndPoints.mediaVideos({ mediaType, mediaId })),

  mediaRecommend: async ({ mediaType, mediaId }) =>
    await axiosClient.get(tmdbEndPoints.mediaRecommend({ mediaType, mediaId })),

  mediaImages: async ({ mediaType, mediaId }) =>
    await axiosClient.get(tmdbEndPoints.mediaImages({ mediaType, mediaId })),

  mediaSearch: async ({ mediaType, query, page }) =>
    await axiosClient.get(
      tmdbEndPoints.mediaSearch({ mediaType, query, page })
    ),

  personDetail: async ({ personId }) =>
    await axiosClient.get(tmdbEndPoints.personDetail({ personId })),

  personMEdias: async ({ personId }) =>
    await axiosClient.get(tmdbEndPoints.personMedias({ personId }))
};

export default tmdbApi;
