// local imports
import {
  footerLinks, socialIcons,

} from "../data";

import {
  Box,
  UnorderedList,
  Heading,
  Image,
  Flex
} from "@chakra-ui/react";
import facebook from "../assets/images/logos/facebook.png"
import youtube from "../assets/images/logos/youtube.png"
import twitter from "../assets/images/logos/twitter.png"
import instagram from "../assets/images/logos/instagram.png"
const Footer = () => {
  return (
    <Box bgGradient="linear(to-r,#566270 0%,#283444 100%)">
      <Box  px={"10"} py={"50px"}>
          <Box
            // display={"flex"}
            // justifyContent={"center"}
            // alignItems={"center"}
            // gap={90}
          >
            <Box  display={"flex"} justifyContent={"space-between"}>
              {footerLinks.map((item, index) => (
                <Box
                  key={index}
                  >
                  <Heading size={"md"} mb={10} textColor={"yellow.500"}>{item.title}</Heading>
                  <UnorderedList
                    display={"flex"}
                    margin={0}
                    >
                    {item.links.map((link, i) => (
                      <Box
                      display={"flex"}
                      mx={"auto"}
                      justifyContent={"center"}
                      key={`list-item-${i}`}
                      >
                        <li className="list-col-one">{link}</li>
                      </Box>
                    ))}
                  </UnorderedList>
                </Box>
              ))}
              {socialIcons.map((item, index) => (
                <Box
                key={index}
                >
                  <Heading size={"md"} mb={10} textColor={"yellow.500"}>{item.title}</Heading>
                  <Flex gap={7}>
                  <Image cursor={"pointer"} src={facebook}></Image>
                  <Image cursor={"pointer"} src={instagram}></Image>
                  <Image cursor={"pointer"} src={twitter}></Image>
                  <Image cursor={"pointer"} src={youtube}></Image>
                  </Flex>         
                 
                </Box>
              ))}
              </Box>
          </Box>
        </Box>
        <Box className="w-full h-[1px] bg-white my-12" />

        <Heading size={"md"} textColor={"white"} textAlign={"center"} pb={30} className="text-white text-center text-base lg:text-lg">
          &copy; Yatch Premiums - All rights reserved
        </Heading>
      </Box>
  );
};

export default Footer;
