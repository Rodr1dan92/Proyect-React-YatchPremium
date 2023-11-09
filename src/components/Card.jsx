import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
  Text,
  Image,
  UnorderedList,
} from "@chakra-ui/react";
import { products } from "../data";
const CardProd = () => {
  return (
    <>
      {products.map((prod) => {
        return (
          <Card
            bgColor={"blue.100"}
            justify={"space-around"}
            gap={5}
            alignItems={"center"}
            borderRadius={20}
          >
            <CardHeader>
              <Image
                objectFit="cover"
                w={"500px"}
                src={prod.img}
                alt="Prod_Top1"
              />
              <Heading size="md" fontSize={"3xl"} textAlign={"center"} pt={10}>
                {prod.title}
              </Heading>
            </CardHeader>
            <CardBody>
              <Text textAlign={"center"} px={18} mb={18}>
                {prod.description}
              </Text>
              <Text>
                <UnorderedList px={18} className="list-cardbody">
                  <li>{prod.li_1} Cabins</li>
                  <li>{prod.li_2} Guest</li>
                  <li>{prod.li_3} Crew</li>
                </UnorderedList>
              </Text>
            </CardBody>
            <CardFooter>
              <Button size={"sm"} colorScheme="orange">
                View more
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </>
  );
};

export default CardProd;
