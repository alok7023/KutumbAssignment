import axios from "axios";

const BASE_URL = "https://assignment.stage.crafto.app";
const MEDIA_URL = "https://crafto.app/crafto/v1.0/media/assignment/upload";

// Login API
export const loginUser = async (username, otp) => {
  const response = await axios.post(`${BASE_URL}/login`, { username, otp });
  return response.data;
};

// Get Quotes API
export const getQuotes = async (token, limit, offset) => {
  const response = await axios.get(
    `${BASE_URL}/getQuotes?limit=${limit}&offset=${offset}`,
    {
      headers: { Authorization: token },
    }
  );
  return response.data;
};

// Media Upload API
export const uploadMedia = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  const response = await axios.post(MEDIA_URL, formData);
  return response.data;
};

// Create Quote API
export const createQuote = async (token, text, mediaUrl) => {
  const response = await axios.post(
    `${BASE_URL}/postQuote`,
    { text, mediaUrl },
    {
      headers: { Authorization: token, "Content-Type": "application/json" },
    }
  );
  return response.data;
};
