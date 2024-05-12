import { Container, VStack, Heading, Text, Button, Image, Link } from "@chakra-ui/react";
import { FaDownload } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" padding={4}>
      <VStack spacing={5} alignItems="center">
        <Image src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGFwcCUyMGRlc2lnbnxlbnwwfHx8fDE3MTU0ODA5NTh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="EverythingMash App" boxSize="150px" objectFit="cover" borderRadius="full" />
        <Heading as="h1" size="xl">
          EverythingMash
        </Heading>
        <Text textAlign="center" fontSize="lg">
          Discover the fun of mashing everything! From animals to objects, create hilarious and unexpected combinations with just a tap.
        </Text>
        <Button rightIcon={<FaDownload />} colorScheme="teal" variant="solid">
          <Link href="https://play.google.com/store/apps/details?id=com.everythingmash" isExternal>
            Download Now
          </Link>
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
