"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VideoGallery from '@/app/play/page';

function VideoDetailPage() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    async function fetchVideo() {
      if (!id) return;
      const response = await fetch(`/api/getVideos?id=${id}`);
      if (response.ok) {
        const data = await response.json();
        setVideo(Array.isArray(data) ? data[0] : data);
        console.log("Video fetched successfully:", data);
      } else {
        console.error("Failed to fetch video data");
      }
    }
    fetchVideo();
  }, [id]);

  return (
    <>
    <Navbar/>
    <div>
      {video ? (
        <div key={video.id}>
          <h1>{video.title}</h1>
          <video src={video.url} controls width="800" height={300} />
        </div>
      ) : (
        <p className='flex justify-center items-center text-center p-60 text-[35px]'>Loading video...</p>
      )}
    </div>
    <VideoGallery />
    <Footer/>
    </>
  );
}

export default VideoDetailPage;
