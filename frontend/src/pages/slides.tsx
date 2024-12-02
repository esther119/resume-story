import { Code2, Clock, Coffee, Zap, ChevronDown } from "lucide-react";
import { Box, Text, Code, Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const CodeSnippet = () => (
  <Code
    p={4}
    borderRadius="lg"
    bg="gray.800"
    color="green.400"
    display="block"
    whiteSpace="pre"
  >
    <Text opacity={0.5}>// Before optimization</Text>
    {`for (profile1 in profiles) {
  for (profile2 in profiles) {
    checkSimilarity(profile1, profile2)
  }
}`}
    <Text mt={4} opacity={0.5}>
      // After optimization
    </Text>
    {`const clusters = groupSimilarProfiles(profiles)
for (cluster of clusters) {
  checkSimilarityInCluster(cluster)
}`}
  </Code>
);

const DigitalClock = () => (
  <Text fontSize="6xl" fontFamily="mono" color="green.400">
    02:00 AM
  </Text>
);

const ProfileMerge = () => {
  const [merged, setMerged] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setMerged((prev) => !prev), 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Flex align="center" justify="center" gap={4}>
      <Text opacity={merged ? 0.5 : 1}>John_Smith</Text>
      <Text opacity={merged ? 0.5 : 1}>JohnSmith</Text>
      <Text fontWeight={merged ? "bold" : "normal"}>John.Smith</Text>
    </Flex>
  );
};

const SpeedCounter = () => {
  const [count, setCount] = useState(0);
  const maxCount = 20;

  useEffect(() => {
    if (count < maxCount) {
      const timer = setTimeout(() => setCount((c) => c + 1), 100);
      return () => clearTimeout(timer);
    }
  }, [count]);

  return (
    <Text fontSize="4xl" fontWeight="bold" color="white">
      {count}x Faster
    </Text>
  );
};

const IconRow = () => (
  <Flex gap={4}>
    <Box>
      <Coffee size={48} color="white" />
    </Box>
    <Box>
      <Clock size={48} color="white" />
    </Box>
    <Box>
      <Zap size={48} color="white" />
    </Box>
  </Flex>
);

export const slides = [
  {
    title: "THE STAKES",
    content:
      "In the Metaverse, your identity is everything. But we had millions of fragmented digital souls - copies of the same person scattered across our virtual world.",
    bgColor: "blue.900",
    Visual: ProfileMerge,
  },
  {
    title: "THE PRESSURE",
    content:
      "Storage costs bleeding millions. Users losing their virtual assets. And there I was, three months into my role, tasked with solving it.",
    bgColor: "red.900",
    Visual: IconRow,
  },
  {
    title: "THE CHALLENGE",
    content:
      "Imagine finding identical twins in a city of millions. Now imagine those twins wearing slightly different clothes. That was our duplicate profile problem.",
    bgColor: "purple.900",
    Visual: CodeSnippet,
  },
  {
    title: "THE BREAKTHROUGH",
    content:
      "2 AM, Wednesday. Energy drinks scattered around my desk. That's when it hit me - instead of comparing everyone to everyone, what if we first grouped similar profiles together?",
    bgColor: "green.900",
    Visual: DigitalClock,
  },
  {
    title: "THE SOLUTION",
    content:
      "The Levenshtein algorithm became our digital DNA matcher. Combined with smart subsampling, we turned months of processing into hours.",
    bgColor: "yellow.900",
    Visual: () => (
      <Box>
        <Code2 size={48} color="white" />
      </Box>
    ),
  },
  {
    title: "THE IMPACT",
    content:
      "Today, that late-night solution processes millions of profiles daily. But more importantly, it taught me this: sometimes the biggest technical challenges aren't about knowing everything - they're about being brave enough to try something new.",
    bgColor: "indigo.900",
    Visual: SpeedCounter,
  },
];
