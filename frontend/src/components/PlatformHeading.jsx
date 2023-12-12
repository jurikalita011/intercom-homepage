import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

import styles from "../css/PlatformHeading.module.css";
import { Image5 } from "./Image5";
export const PlatformHeading = () => {
  return (
    <Box bg={"#041527"}>
      <Box className={styles.cont}>
        <Box w={"60%"} m={"auto"}>
          <Button className={styles.btn}>PLATFORM</Button>
          <Text className={styles.txt}>
            A single, powerful, easy-to-use platform
          </Text>
          <Text className={styles.txt1}>
            Get all your automation, conversations, tickets, customer data, and
            reporting working together seamlessly. Maximize team performance by
            connecting all your other tools to our platform.
          </Text>
          <Text className={styles.txt2}>
            Learn more about the Intercom Platform
          </Text>
        </Box>
      </Box>
      <Image5 />
    </Box>
  );
};
