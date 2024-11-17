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
      } catch (err) {
        setError(err.message);
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
    <div className="all-videos">
      {isLoading ? (
        <p>Loading videos...</p>
      ) : error ? (
        <p>Error loading videos: {error}</p>
      ) : videos.length > 0 ? (
        videos.map((video) => (
          <div
            key={video.public_id}
            onMouseEnter={() => setHoveredVideo(video.previewUrl)}
            onMouseLeave={() => setHoveredVideo(null)}
            onClick={() => handleThumbnailClick(video)}
            className="w-full "
          >
            {hoveredVideo === video.previewUrl ? (
              <video
                src={hoveredVideo}
                autoPlay
                loop
                muted
                width="150"
                height="150"
              />
            ) : (
              <img
                src={video.thumbnailUrl || "/default-thumbnail.jpg"}
                alt={video.title || "Video thumbnail"}
                width="240"
                height="150"
                style={{ objectFit: "cover" }}
              />
            )}
            <p>{video.title || "Untitled Video"}</p>
          </div>
        ))
      ) : (
        <p>No videos available. Please try again later!</p>
      )}
    </div>
  );
}

export default VideoGallery;
