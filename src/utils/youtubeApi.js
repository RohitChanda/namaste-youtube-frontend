const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=8&pageToken=CAgQAA&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_SUGGESTION_API = 'https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q='


export const getSearchResults = async (searchKey, pageToken='') => {
    let apiKey =  `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&pageToken=${pageToken}&q=${searchKey}&key=${GOOGLE_API_KEY}`;
    const data = await fetch(apiKey);
    const json = await data.json();
    return json;
}

export const getYoutubeVideosList = async(pageToken='') => {
    let apiKey = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=8&pageToken=${pageToken}&regionCode=IN&key=${GOOGLE_API_KEY}`;
    const data = await fetch(apiKey);
    const json = await data.json();
    return json;
}

export const getCommentsList = async (videoId) => {
    let apiKey = `https://www.googleapis.com/youtube/v3/commentThreads?key=${GOOGLE_API_KEY}&textFormat=plainText&part=snippet&videoId=${videoId}`;
    const response = await fetch(apiKey);
    const json = await response.json();
    return json.items
}

export const fetchRelatedVideos = async (videoId) => {
    try {

        let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&key=${GOOGLE_API_KEY}&maxResults=10`
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (e) {
        console.log('error',e);
    }
}

export const getYoutubeVideoDetails = async(videoId) => {
    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${GOOGLE_API_KEY}`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error)
    }
}