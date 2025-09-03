"use client";

import Modal from "@/components/modal/Modal";
import { useRouter } from "next/navigation";

type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  city: string;
  createdAt: string;
};

export default function UserModalClient({ user }: { user: User }) {
  const router = useRouter();

  return (
    <Modal isOpen={true} onClose={() => router.back()}>
      <div className="space-y-4">
        <h1 className="text-xl font-bold">
          {user.firstName} {user.lastName}
        </h1>
        <p>Email: {user.email}</p>
        <p>Gender: {user.gender}</p>
        <p>City: {user.city}</p>
        <p className="text-xs text-gray-500">
          Created: {new Date(user.createdAt).toLocaleDateString()}
        </p>
      </div>
    </Modal>
  );
}
