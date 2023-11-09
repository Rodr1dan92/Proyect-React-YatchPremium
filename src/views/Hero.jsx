import { Box, Flex } from "@chakra-ui/react";
import Header from "./Header";

const Hero = () => {
  return (
    <Box
      className="Hero"
      position={"relative"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      bgPosition={"center"}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
    >
      <Header />

      <div className="home_overlay">
        <div className="home_rectangle">
          <Flex px={30} py={50} flexDir={"column"}>
            <span className="title1">Your Life.</span>
            <span className="title2">Spent wisely.</span>
          </Flex>
          <span
            style={{
              fontSize: "1.8rem",
              color: "white",
              paddingBottom: "5rem",
              paddingLeft: "5rem",
            }}
          >
            Yatchs for sale
          </span>
        </div>
      </div>
    </Box>
  );
};

export default Hero;
