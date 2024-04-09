"use client";
import { ArrowBackIcon, BellIcon, HamburgerIcon } from "@chakra-ui/icons";
import Image from "next/image";

interface AppBarProps {
  onClose?: () => void;
  isDetailOpen?: boolean;
}

const AppBar: React.FC<AppBarProps> = ({ onClose, isDetailOpen }) => {
  return (
    <div className="bg-bgPrimary flex justify-between p-4">
      {isDetailOpen ? (
        <ArrowBackIcon w={7} h={7} color={"white"} onClick={onClose} />
      ) : (
        <HamburgerIcon w={7} h={7} color={"white"} />
      )}
      <div className="flex gap-4">
        <BellIcon w={7} h={7} color={"white"} />
        <Image width={28} height={28} src="/person.svg" alt="personIco" />
      </div>
    </div>
  );
};

export default AppBar;
