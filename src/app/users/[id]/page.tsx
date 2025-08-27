import UserModalClient from "./UserModalClient";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL as string;

async function fetchUser(id: string) {
  try {
    const res = await fetch(`${BASE_URL}/users/${id}`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch user");
    return res.json();
  } catch (error) {
    console.error("Error in fetchUser:", error);
    return null;
  }
}

export default async function UserModalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await fetchUser(id);

  if (!user) {
    return (
      <UserModalClient
        user={{
          firstName: "Not",
          lastName: "Found",
          email: "",
          gender: "",
          city: "",
          createdAt: new Date().toISOString(),
        }}
      />
    );
  }

  return <UserModalClient user={user} />;
}
