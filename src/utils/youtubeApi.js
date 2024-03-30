// import axios from "axios";

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
