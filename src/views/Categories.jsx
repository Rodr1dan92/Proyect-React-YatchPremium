import { Tabs, TabList, Tab, TabPanel, TabPanels } from "@chakra-ui/react";
import Big from "../assets/images/category-big.jpg";
import Medium from "../assets/images/category-medium.jpg";
import Velero from "../assets/images/category-sailboat.jpg";

const Categories = () => {
  return (
    <Tabs
      id="categories"
      size="xl"
      bgColor={"#1a7abf"}
      variant="soft-rounded"
      py={20}
    >
      <TabList
        pb={"50px"}
        mx={"auto"}
        px={"10"}
        borderBottom={"1px solid #616161"}
        fontSize={18}
        display={"flex"}
        gap={60}
        justifyContent={"center"}
      >
        <Tab
          px={15}
          py={5}
          color={"black"}
          _selected={{ color: "white", bg: "blue" }}
          _hover={{ color: "white", bg: "red" }}
        >
          Bigs
        </Tab>
        <Tab
          px={15}
          py={5}
          color={"black"}
          _selected={{ color: "white", bg: "green" }}
          _hover={{ color: "white", bg: "red" }}
        >
          Mediums
        </Tab>
        <Tab
          px={15}
          py={5}
          color={"black"}
          _selected={{ color: "white", bg: "yellow" }}
          _hover={{ color: "white", bg: "red" }}
        >
          Sailboat
        </Tab>
      </TabList>
      <TabPanels
        mx={"auto"}
        px={"10"}
        py={"18"}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"space-around"}
        alignItems={"center"}
        maxW={"1200px"}
      >
        <TabPanel>
          <img src={Big} alt="big-yatch"/>
        </TabPanel>
        <TabPanel>
          <img src={Medium} alt="medium-yatch"/>
        </TabPanel>
        <TabPanel>
          <img src={Velero} alt="velero"/>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Categories;
