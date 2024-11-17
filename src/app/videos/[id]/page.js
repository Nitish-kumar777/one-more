"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoGallery from "@/app/play/page";

function VideoDetailPage() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchVideo() {
      if (!id) {
        setError("Invalid video ID");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`/api/getVideos?id=${encodeURIComponent(id)}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch video: ${response.statusText}`);
        }

        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          setVideo(data[0]);
        } else {
          setError("Video not found.");
        }
      } catch (err) {
        console.error(err);
        setError(err.message || "An error occurred while fetching the video.");
      } finally {
        setLoading(false);
      }
    }

    fetchVideo();
  }, [id]);

  return (
    <>
      <Navbar />
      <main className="video-detail-container">
        {loading ? (
          <p className="flex justify-center items-center text-center p-60 text-[35px]">
            Loading video...
          </p>
        ) : error ? (
          <p className="flex justify-center items-center text-center p-60 text-[35px] text-red-500">
            {error}
          </p>
        ) : (
          video && (
            <div key={video.id} className="video-detail">
              <h1 className="text-3xl font-bold text-center mb-6">{video.title}</h1>
              <video
                src={video.url}
                controls
                width="800"
                height="450"
                className="block mx-auto rounded-md shadow-lg"
              />
            </div>
          )
        )}
      </main>
      <section className="related-videos">
        <h2 className="text-2xl font-semibold text-center my-8">Related Videos</h2>
        <VideoGallery />
      </section>
      <Footer />
    </>
  );
}

export default VideoDetailPage;
