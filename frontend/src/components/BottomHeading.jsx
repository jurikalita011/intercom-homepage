import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";

import styles from "../css/BottomHeading.module.css";
export const BottomHeading = () => {
  return (
    <Box bg={"white"}>
      <Box className={styles.cont}>
        <Text className={styles.txt}>Join the future of customer service</Text>

        <Box className={styles.btnCont}>
          <Button className={styles.btn1}>Start free trial</Button>
          <Button className={styles.btn2}>View Demo</Button>
        </Box>
      </Box>
    </Box>
  );
};
