"use client";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Modal from "@/components/modal/Modal";
import ChooseAccount from "@/components/modal/ChooseAccount";
import SignIn from "@/components/modal/SignIn";
import SignUp from "@/components/modal/SignUp";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  useEffect(() => {
    const modalParam = searchParams.get("modal");
    if (modalParam) {
      setIsModalOpen(true);
      switch (modalParam) {
        case "chooseaccount":
          setModalContent(<ChooseAccount onSignIn={openSignIn} />);
          break;
        case "signin":
          setModalContent(
            <SignIn onSignUp={openSignUp} onClose={closeModal} />
          );
          break;
        case "signup":
          setModalContent(
            <SignUp onSignIn={openSignIn} onClose={closeModal} />
          );
          break;
        default:
          setModalContent(null);
          setIsModalOpen(false);
      }
    } else {
      setIsModalOpen(false);
      setModalContent(null);
    }
  }, [searchParams]);

  const openChooseAccount = () => {
    setIsModalOpen(true);
    setModalContent(<ChooseAccount onSignIn={openSignIn} />);
    router.push("/home?modal=chooseaccount");
  };

  const openSignIn = () => {
    setModalContent(<SignIn onSignUp={openSignUp} onClose={closeModal} />);
    router.push("/home?modal=signin");
  };

  const openSignUp = () => {
    setModalContent(<SignUp onSignIn={openSignIn} onClose={closeModal} />);
    router.push("/home?modal=signup");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
    router.push("/home");
  };

  return (
    <>
      <Header
        onLoginClick={openChooseAccount}
        onSignUpClick={openChooseAccount}
      />
      <main>{children}</main>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {modalContent}
      </Modal>
    </>
  );
}
