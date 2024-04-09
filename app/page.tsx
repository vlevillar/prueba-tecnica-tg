'use client'
import React, { useEffect, useState } from "react";
import AppBar from "@/components/AppBar";
import HappyAlert from "@/components/HappyAlert";
import Navbar from "@/components/NavBar";
import Slider from "@/components/Slider";
import { Box, SkeletonCircle, SkeletonText, Text } from "@chakra-ui/react";
import axios from "axios";

export default function Home() {
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.openbrewerydb.org/v1/breweries?per_page=5"
        );
        setBreweries(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <AppBar />
      <HappyAlert />
      <div className="ml-4">
        <Text color="white" fontSize="32px" fontWeight={700}>
          Todas las opciones
        </Text>
        {breweries.length > 0 ? (
          <div className="flex justify-center items-center">
            <Slider breweries={breweries} />
          </div>
        ) : (
          <Box padding="6" boxShadow="lg" bg="#13132D">
            <SkeletonText mt="2" noOfLines={1} spacing="4" skeletonHeight="2" />
            <SkeletonCircle mt="2" size="16" />
            <SkeletonText mt="2" noOfLines={2} spacing="4" skeletonHeight="2" />
          </Box>
        )}
        <Text color="white" fontSize="32px" fontWeight={700}>
          Opciones en California
        </Text>
        <div className="flex justify-center items-center">
          <Slider breweries={breweries} />
        </div>
      </div>
      <Navbar />
    </div>
  );
}
