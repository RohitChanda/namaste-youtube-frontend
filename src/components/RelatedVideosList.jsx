import React, { useEffect, useState } from 'react';
import { fetchRelatedVideos } from '../utils/youtubeApi';
import { useSearchParams } from 'react-router-dom';
import ButtonList from './ButtonList';

const RelatedVideosList = () => {
    const [searchParams] = useSearchParams();
    const getRelatedVideos = async () => {
        const data = await fetchRelatedVideos(searchParams.get("v"));
        console.log('data', data)
    }
    useEffect(() => {
        // getRelatedVideos();

    }, [])
    return (
        <>
        <div className=' w-full h-full ml-2 p-2 '>
        {/* <ButtonList /> */}
        {/* <VideoContainer infinityScrolling={false} /> */}
        </div>
        {/* <div className=' w-full p-2 ml-2 border border-black'>
           
        </div> */}
        
        </>
      )
}

export default RelatedVideosList;
