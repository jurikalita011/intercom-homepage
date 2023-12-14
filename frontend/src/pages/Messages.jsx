import React from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { FaAngleRight } from "react-icons/fa";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import styles from "../css/Modal/Messages.module.css";
import { BottomNav } from "../components/modal/BottomNav";

export const Messages = () => {
  return (
    <>
      <Box
        className={styles.cont}
        style={{
          overflowY: "scroll",
          maxHeight: "100vh",
          overflowX: "hidden",
        }}
        borderRadius={"20px 20px 0px 0px"}
      >
        <Box className={styles.topCont}>
          <Text className={styles.txtHeading}>Messages</Text>
        </Box>
        <Box className={styles.txtCont}>
          <Box display={"flex"} alignItems={"center"}>
            <Image
              className={styles.img}
              src="https://static.intercomassets.com/avatars/6730305/square_128/IMG_0326-1695129215.JPG"
            />
            <Box pl={"20px"}>
              <Text className={styles.txt1}>Hi are you still there?</Text>
              <Text className={styles.txt2}>Roisin . 2d ago</Text>
            </Box>
          </Box>
          <FaAngleRight style={{ color: "#0057FF" }} />
        </Box>
        <Button className={styles.btn}>
          <Box className={styles.txtBtn}>
            <Text className={styles.btnTxt}>Send us a message</Text>
            <PiPaperPlaneRightFill style={{ color: "white" }} size={15} />
          </Box>
        </Button>
      </Box>
      <BottomNav iconColor1="#0057FF" />
    </>
  );
};
