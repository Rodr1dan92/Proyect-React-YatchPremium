import { Box, Heading } from "@chakra-ui/react";
import ReactPlayer from "react-player/youtube";


const VideoSection = () => {
  return (
  <Box display={"grid"} 
  placeItems={"center"} 
  p={20}
  bgColor={"blue.300"}>
    <Heading
     size={"xl"}
        fontStyle={"oblique"}
        fontFamily={"sans-serif"}
        pb={20}
    >
      Presentamos el Nuevo Beneteau Flagship
    </Heading>

    <ReactPlayer width={950} height={500} url='https://www.youtube.com/watch?v=2NniWMR8NwY' />
  </Box>
  )
};

export default VideoSection;