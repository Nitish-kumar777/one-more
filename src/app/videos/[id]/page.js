"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

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
    <div>
      {video ? (
        <div key={video.id}>
          <h1>{video.title}</h1>
          <video src={video.url} controls width="800" />
          <p>{video.description || "No description available"}</p>
        </div>
      ) : (
        <p>Loading video...</p>
      )}
    </div>
  );
}

export default VideoDetailPage;
