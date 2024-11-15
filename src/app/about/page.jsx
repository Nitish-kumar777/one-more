"use client";

import React, { useEffect, useRef } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutUs() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ["rgba(255, 0, 0, 0.8)", "rgba(128, 0, 128, 0.8)", "rgba(0, 0, 255, 0.8)"];

    // Create circles with random properties
    const circles = Array.from({ length: 50 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 5 + 2,
      dx: Math.random() * 2 - 1,
      dy: Math.random() * 2 - 1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    let animationFrameId;

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

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        :root {
          --bg-color: #121212;
          --primary-color: #ffffff;
          --secondary-color: #333333;
          --text-color: #e0e0e0;
          --muted-text-color: #b0b0b0;
        }

        main {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        #canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }

        .about-container {
          background: rgba(18, 18, 18, 0.85);
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
          max-width: 700px;
          width: 90%;
          backdrop-filter: blur(10px);
          perspective: 1000px;
          transform: perspective(800px) rotateX(3deg) translateZ(10px);
          transition: transform 0.3s;
        }

        .about-container:hover {
          transform: perspective(800px) rotateX(0) translateZ(20px) scale(1.02);
        }

        .about-container h1 {
          color: var(--primary-color);
          font-size: 2.8rem;
          margin-bottom: 1.5rem;
          text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
        }

        .about-container p {
          color: var(--muted-text-color);
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 1rem;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
        }

        .team-section {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 2rem;
        }

        .team-member {
          background: var(--secondary-color);
          padding: 1.2rem;
          border-radius: 12px;
          width: 160px;
          text-align: center;
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.5);
          transition: transform 0.3s;
        }

        .team-member:hover {
          transform: translateY(-10px) scale(1.05);
        }

        .team-member img {
          border-radius: 50%;
          margin-bottom: 0.5rem;
        }

        .team-member h3 {
          color: var(--text-color);
          font-size: 1.2rem;
          margin: 0.5rem 0;
          text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
        }

        .team-member p {
          font-size: 0.9rem;
          color: var(--muted-text-color);
        }

        @media (max-width: 600px) {
          .about-container {
            padding: 1.5rem;
          }

          .team-member {
            width: 120px;
          }
        }
      `}</style>
<Navbar/>
      <main>
        <canvas ref={canvasRef} id="canvas" />
        <div className="about-container">
          <h1>About Us</h1>
          <p>
            Welcome to HaremTv | hentai.42web.io - your go-to platform for the
            latest anime content. We're dedicated to bringing you the best in
            harem and anime content, curated carefully for our community.
          </p>
          <p>
            Our journey started with a vision to make anime easily accessible,
            and we’re thrilled to see our community grow every day.
          </p>
          <div className="team-section">
            {[
              {
                name: "Creative",
                role: "Founder & Developer",
                img: "https://res.cloudinary.com/dafjjvcsh/image/upload/v1731441715/Image/jlmvmwjan0pmbydl26kh.jpg",
                link: "https://t.me/CreativeDemon",
              },
              {
                name: "Kirito",
                role: "Founder & Uploader",
                img: "https://res.cloudinary.com/dafjjvcsh/image/upload/v1731441715/Image/v6xhqmy3zugboot1k1tr.jpg",
                link: "https://t.me/Kiritokunnn",
              },
              {
                name: "Nitish",
                role: "Full Stack Developer",
                img: "https://res.cloudinary.com/dafjjvcsh/image/upload/v1731441716/Image/ntgeglfnfbl1we5xecjh.jpg",
                link: "https://t.me/Ram_bhakt_12",
              },
            ].map((member) => (
              <Link href={member.link} key={member.name} passHref>
                <div className="team-member">
                  <img
                    src={member.img}
                    alt={`${member.name} - ${member.role}`}
                    width={100}
                    height={100}
                  />
                  <h3>{member.name}</h3>
                  <p className="text-gray-500">{member.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}
