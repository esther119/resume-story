import React, { useState } from "react";

const ExperienceInput: React.FC = () => {
  const [experience, setExperience] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the experience submission here
    console.log("Submitted experience:", experience);
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2
        style={{
          color: "#333",
          marginBottom: "1.5rem",
          fontSize: "1.8rem",
        }}
      >
        Professional Experience
      </h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <label
            htmlFor="experience"
            style={{
              fontSize: "1rem",
              color: "#555",
              marginBottom: "0.5rem",
            }}
          >
            Share your professional journey
          </label>
          <textarea
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            placeholder="Describe your work experience, key achievements, and responsibilities..."
            rows={6}
            maxLength={2000}
            style={{
              padding: "1rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "1rem",
              lineHeight: "1.5",
              resize: "vertical",
              minHeight: "150px",
              fontFamily: "inherit",
            }}
          />
          <span
            style={{
              fontSize: "0.875rem",
              color: "#666",
              textAlign: "right",
            }}
          >
            {experience.length}/2000 characters
          </span>
        </div>
        <button
          type="submit"
          disabled={!experience.trim()}
          style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: !experience.trim() ? "#ccc" : "#0066cc",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "1rem",
            cursor: !experience.trim() ? "not-allowed" : "pointer",
            transition: "background-color 0.2s",
            alignSelf: "flex-start",
          }}
        >
          Save Experience
        </button>
      </form>
    </div>
  );
};

export default ExperienceInput;
