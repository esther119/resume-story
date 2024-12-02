import { Box, Button, Heading, Text, Textarea, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const ExperienceInput: React.FC = () => {
  const [experience, setExperience] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the experience submission here
    console.log("Submitted experience:", experience);
  };

  return (
    <Box maxW="800px" mx="auto" p={8} fontFamily="body">
      <Heading as="h2" color="gray.700" mb={6} fontSize="1.8rem">
        Professional Experience
      </Heading>

      <form onSubmit={handleSubmit}>
        <VStack gap={6} align="stretch">
          <Box>
            <Text
              as="label"
              fontSize="1rem"
              color="gray.600"
              mb={2}
              display="block"
            >
              Share your professional journey
            </Text>
            <Textarea
              id="experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              placeholder="Describe your work experience, key achievements, and responsibilities..."
              rows={6}
              maxLength={2000}
              p={4}
              borderRadius="md"
              borderColor="gray.300"
              fontSize="1rem"
              lineHeight={1.5}
              resize="vertical"
              minH="150px"
              fontFamily="inherit"
            />
            <Text fontSize="sm" color="gray.600" textAlign="right" mt={2}>
              {experience.length}/2000 characters
            </Text>
          </Box>

          <Button
            type="submit"
            disabled={!experience.trim()}
            bg={!experience.trim() ? "gray.300" : "blue.600"}
            color="white"
            px={6}
            py={3}
            borderRadius="md"
            fontSize="1rem"
            _hover={{
              bg: !experience.trim() ? "gray.300" : "blue.700",
            }}
            alignSelf="flex-start"
          >
            Save Experience
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default ExperienceInput;
