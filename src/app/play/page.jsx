"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function VideoGallery() {
  const [videos, setVideos] = useState([]);
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch("/api/getVideos");
        if (!response.ok) {
          throw new Error(`Failed to fetch videos: ${response.statusText}`);
        }

        const data = await response.json();
        if (Array.isArray(data)) {
          setVideos(data);
        } else {
          throw new Error("Unexpected data format");
        }
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchVideos();
  }, []);

  const handleThumbnailClick = (video) => {
    router.push(`/videos/${encodeURIComponent(video.public_id)}`);
  };

  return (
    <div className="gallery">
      {isLoading ? (
        <p>Loading videos...</p>
      ) : error ? (
        <p>Error loading videos: {error}</p>
      ) : videos.length > 0 ? (
        videos.map((video) => (
          <div
            key={video.public_id}
            className="post-card"
            onMouseEnter={() => setHoveredVideo(video.previewUrl)}
            onMouseLeave={() => setHoveredVideo(null)}
            onClick={() => handleThumbnailClick(video)}
          >
            <img
              className="post-card"
              src={video.thumbnailUrl || "default-thumbnail.jpg"}
              alt={video.title || "Video thumbnail"}
            />
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
            <h3 className="title">{video.title || "Untitled Video"}</h3>
          </div>
        ))
      ) : (
        <p>No videos available. Please try again later!</p>
      )}
    </div>
  );
}

export default VideoGallery;
