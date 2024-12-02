import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  Heading,
  VStack,
  Container,
  Code,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { slides } from "./slides";
import { ChevronDown } from "lucide-react";

const Slide = ({
  data,
  onScroll,
  isActive,
}: {
  data: any;
  onScroll: any;
  isActive: any;
}) => (
  <Box
    h="100vh"
    w="full"
    bg={data.bgColor}
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    position="relative"
  >
    <Container maxW="3xl" px={8}>
      <VStack gap={12}>
        {data.Visual && (
          <Box mb={8}>
            <data.Visual />
          </Box>
        )}
        <Heading
          as="h2"
          fontSize="6xl"
          color="white"
          borderLeftWidth={4}
          borderLeftColor="whiteAlpha.400"
          pl={4}
        >
          {data.title}
        </Heading>
        <Text fontSize="2xl" color="whiteAlpha.900" lineHeight="relaxed">
          {data.content}
        </Text>
      </VStack>
    </Container>
    <ChevronDown
      style={{
        position: "absolute",
        bottom: "2rem",
        color: "white",
        width: "2rem",
        height: "2rem",
        cursor: "pointer",
      }}
      onClick={onScroll}
    />
  </Box>
);

const StoryPresentation = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const newSlide = Math.floor(
        (scrollPosition + windowHeight / 2) / windowHeight
      );
      setActiveSlide(Math.min(Math.max(0, newSlide), slides.length - 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNextSlide = () => {
    const nextSlide = activeSlide + 1;
    if (nextSlide < slides.length) {
      window.scrollTo({
        top: nextSlide * window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box>
      {slides.map((slide, index) => (
        <Slide
          key={index}
          data={slide}
          onScroll={scrollToNextSlide}
          isActive={index === activeSlide}
        />
      ))}
    </Box>
  );
};

export default StoryPresentation;
