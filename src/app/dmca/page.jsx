"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function DMCA() {
  return (
    <>
    <Navbar />
    <div className="main">
          <header className="header">
              <h1>DMCA Notice</h1>
          </header>
          <section className="section">
              <h2>Copyright Policy</h2>
              <p>
                  We take copyright infringement seriously. If you believe that your
                  copyrighted material has been uploaded or shared on our website
                  without permission, please contact us immediately.
              </p>

              <h3>How to File a DMCA Takedown Notice:</h3>
              <ol>
                  <li>
                      Provide a description of the copyrighted work you believe is being
                      infringed.
                  </li>
                  <li>Include the URL(s) where the infringing content is located.</li>
                  <li>
                      Submit your DMCA takedown notice to{" "}
                      <strong>animemanji80@gmail.com</strong>.
                  </li>
              </ol>

              <h3>DMCA Counter-Notice:</h3>
              <p>
                  If you believe that content was removed by mistake or
                  misidentification, you may file a DMCA counter-notice.
              </p>
              <p>
                  For any further assistance, please contact us at{" "}
                  <strong>promail608@gmail.com</strong>.
              </p>

              <p>
                  If you have any questions, feel free to reach out to us using the link
                  below:
              </p>
              <Link href="mailto:animemanji80@gmail.com" className="btn">
                  Contact Us
              </Link>
          </section>
          <Footer />
          <style jsx>{`
        :root {
          --bg-color: #121212;
          --primary-color: #ffffff;
          --secondary-color: #333333;
          --text-color: #e0e0e0;
          --muted-text-color: #9852ff;
          --button-color: #9852ff;
          --button-hover-color: #7a3ccd;
          --shadow-color: rgba(0, 0, 0, 0.5);
        }

        .main {
          font-family: Roboto, sans-serif;
          background-color: var(--bg-color);
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }

        .header {
          text-align: center;
          background: linear-gradient(135deg, var(--primary-color), var(--button-color));
          padding: 40px;
          box-shadow: 0 6px 12px var(--shadow-color);
        }

        .header h1 {
          font-size: 3em;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--primary-color);
        }

        .section {
          background-color: var(--secondary-color);
          color: var(--text-color);
          padding: 40px;
          margin: 20px auto;
          border-radius: 8px;
          max-width: 800px;
          box-shadow: 0 4px 10px var(--shadow-color);
        }

        .section h2 {
          font-size: 2.5em;
          margin-bottom: 20px;
          color: var(--primary-color);
        }

        .section p {
          font-size: 1.2em;
          line-height: 1.8;
        }

        .section ol {
          margin-left: 40px;
          font-size: 1.2em;
        }

        .section li {
          margin-bottom: 10px;
        }

        .section h3 {
          font-size: 1.6em;
          margin-top: 30px;
          color: var(--muted-text-color);
        }

        .btn {
          background-color: var(--button-color);
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.3s;
          display: inline-block;
          color: var(--text-color);
          text-align: center;
        }

        .btn:hover {
          background-color: var(--button-hover-color);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .header h1 {
            font-size: 2.5em;
          }

          .section {
            margin: 15px;
            padding: 25px;
          }

          .section h2 {
            font-size: 2em;
          }

          .section ol,
          .section p {
            font-size: 1.1em;
          }
        }

        @media (max-width: 480px) {
          .header h1 {
            font-size: 2em;
          }

          .section {
            padding: 20px;
          }

          .section h2 {
            font-size: 1.8em;
          }

          .section p,
          .section ol {
            font-size: 1em;
          }
        }
      `}</style>
      </div></>
  );
}
