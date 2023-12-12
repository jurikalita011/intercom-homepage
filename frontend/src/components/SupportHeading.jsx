import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

import styles from "../css/HelpDesk.module.css";
import styless from "../css/SupportHeading.module.css";
export const SupportHeading = () => {
  return (
    <Box className={styless.cont}>
      <Box w={"60%"} m={"auto"}>
        <Button className={styless.btn}>PROACTIVE SUPPORT</Button>
        <Text className={styles.txt}>
          Give customers the support they need, before they need it
        </Text>
        <Text className={styles.txt1}>
          Onboard, educate, and notify your customers with in-context, automated
          messages—cutting support volume and keeping customers happy.
        </Text>
        <Text className={styles.txt2}>Learn more about proactive support</Text>
      </Box>
    </Box>
  );
};
