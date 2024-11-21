'use client';

import { useState } from 'react';

export default function UploadPage() {
  const [title, setTitle] = useState('');
  const [video, setVideo] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [status, setStatus] = useState('');

  const handleUpload = async () => {
    if (!title || !video || !thumbnail) {
      alert('All fields are required!');
      return;
    }

    setStatus('Uploading...');
    const videoBase64 = await toBase64(video);
    const thumbnailBase64 = await toBase64(thumbnail);

    const response = await fetch('/api/uploadVideo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, videoBase64, thumbnailBase64 }),
    });

    if (response.ok) {
      setStatus('Upload successful!');
    } else {
      setStatus('Upload failed.');
    }
  };

  const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });
  };

  return (
    <div>
      <h1>Upload Video</h1>
      <input
        type="text"
        placeholder="Video Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type="file" accept="video/*" onChange={(e) => setVideo(e.target.files[0])} />
      <input type="file" accept="image/*" onChange={(e) => setThumbnail(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
      <p>{status}</p>
    </div>
  );
}
