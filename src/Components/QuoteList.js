import React, { useEffect, useState } from "react";
import { getQuotes } from "../utils/api";
import { useNavigate } from "react-router-dom";
import "./Quote.css";

function QuoteListPage() {
  const [quotes, setQuotes] = useState([]);
  const [offset, setOffset] = useState(0);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const fetchQuotes = async () => {
    const data = await getQuotes(token, 20, offset);
    if (data.data.length > 0) {
      setQuotes([...quotes, ...data.data]);
    }
  };
  useEffect(() => {
    fetchQuotes();
  }, [offset]);
  return (
    <div className="quote-list-container">
      <div className="quote-grid">
        {quotes.map((quote) => (
          <div className="quote-card" key={quote.id}>
            <div className="quote-image-container">
              <img src={quote.mediaUrl} alt="Quote" className="quote-image" />
              <div className="quote-text-overlay">
                <p>{quote.text}</p>
              </div>
            </div>
            <div className="quote-details">
              <p>Username: {quote.username}</p>
              <p>Created At: {new Date(quote.createdAt).toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => setOffset(offset + 20)}
        className="actionBtn loadMoreBtn"
      >
        Load More
      </button>
      <button onClick={() => navigate("/create")} className="actionBtn">
        Create Quote
      </button>
    </div>
  );
}

export default QuoteListPage;
