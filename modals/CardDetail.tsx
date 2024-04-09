import AppBar from "@/components/AppBar";
import Carrousel from "@/components/Carrousel";
import Navbar from "@/components/NavBar";
import Review from "@/components/Review";
import { Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

interface Brewery {
  id: string;
  name: string;
  phone: string;
  street: string;
}

interface CardDetailProps {
  onClose: () => void;
  brewery: Brewery;
}

const CardDetail: React.FC<CardDetailProps> = ({ onClose, brewery }) => {
  const [isClosed, setIsClosed] = useState(false);

  const handleClose = () => {
    setIsClosed(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-bgPrimary z-30 h-full">
      <div className="absolute top-0 left-0 w-full">
        <AppBar onClose={handleClose} isDetailOpen />
      </div>
      <motion.div
        style={{ width: "100vh", height: "85vh", overflowY: "auto" }}
        initial={{ x: "100%", opacity: 0 }}
        animate={isClosed ? { x: "100%", opacity: 0 } : { x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-4 ml-2">
          <Text color="white" fontSize="3xl" fontWeight={700} lineHeight="24px">
            {brewery.name}
          </Text>
        </div>
        <div className="flex flex-col ml-2 text-white mt-4">
          <div className="flex">
            <Image
              src="/location.svg"
              width={20}
              height={20}
              alt="location"
              className="rounded-[100%] w-6 h-6"
            />
            <Text className="ml-2">{brewery.street}</Text>
          </div>
          <div className="flex mt-2">
            <Image
              src="/phone.svg"
              width={20}
              height={20}
              alt="phone"
              className="rounded-[100%] w-5 h-5 ml-1"
            />
            <Text className="ml-2">{brewery.phone}</Text>
          </div>
        </div>
        <Carrousel />
        <div className="ml-2 mt-4">
          <Text color="white" fontSize="2xl" fontWeight={600} lineHeight="35px">
            Opiniones
          </Text>
          <Review />
          <Review />
          <Review />
          <Review />
        </div>
        <div
          className="w-full gap-4 p-4 flex items-center justify-center mt-6 flex-col mb-6"
          style={{ height: "10rem", paddingBottom:"2rem" }}
        >
          <button
            className="w-full h-full rounded-xl text-white font-semibold leading-6 text-xl items-center flex justify-center"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #3540E8 0%, #E41AD6 100%)",
            }}
          >
            Reservar Mesa
          </button>
          <button
            className="w-full h-full rounded-xl text-white font-semibold leading-6 text-xl items-center flex justify-center"
            style={{
              border: "1px solid",
            borderColor: "linear-gradient(90deg, #3540E8 0%, #E41AD6 100%)",
            }}
          >
            Opciones de transporte
          </button>
        </div>
      </motion.div>
      <Navbar isDetailOpen />
    </div>
  );
};

export default CardDetail;
