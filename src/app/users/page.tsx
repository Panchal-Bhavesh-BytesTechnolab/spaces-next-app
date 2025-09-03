"use server";
import AddUser from "./_components/add/adduser";
import Link from "next/link";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  city: string;
  createdAt: string;
};

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL as string;

//api calling
async function fetchUsers() {
  try {
    const res = await fetch(`${BASE_URL}/users`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }
    return res.json();
  } catch (error) {
    console.error("Error in fetchUsers:", error);
    return [];
  }
}

//get data
export default async function UsersPage() {
  const users = await fetchUsers();

  return (
    <div className="p-6">
      <AddUser />
      <h1 className="text-2xl font-bold mb-6">All Users</h1>

      {users.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {users.map((user: User) => (
            <Link href={`/users/${user.id}`} key={user.id}>
              <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200 hover:shadow-lg transition cursor-pointer">
                <p className="text-lg font-semibold text-gray-800">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-sm text-gray-500">Email: {user.email}</p>
                <p className="text-sm text-gray-500">Gender: {user.gender}</p>
                <p className="text-sm text-gray-500">City: {user.city}</p>
                <p className="text-xs text-gray-400">
                  Created: {new Date(user.createdAt).toLocaleDateString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No users found.</p>
      )}
    </div>
  );
}
