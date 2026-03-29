import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface User {
  id: number;
  name: string;
  email: string;
}

export function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded shadow-sm hover:bg-gray-50">
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600 mb-4">{user.email}</p>
            <Link 
              to={`/user/${user.id}`} 
              className="text-blue-500 hover:underline font-medium"
            >
              View Profile →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}