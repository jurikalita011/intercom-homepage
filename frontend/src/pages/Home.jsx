import React from "react";
import { Box, Button, Image, Text, Input } from "@chakra-ui/react";
import { FaAngleRight } from "react-icons/fa";
import styles from "../css/Modal/FaqModal.module.css";
import { BottomNav } from "../components/modal/BottomNav";

export const Home = () => {
  return (
    <>
      <Box
        className={styles.cont}
        style={{
          overflowY: "scroll",
          maxHeight: "100vh",
          overflowX: "hidden",
        }}
      >
        <Box className={styles.topCont}>
          <Image
            w={"30px"}
            src="https://downloads.intercomcdn.com/i/o/355439/a7cdd3705c65918af17f3ce0/1bb87d41d15fe27b500a4bfcde01bb0e.png"
          />

          <Box>
            <Image
              className={styles.img1}
              src="https://static.intercomassets.com/avatars/6421720/square_128/troy-1682466948.png"
            />
            <Image
              className={styles.img1}
              src="https://static.intercomassets.com/avatars/4695921/square_128/4695921-1665142933.jpeg"
            />
            <Image
              className={styles.img1}
              src="https://static.intercomassets.com/avatars/4619635/square_128/4619635-1665142899.jpg"
            />
          </Box>
        </Box>
        <Text className={styles.txt1}>Hello there.</Text>
        <Text className={styles.txt2}>How can we help?</Text>
        <Button className={styles.chatBtnBox}>
          <Box className={styles.chatBtnTxtBox}>
            <Box>
              <Text className={styles.chatBtnTxt1}>Send us a message</Text>
              <Text className={styles.chatBtnTxt2}>
                We typically reply within a day
              </Text>
            </Box>
            <FaAngleRight style={{ color: "#0057FF" }} />
          </Box>
        </Button>
        <Box className={styles.communityBox}>
          <Image
            className={styles.communityImage}
            src="https://downloads.intercomcdn.com/i/o/798705491/802ac1eb4c72711c6a270831/Join%20the%20New%20Intercom%20Community.png?resize=568x"
          />
          <hr />
          <Box className={styles.communityTextBox1}>
            <Text className={styles.chatBtnTxt1}>The Intercom Community</Text>
            <Text
              className={styles.chatBtnTxt2}
              style={{ paddingBottom: "50px" }}
            >
              Be sure to check out for the intercom community for support, plus
              tips & tricks from Intercom users and much more
            </Text>
          </Box>
        </Box>
        <Box className={styles.communityBox}>
          <Box w={"300px"} h={"50px"} margin={"auto"}>
            <Input placeholder="search for help" className={styles.searchInp} />
          </Box>
          <Button className={styles.searchBtn}>
            <Box className={styles.searchInpBox}>
              <Text>Send custom user attributes to Intercom</Text>
              <FaAngleRight style={{ color: "#0057FF" }} />
            </Box>
          </Button>
          <Button className={styles.searchBtn}>
            <Box className={styles.searchInpBox}>
              <Text>Tracking user data in Intercom</Text>
              <FaAngleRight style={{ color: "#0057FF" }} />
            </Box>
          </Button>
          <Button className={styles.searchBtn}>
            <Box className={styles.searchInpBox}>
              <Text>Customize the pre made email templates</Text>
              <FaAngleRight style={{ color: "#0057FF" }} />
            </Box>
          </Button>
          <Button className={styles.searchBtn}>
            <Box className={styles.searchInpBox}>
              <Text>Forward your email to team inbox</Text>
              <FaAngleRight style={{ color: "#0057FF" }} />
            </Box>
          </Button>
        </Box>
        <Box className={styles.communityBox}>
          <Image
            className={styles.communityImage}
            src="https://images.ctfassets.net/xny2w179f4ki/Y779AgRt5sjg2nE9NnWx7/2684a93c01ce95d546deedcc64a0e90d/HBR_Resource_LP_Thumbnail_-_393x250.png"
          />
          <hr />
          <Box className={styles.communityTextBox1}>
            <Text className={styles.chatBtnTxt1}>
              Future-Proofing Businesses with Modern Customer Engagement
            </Text>
            <Text
              className={styles.chatBtnTxt2}
              style={{ padding: "10px 0px 70px 10px" }}
            >
              Customer retention is more important than ever. See how businesses
              are building unified, efficient customer engagement strategies
              that protect their bottom line
            </Text>
          </Box>
        </Box>
      </Box>
      <BottomNav iconColor="#0057FF" />
    </>
  );
};
