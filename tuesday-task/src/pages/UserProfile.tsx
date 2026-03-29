import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

interface UserDetail {
  name: string;
  phone: string;
  website: string;
}

export function UserProfile() {
  const { id } = useParams(); 
  const [user, setUser] = useState<UserDetail | null>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) return <div className="p-8 text-center">Loading profile...</div>;

  return (
    <div className="p-8 max-w-md">
      <Link to="/" className="text-blue-500 hover:underline">← Back to list</Link>
      <h1 className="text-4xl font-bold mt-4">{user.name}</h1>
      <div className="mt-6 space-y-2 text-lg text-gray-700">
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> <span className="text-blue-600 underline">{user.website}</span></p>
      </div>
    </div>
  );
}