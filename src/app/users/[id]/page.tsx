import UserModalClient from "./UserModalClient";
import NotFound from "@/app/not-found";

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

export default async function UserModalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await fetchUser(id);

  if (!user) {
    return <NotFound />;
  }

  return <UserModalClient user={user} />;
}

async function fetchUser(id: string) {
  try {
    const res = await fetch(`${BASE_URL}/users/${id}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Failed to fetch user");
    return res.json();
  } catch (error) {
    console.error("Error in fetchUser:", error);
    return null;
  }
}

export async function generateStaticParams() {
  const res = await fetch(`${BASE_URL}/users`);
  const users: User[] = await res.json();
  const params = users.map((user) => ({
    id: user.id,
  }));
  return params;
}
