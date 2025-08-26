"use client";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Modal from "@/components/modal/Modal";
import ChooseAccount from "@/components/modal/ChooseAccount";
import SignIn from "@/components/modal/SignIn";
import SignUp from "@/components/modal/SignUp";
import { useState } from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const openChooseAccount = (nextAction: "signin" | "signup") => {
    setIsModalOpen(true);
    setModalContent(
      <ChooseAccount
        onSelectRole={(role, action) => handleRoleSelection(role, action)}
        nextAction={nextAction}
      />
    );
  };

  const handleRoleSelection = (
    role: string,
    nextAction: "signin" | "signup"
  ) => {
    if (nextAction === "signin") {
      setModalContent(<SignIn onSignUp={openSignUp} onClose={closeModal} />);
    } else {
      setModalContent(<SignUp onSignIn={openSignIn} onClose={closeModal} />);
    }
  };

  const openSignIn = () => {
    setModalContent(<SignIn onSignUp={openSignUp} onClose={closeModal} />);
    setIsModalOpen(true);
  };

  const openSignUp = () => {
    setModalContent(<SignUp onSignIn={openSignIn} onClose={closeModal} />);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <>
      <Header
        onLoginClick={() => openChooseAccount("signin")}
        onSignUpClick={() => openChooseAccount("signup")}
      />
      <main>{children}</main>
      <Footer />

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {modalContent}
      </Modal>
    </>
  );
}
