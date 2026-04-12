import React, { useState } from 'react';
import { sendFeedback } from '../services/api';

export function FeedbackForm() {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [responseId, setResponseId] = useState<number | null>(null);

  const submitFeedback = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const data = await sendFeedback(title, message);
      
      setResponseId(data.id);
      setIsSubmitted(true);
    } catch (err) {
      console.error("Error submitting feedback:", err);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-100 p-6 rounded-xl text-green-700 border border-green-200 text-center">
        Thank you for your feedback! Your message was saved with ID: {responseId}
      </div>
    );
  }

  return (
    <form onSubmit={submitFeedback} className="flex flex-col gap-4 bg-white p-6 rounded-xl border shadow-sm">
      <h3 className="text-lg font-bold">Give Feedback</h3>
      <input 
        type="text" placeholder="Title" value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded" required 
      />
      <textarea 
        placeholder="Write your message here..." value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-2 rounded h-24" required 
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded font-bold hover:bg-blue-700">
        Submit Feedback
      </button>
    </form>
  );
}