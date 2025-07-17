'use client';

import { useState } from "react";
import { UploadDropzone } from "@bytescale/upload-widget-react";

export default function Home() {
  const [original, setOriginal] = useState(null);
  const [restored, setRestored] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleUpload = async (files) => {
    setError(null);
    const uploadedUrl = files[0].fileUrl;
    setOriginal(uploadedUrl);
    
    setLoading(true);
    console.log('uploadedUrl', uploadedUrl);

    try {
      const res = await fetch("/api/restore", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageUrl: uploadedUrl }),
      });
      console.log('res hehehehe', res);

      let data;
      try {
        data = await res.json();
        
      } catch (jsonErr) {
        setError("Failed to parse server response.");
        setLoading(false);
        return;
      }

      if (!res.ok) {
        setError(data.error || "Failed to restore image.");
        setLoading(false);
        return;
      }

      setRestored(data.restoredUrl);
    } catch (err) {
      setError("Network or server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ maxWidth: 600, margin: "0 auto", padding: 24, textAlign: "center" }}>
      <h1 style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>🧠 Face Restorer</h1>

      {!original && (
        <UploadDropzone
          options={{
            apiKey: process.env.NEXT_PUBLIC_BYTESCALE_PUBLIC_KEY,
            maxFileCount: 1,
            showFinishButton: true,
          }}
          onComplete={handleUpload}
        />
      )}

      {loading && <p style={{ marginTop: 20 }}>Restoring face...</p>}
      {error && (
        <p style={{ color: 'red', marginTop: 20 }}>{error}</p>
      )}

      {original && restored && (
        <div style={{ display: "flex", gap: 16, marginTop: 24 }}>
          <div>
            <h2 style={{ fontSize: 14 }}>Original</h2>
            <img src={original} alt="Original" style={{ width: "100%", borderRadius: 8 }} />
          </div>
          <div>
            <h2 style={{ fontSize: 14 }}>Restored</h2>
            <img src={restored} alt="Restored" style={{ width: "100%", borderRadius: 8 }} />
          </div>
        </div>
      )}
    </main>
  );
}
