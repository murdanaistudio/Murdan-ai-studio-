
"use client";

import { useState } from "react";

const menus = [
  "Dashboard",
  "AI Image",
  "AI Video",
  "Gemini AI",
  "My Creations",
  "Settings",
];

export default function Home() {
  const [active, setActive] = useState("Dashboard");
  const [prompt, setPrompt] = useState("");

  return (
    <main className="container">
      <aside className="sidebar">
        <div className="logo">Murdan AI Studio</div>

        <nav className="nav">
          {menus.map((menu) => (
            <button
              key={menu}
              className={active === menu ? "active" : ""}
              onClick={() => setActive(menu)}
            >
              {menu}
            </button>
          ))}
        </nav>
      </aside>

      <section className="content">
        {active === "Dashboard" ? (
          <>
            <header className="header">
              <h1>Welcome to Murdan AI Studio</h1>
              <p className="muted">
                Your creative space powered by artificial intelligence.
              </p>
            </header>

            <div className="panel">
              <h2>Quick Create</h2>
              <p className="muted">
                Describe what you want to create.
              </p>

              <textarea
                value={prompt}
                onChange={(event) => setPrompt(event.target.value)}
                placeholder="Write your creative idea here..."
              />

              <button
                className="primary"
                onClick={() => {
                  if (prompt.trim()) setActive("AI Image");
                }}
              >
                Continue
              </button>
            </div>

            <h2 style={{ marginBottom: 18 }}>AI Tools</h2>

            <div className="cards">
              <div className="card">
                <h3>AI Image Generator</h3>
                <p className="muted">
                  Create images from text descriptions.
                </p>
              </div>

              <div className="card">
                <h3>AI Video Generator</h3>
                <p className="muted">
                  Explore AI video creation.
                </p>
              </div>

              <div className="card">
                <h3>Gemini AI</h3>
                <p className="muted">
                  Your AI assistant workspace.
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="panel">
            <h1>{active}</h1>
            <p className="muted">
              Workspace ini siap untuk integrasi API.
              Fitur AI belum dihubungkan.
            </p>

            <button
              className="primary"
              onClick={() => setActive("Dashboard")}
            >
              Kembali ke Dashboard
            </button>
          </div>
        )}
      </section>
    </main>
  );
      }
      
