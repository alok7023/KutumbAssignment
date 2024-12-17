import React, { useState } from "react";
import { uploadMedia, createQuote } from "../utils/api";
import "./CreateQuote.css";

function CreateQuotePage() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const token = localStorage.getItem("token");

  const handleSubmit = async () => {
    const { mediaUrl } = await uploadMedia(file);
    await createQuote(token, text, mediaUrl);
    alert("Quote Created");
  };

  return (
    <div className="loginBackground">
      <div className="quote-form-container">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="file-input"
        />
        <input
          placeholder="Quote Text"
          onChange={(e) => setText(e.target.value)}
          className="text-input"
        />
        <button onClick={handleSubmit} className="submit-btn">
          Submit
        </button>
      </div>
    </div>
  );
}

export default CreateQuotePage;
