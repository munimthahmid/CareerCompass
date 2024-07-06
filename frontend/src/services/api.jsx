const API_BASE_URL = "http://localhost:8080/api";

export const fetchJobs = async () => {
  const response = await fetch(`${API_BASE_URL}/jobs`);
  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }
  return response.json();
};

export const fetchMentors = async () => {
  const response = await fetch(`${API_BASE_URL}/mentors`);
  if (!response.ok) {
    throw new Error("Failed to fetch mentors");
  }
  return response.json();
};

// Add more API service functions as needed
