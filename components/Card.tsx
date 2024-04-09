import { useState } from "react";
import { Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import CardDetail from "../modals/CardDetail";

interface Brewery {
  id: string;
  name: string;
  phone: string;
  street: string;
}

interface CardProps {
  brewery: Brewery;
}

const Card: React.FC<CardProps> = ({ brewery }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  return (
    <div className="relative bg-[#13132D] w-5/6 h-48 py-4 px-4 rounded-lg">
      <Text fontSize="lg" color="white" fontWeight={700} lineHeight="24px">
        {brewery.name}
      </Text>
      <div className="flex items-center mt-2">
        <Image
          src="/example.webp"
          width={70}
          height={70}
          alt="avatar"
          className="rounded-[100%] w-16 h-16"
        />
        <div className="flex flex-col pl-4 text-white">
          <div className="flex">
            <Image
              src="/location.svg"
              width={20}
              height={20}
              alt="avatar"
              className="rounded-[100%] w-6 h-6"
            />
            <Text className="ml-2">{brewery.street}</Text>
          </div>
          <div className="flex mt-2">
            <Image
              src="/phone.svg"
              width={20}
              height={20}
              alt="avatar"
              className="rounded-[100%] w-5 h-5 ml-1"
            />
            <Text className="ml-2">{brewery.phone}</Text>
          </div>
        </div>
      </div>
      {isExpanded && (
        <div className="fixed inset-0 flex justify-center items-center bg-bgPrimary z-30">
          <div className="absolute inset-0 overflow-auto">
            <CardDetail onClose={handleClose} brewery={brewery} />
          </div>
        </div>
      )}
      <div className="flex items-center justify-center mt-4">
        <button
          className="w-64 h-10 rounded-xl text-white font-semibold leading-6 text-xl items-center flex justify-center"
          style={{
            backgroundImage: "linear-gradient(90deg, #3540E8 0%, #E41AD6 100%)"
          }}
          onClick={handleExpand}
        >
          Ver más
        </button>
      </div>
    </div>
  );
};

export default Card;
