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
import marketingThumbnail from "../images/marketing.png";

interface StoryCard {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  slides: Array<{
    title: string;
    content: string;
    bgColor: string;
  }>;
}

const stories1: StoryCard[] = [
  {
    id: "profile-deduplication",
    title: "Metaverse Data Deduplication",
    description: "How we solve the duplicate data problem in the Metaverse?",
    thumbnail: metaverseThumbnail,
    slides: [
      {
        title: "THE STAKES",
        content:
          "In the Metaverse, your identity is everything. But we had millions of fragmented digital souls - copies of the same person scattered across our virtual world.",
        bgColor: "blue.900",
      },
      {
        title: "THE PRESSURE",
        content:
          "Storage costs bleeding millions. Users losing their virtual assets. And there I was, three months into my role, tasked with solving it.",
        bgColor: "red.900",
      },
      {
        title: "THE CHALLENGE",
        content:
          "Imagine finding identical twins in a city of millions. Now imagine those twins wearing slightly different clothes. That was our duplicate profile problem.",
        bgColor: "purple.900",
      },
      {
        title: "THE BREAKTHROUGH",
        content:
          "2 AM, Wednesday. Energy drinks scattered around my desk. That's when it hit me - instead of comparing everyone to everyone, what if we first grouped similar profiles together?",
        bgColor: "green.900",
      },
      {
        title: "THE SOLUTION",
        content:
          "The Levenshtein algorithm became our digital DNA matcher. Combined with smart subsampling, we turned months of processing into hours.",
        bgColor: "yellow.900",
      },
      {
        title: "THE IMPACT",
        content:
          "Today, that late-night solution processes millions of profiles daily. But more importantly, it taught me this: sometimes the biggest technical challenges aren't about knowing everything - they're about being brave enough to try something new.",
        bgColor: "indigo.900",
      },
    ],
  },
];

const stories2: StoryCard[] = [
  // ... existing profile-deduplication story ...
  {
    id: "marketing-attribution",
    title: "Marketing Attribution Engine",
    description: "Building a real-time customer journey analyzer",
    thumbnail: marketingThumbnail, // You'll need to import this image
    slides: [
      {
        title: "THE PROBLEM",
        content:
          "Marketing spent millions on campaigns across 12 platforms. But we couldn't tell which channels truly drove conversions. Traditional last-click attribution was lying to us.",
        bgColor: "teal.900",
      },
      {
        title: "THE COMPLEXITY",
        content:
          "A single customer touched 6-8 marketing touchpoints before converting. With 100,000 daily active users, we were drowning in a sea of interconnected customer journeys.",
        bgColor: "orange.900",
      },
      {
        title: "THE APPROACH",
        content:
          "We needed to think like data detectives. Every click, every view, every interaction became a clue in a customer's conversion story. The solution? A real-time event processing pipeline.",
        bgColor: "cyan.900",
      },
      {
        title: "THE IMPLEMENTATION",
        content:
          "Built a distributed system using Apache Kafka and Spark Streaming. Each customer interaction triggered an event, feeding into our machine learning model that weighted touchpoint importance.",
        bgColor: "pink.900",
      },
      {
        title: "THE REVELATION",
        content:
          "Our biggest surprise? Email, our 'boring' channel, was secretly nurturing 40% of our high-value conversions. Social media, our expensive darling, was mostly reinforcing existing decisions.",
        bgColor: "purple.900",
      },
      {
        title: "THE OUTCOME",
        content:
          "Reallocated $2M in marketing spend based on true attribution. ROI jumped 47% in Q3. But the real win? Finally giving our marketers the clarity they needed to make data-driven decisions.",
        bgColor: "green.900",
      },
    ],
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
      onClick={() =>
        navigate(`/story/${story.id}`, {
          state: { slides: story.slides },
        })
      }
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
      {stories2.map((story) => (
        <StoryCard key={story.id} story={story} />
      ))}
    </SimpleGrid>
  </Box>
);

export default StoryPortfolio;
