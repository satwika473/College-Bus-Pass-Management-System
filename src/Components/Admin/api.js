const API_BASE_URL = 'http://localhost:3001/api/addbus';

export const addRoute = async (data) => {
  const response = await fetch(`${API_BASE_URL}/add-route`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Failed to add route');
  }

  return response.json();
};
