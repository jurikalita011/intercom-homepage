import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";

import styles from "../css/Navbar.module.css";
import styless from "../css/TopHeading.module.css";
export const TopHeading = () => {
  return (
    <Box bg={" #041527"}>
      <Box className={styless.cont}>
        <Text className={styless.txt}>
          The only AI customer service solution you need
        </Text>
        <Text className={styless.txt1}>
          The only solution that combines an AI chatbot, help desk, and
          proactive support—so you can keep costs low, support teams happy, and
          customers satisfied.
        </Text>
        <Box className={styless.btnCont}>
          <Button className={styles.rightBtn1}>Start free trial</Button>
          <Button className={styles.rightBtn2}>View Demo</Button>
        </Box>
      </Box>
    </Box>
  );
};
