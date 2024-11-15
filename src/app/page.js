"use client"
import Navbar from "@/components/Navbar";
import { useState } from 'react';


export default function Home() {
  return (
    <>
    <Navbar />
    <VideoUploadForm/>
    </>
  );
}


export function VideoUploadForm() {
  const [videoFile, setVideoFile] = useState(null);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [title, setTitle] = useState('');
  const [previewDuration, setPreviewDuration] = useState(5);

  const handleFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleThumbnailChange = (e) => {
    setThumbnailFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!videoFile || !title) return;

    // Convert video and thumbnail files to base64
    const videoData = await fileToBase64(videoFile);
    const thumbnailData = thumbnailFile ? await fileToBase64(thumbnailFile) : null;

    // Send video and thumbnail data to API route
    const response = await fetch('/api/uploadVideo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ videoData, title, thumbnailData, previewDuration }),
    });

    const data = await response.json();
    if (response.ok) {
      alert("video uploaded successfully")
      // console.log('Video uploaded:', data);
    } else {
      console.error('Upload error:', data.error);
    }
  };

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter video title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="text-black"
      />
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <input type="file" accept="image/*" onChange={handleThumbnailChange} />
      <input
        type="number"
        placeholder="Preview duration (seconds)"
        value={previewDuration}
        onChange={(e) => setPreviewDuration(Number(e.target.value))}
        className="text-black"
      />
      <button onClick={handleUpload}>Upload Video</button>
    </div>
  );
}