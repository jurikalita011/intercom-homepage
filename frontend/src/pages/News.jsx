import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import stylesss from "../css/Modal/News.module.css";
import styless from "../css/Modal/FaqModal.module.css";
import styles from "../css/Modal/Messages.module.css";
import { BottomNav } from "../components/modal/BottomNav";

export const News = () => {
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
          <Text className={styles.txtHeading}>News</Text>
        </Box>
        <Box className={stylesss.topCont}>
          <Box>
            <Text className={stylesss.txt1}>Latest from</Text>
            <Text className={stylesss.txt2}>Team Intercom</Text>
          </Box>
          <Box>
            <Image
              className={styless.img1}
              src="https://static.intercomassets.com/avatars/5523719/square_128/5523719-1665143542.jpg"
            />
            <Image
              className={styless.img1}
              src="https://static.intercomassets.com/avatars/5400877/square_128/5400877-1665143374.png"
            />
            <Image
              className={styless.img1}
              src="https://static.intercomassets.com/avatars/5108482/square_128/5108482-1665143083.jpg"
            />
          </Box>
        </Box>
      </Box>
      <BottomNav iconColor3="#0057FF" />
    </>
  );
};
