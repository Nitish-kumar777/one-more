"use client";

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

function VideoGallery() {
  const [videos, setVideos] = useState([]);
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchVideos() {
      const response = await fetch('/api/getVideos');
      const data = await response.json();
      setVideos(data);
      // console.log(data);
    }
    fetchVideos();
  }, []);

  const handleThumbnailClick = (video) => {
    router.push(`/videos/${encodeURIComponent(video.public_id)}`);
  };
  

  return (
    <div className="gallery">
      {videos.map((video) => (
        <div
          key={video.public_id}
          className="post-card"
          onMouseEnter={() => setHoveredVideo(video.previewUrl)}
          onMouseLeave={() => setHoveredVideo(null)}
          onClick={() => handleThumbnailClick(video)}
        >
          <img className='post-card' src={video.thumbnailUrl || 'default-thumbnail.jpg'} alt={video.title} />
          {hoveredVideo === video.previewUrl && (
            <video
              src={hoveredVideo}
              autoPlay
              loop
              muted
              className="preview"
              width="200"
            />
          )}
          <h3 className='title'>{video.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default VideoGallery;
