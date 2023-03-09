const GOOGLE_API_KEY = "AIzaSyBVEgwMUuOmylGPjdHC7oUrxKtwRZNBNYM";
export const YOUTUBE_VIDEOS_API =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
    GOOGLE_API_KEY;
export const YOUTUBE_CHANNEL_IMG_API = "https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails&key=" + GOOGLE_API_KEY + "&id="