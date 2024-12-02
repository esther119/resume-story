import {
  Box,
  SimpleGrid,
  Text,
  Image,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import metaverseThumbnail from "../images/metaverse.png";

interface StoryCard {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
}

// Example story data - in a real app, this might come from an API
const stories: StoryCard[] = [
  {
    id: "profile-deduplication",
    title: "Metaverse Data Deduplication",
    description: "How we solve the duplicate data problem in the Metaverse?",
    thumbnail: metaverseThumbnail,
  },
];

const StoryCard = ({ story }: { story: StoryCard }) => {
  const navigate = useNavigate();

  return (
    <Box
      cursor="pointer"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.02)" }}
      onClick={() => navigate(`/story/${story.id}`)}
    >
      <Image
        src={story.thumbnail}
        alt={story.title}
        h="200px"
        w="full"
        objectFit="cover"
      />
      <VStack p={6} align="start" bg="gray.800">
        <Heading size="md" color="white">
          {story.title}
        </Heading>
        <Text color="gray.300">{story.description}</Text>
      </VStack>
    </Box>
  );
};

const StoryPortfolio = () => (
  <Box maxW="1200px" mx="auto" px={6} py={12}>
    <Heading mb={12} textAlign="center" color="white">
      Technical Story Portfolio
    </Heading>
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
      {stories.map((story) => (
        <StoryCard key={story.id} story={story} />
      ))}
    </SimpleGrid>
  </Box>
);

export default StoryPortfolio;
