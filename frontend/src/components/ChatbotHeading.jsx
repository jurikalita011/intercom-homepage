import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

import styles from "../css/HelpDesk.module.css";
import styless from "../css/ChatbotHeading.module.css";
export const ChatbotHeading = () => {
  return (
    <Box className={styless.cont}>
      <Box w={"55%"} m={"auto"}>
        <Button className={styless.btn}>AI CHATBOT</Button>
        <Text className={styles.txt}>
          Resolve 50% of customer questions. Instantly.
        </Text>
        <Text className={styles.txt1}>
          Fin, our breakthrough AI chatbot, uses the most sophisticated AI
          technology to deliver safe, accurate answers that resolve customer
          questions and reduce your team’s ticket volume instantly.
        </Text>
        <Text className={styles.txt2}>Learn more about Fin</Text>
      </Box>
    </Box>
  );
};
