"use client"
import Navbar from "@/components/Navbar";
import { useState } from 'react';
import VideoGallery from "./play/page";


export default function Home() {
  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="hero-text">
          <h1 className="mobile-welcome" style={{ display: 'none' }}>HaremTV</h1>
          <h1>Welcome to HaremTV</h1>
          <p>Your Premium Supplier of ‘Educational’ Anime Content!</p>
        </div>
      </div>

      <main>
        <h2 className="letest-title">Letest H€ntai</h2>
        <div className="all-videos">
          <VideoGallery />
        </div>
        <div className="load-button-box">
          <button id="load-more">Watch More</button>
        </div>
      </main>
    </>
  );
}
