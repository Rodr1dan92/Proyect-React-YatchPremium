import React from "react";
import { Box, SimpleGrid, Heading, Button } from "@chakra-ui/react";
import { productsBtnText } from "../data";
import CardProd from "../components/Card";

const Products = () => {
  return (
    <Box
      id="products"
      mx={"30"}
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
    >
      <Heading size="3xl" py={20} className="title-Products">
        Best Sellers
      </Heading>
      <SimpleGrid spacing={20} templateColumns="repeat(3, 1fr)">
        <CardProd />
      </SimpleGrid>
      <Button size={"md"} mt={20} mb={20} colorScheme="blue">
        {productsBtnText}
      </Button>
    </Box>
  );
};

export default Products;
