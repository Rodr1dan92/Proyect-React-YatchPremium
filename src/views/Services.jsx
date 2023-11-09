// local imports
import { services } from "../data";
import { Box, Img, Text } from "@chakra-ui/react";

const Services = () => {
  return (
    <Box
      py={"100px"}
      mx={"auto"}
      px={"10"}
      display={"flex"}
      justifyContent={"center"}
      gap={"12"}
      id="services"
    >
      {services.map((service, i) => (
        <Box
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          gap={"4"}
          w={"full"}
          className=" lg:flex-row "
        >
          <Img
            key={service.id}
            src={service.icon}
            maxH={"84px"}
            maxW={"84px"}
            alt="img"
          />
          <Box display={"flex"} flexDir={"column"} gap={"1.5"}>
            <Text
              key={service.id}
              fontSize={"25"}
              textAlign={"center"}
              className="lg:text-start text-2xl lg:text-[28px] text-fontBlack font-medium"
            >
              {service.title}
            </Text>
            <Text
              key={service.id}
              textAlign={"center"}
              color={"gray"}
              className="lg:text-start text-base lg:text-lg text-fontGray font-medium"
            >
              {service.subtitle}
            </Text>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Services;
