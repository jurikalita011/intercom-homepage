import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

import styles from "../css/HelpDesk.module.css";

export const HelpDesk = () => {
  return (
    <Box className={styles.cont}>
      <Box w={"55%"} m={"auto"}>
        <Button className={styles.btn}>HELP DESK</Button>
        <Text className={styles.txt}>
          Get more done faster with our AI-enhanced workspace
        </Text>
        <Text className={styles.txt1}>
          Maximize productivity with one central workspace that connects your
          inbox, tickets, and help center.
        </Text>
        <Text className={styles.txt2}>Learn more about our help desk</Text>
      </Box>
    </Box>
  );
};
