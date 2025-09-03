"use server";
import { revalidatePath } from "next/cache";

type User = {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  city: string;
};

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL as string;

export async function addUser(userData: User) {
  const res = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  revalidatePath("/users");

  if (!res.ok) throw new Error("Failed to add user");

  return res.json();
}
