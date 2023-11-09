
import { Flex, Image, UnorderedList } from "@chakra-ui/react";
import NavLink from "../components/NavLink";
import logo from "../assets/images/logo_white_large.png";
import cartIcon from "../assets/images/cart-icon.svg";


function Header() {
  return (
    <Flex
      justifyContent={"space-between"}
      w={"100%"}
      top={0}
      zIndex={5}
      gap={40}
      py={"10"}
      px={30}
      pr={150}
      mx={"0"}
    >
      <Image cursor={"pointer"} src={logo} w={24} alt="" />
      <UnorderedList
        position={"relative"}
        float={"right"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-around"}
        gap={"68"}
      >
        <NavLink to="services">Services</NavLink>
        <NavLink to="gallery">Photos</NavLink>
        <NavLink to="categories">Categories</NavLink>
        <NavLink to="products">Yatch</NavLink>
        <NavLink to="video">More</NavLink>
      </UnorderedList>
      <Image cursor={"pointer"} src={cartIcon} className="cart-icon" alt="cartIcon" />
    </Flex>
  );
}

export default Header;

