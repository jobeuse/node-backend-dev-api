import tmdbConfig from "./tmdb.config";

const tmddbEndPoints = {
  mediaList: ({ mediaType, mediaCategory, page }) =>
    tmdbConfig.getUrl(`${mediaType}/${mediaCategory}`, page),

  mediaDetails: ({ mediaType, mediaId }) =>
    tmdbConfig.getUrl(`${mediaType}/${mediaId}`),

  mediaGeneres: ({ mediaType }) => tmdbConfig.getUrl(`${mediaType}/list`),

  mediaCreatedit: ({ mediaType, mediaId }) =>
    tmdbConfig.getUrl(`${mediaType}/${mediaId}/credits`),

  mediaVideos: ({ mediaType, mediaId }) =>
    tmdbConfig.getUrl(`${mediaType}/${mediaId}/videos`),

  mediaRecommend: ({ mediaType, mediaId }) =>
    tmdbConfig.getUrl(`${mediaType}/${mediaId}/recommendations`),

  mediaImages: ({ mediaType, mediaId }) =>
    tmdbConfig.getUrl(`${mediaType}/${mediaId}/images`),

  mediaSearch: ({ mediaType, query, page }) =>
    tmdbConfig.getUrl(`search/${mediaType}`, { query, page }),

  personDetail: ({ personId }) =>
    tmdbConfig.getUrl(`
      person/${personId}
    `),

  personMedias: ({ personId }) =>
    tmdbConfig.getUrl(`
      person/${personId}/combined_credits
    `)
};

export default tmddbEndPoints;
