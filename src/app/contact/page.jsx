"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaDiscord,
} from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactUs = () => {
  const canvasRef = useRef(null);

  // Set up the canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Define colors
    const colors = ["rgba(255, 0, 0, 0.8)", "rgba(128, 0, 128, 0.8)", "rgba(0, 0, 255, 0.8)"];

    // Create circles with random properties
    const circles = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 5 + 2,
      dx: Math.random() * 2 - 1,
      dy: Math.random() * 2 - 1,
      color: colors[Math.floor(Math.random() * colors.length)], // Randomly pick a color
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      circles.forEach((circle) => {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = circle.color;
        ctx.fill();

        // Update position
        circle.x += circle.dx;
        circle.y += circle.dy;

        // Bounce off edges
        if (circle.x < 0 || circle.x > canvas.width) circle.dx *= -1;
        if (circle.y < 0 || circle.y > canvas.height) circle.dy *= -1;
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup on component unmount
    return () => {
      cancelAnimationFrame(animate);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* Canvas for Animation */}
        <canvas
          id="canvas"
          ref={canvasRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        />

        {/* Contact Container */}
        <div className="contact-container">
          <h1>Contact Us</h1>

          {/* Social Media Links */}
          <div className="social-links">
            <Link href="https://twitter.com/ManjiStuduo" title="Twitter">
              <FaTwitter size={24} />
            </Link>
            <Link href="https://m.facebook.com/profile.php?id=61559019777825" title="Facebook">
              <FaFacebookF size={24} />
            </Link>
            <Link href="https://www.instagram.com/studio_manji" title="Instagram">
              <FaInstagram size={24} />
            </Link>
            <Link href="https://t.me/HaremTV" title="Telegram">
              <FaTelegramPlane size={24} />
            </Link>
            <Link href="https://discord.com/invite/yourhandle" title="Discord">
              <FaDiscord size={24} />
            </Link>
          </div>

          {/* Note Section */}
          <div className="note">
            <p>
              <strong>Note:</strong> We aim to respond within 24-48 hours. Feel free to reach out with
              any questions or suggestions!
            </p>
          </div>

          {/* Privacy Notice */}
          <div className="privacy-notice">
            <h2>Privacy Notice</h2>
            <p>
              As part of the evolving web privacy standards, we no longer rely on third-party cookies
              to track your activity across different websites. This ensures better privacy and data
              security for all users. If you have any questions about this, please dont hesitate to
              contact us.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactUs;