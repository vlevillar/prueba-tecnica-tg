import { Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

interface NavBarProps {
  isDetailOpen?: boolean;
}

const Navbar: React.FC<NavBarProps> = ({ isDetailOpen }) => {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 p-4 flex justify-around items-center"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #040210 0%, rgba(4, 2, 16, 0.5) 100%)",
      }}
    >
      <div className="w-full flex flex-col justify-center items-center">
        <Image src="./calendar.svg" alt="calendar" width={25} height={25} />
        <Text color="white">Calendario</Text>
      </div>
      {isDetailOpen ? (
        <div className="w-full flex flex-col justify-center items-center">
          <Image src="./homeWhite.svg" alt="home" width={25} height={25} />
          <Text color='white'>Inicio</Text>
        </div>
      ) : (
        <div className="w-full flex flex-col justify-center items-center">
          <Image src="./homeBlue.svg" alt="home" width={25} height={25} />
          <Text color="#3540E8">Inicio</Text>
        </div>
      )}
      <div className="w-full flex flex-col justify-center items-center">
        <Image src="./chat.svg" alt="chat" width={25} height={25} />
        <Text color="white">Chat</Text>
      </div>
    </div>
  );
};

export default Navbar;
