import { Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const Review = () => {
  return (
    <div className="h-full pt-6">
      <div className="flex justify-between items-center w-full p-4">
        <div className="flex items-center">
          <Image
            src="/avatar.webp"
            width={35}
            height={35}
            className="rounded-full"
            alt="avatar"
          />
          <Text color="white" className="pl-2" fontWeight={400} fontSize="md">
            Cris
          </Text>
        </div>
        <div>
          <Text color="#E41AD6">Responder</Text>
        </div>
      </div>
      <div className="max-w-4 pl-4 text-wrap h-6">
      <Text color='white' className="whitespace-nowrap break-words" fontWeight={400}>Me encantan este tipo de cafés! La velocidad de <br/> wifi es muy bue...</Text>
      </div>
    </div>
  );
};

export default Review;
