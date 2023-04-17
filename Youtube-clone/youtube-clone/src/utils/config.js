const GOOGLE_API_KEY = process.env.REACT_APP_YTB_API_KEY;
export const YOUTUBE_VIDEOS_API =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
    GOOGLE_API_KEY;
export const YOUTUBE_VIDEOS_API_NEXT_PAGE =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
    GOOGLE_API_KEY + "&pageToken=";
export const YOUTUBE_CHANNEL_IMG_API = "https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails&key=" + GOOGLE_API_KEY + "&id="
export const GOOGLE_SEARCH_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOUTUBE_VIDEO_LIST_SEARCH_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&key=" + GOOGLE_API_KEY + "&q="
export const YOUTUBE_VIDEO_LIST_BY_CATEGORY_API = "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&regionCode=IN&maxResults=25&key=" + GOOGLE_API_KEY + "&videoCategoryId="
export const YOUTUBE_VIDEO_LIST_SEARCH_API_NEXT_PAGE = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=" + GOOGLE_API_KEY + "&q=" //+pageToken(Will be added in Component)
export const YOUTUBE_VIDEO_LIST_SEARCH_CONTENT_API = "https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&key=" + GOOGLE_API_KEY + "&id="
export const YOUTUBE_VIDEO_SUGGESTIONS_API = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&order=date&type=video&key=" + GOOGLE_API_KEY + "&relatedToVideoId="
export const YOUTUBE_VIDEO_DETAIL_BY_ID_API = "https://www.googleapis.com/youtube/v3/videos?part=contentDetails,statistics,snippet&key=" + GOOGLE_API_KEY + "&id="
export const OFFSET_LIVE_MESSAGE_COUNT = 30
export const YOUTUBE_CHANNEL_SUBSCRIBERS_COUNT = "https://www.googleapis.com/youtube/v3/channels?part=statistics&key=" + GOOGLE_API_KEY + "&id="
export const YOUTUBE_COMMENTS_API = "https://www.googleapis.com/youtube/v3/commentThreads?key=" + GOOGLE_API_KEY + "&part=snippet,replies&videoId="
export const YOUTUBE_CATEGORY_LIST = "https://youtube.googleapis.com/youtube/v3/videoCategories?regionCode=IN&key=" + GOOGLE_API_KEY