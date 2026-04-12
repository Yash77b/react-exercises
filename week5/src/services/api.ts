// src/services/api.ts

const BASE_URL = 'https://dummyjson.com';

// 1. Login Function
export const loginUser = async (username: string, password: string) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  if (!response.ok) throw new Error("Wrong credentials!");
  return await response.json();
};

// 2. Feedback Submit Function
export const sendFeedback = async (title: string, message: string) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, body: message, userId: 1 })
  });

  if (!response.ok) throw new Error("Failed to send feedback");
  return await response.json();
};