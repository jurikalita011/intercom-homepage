import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

import styles from "../css/HelpDesk.module.css";
import styless from "../css/MessengerHeading.module.css";
export const MessengerHeading = () => {
  return (
    <Box className={styless.cont}>
      <Box w={"60%"} m={"auto"}>
        <Button className={styless.btn}>MESSENGER AND OMNICHANNEL</Button>
        <Text className={styles.txt}>
          Deliver conversational support where it works best for your customers
        </Text>
        <Text className={styles.txt1}>
          Our messenger supports customers when it's most effective—the moment
          they need help in your product. And with email, SMS, and more, they
          can also pick whatever channel works best.
        </Text>
        <Text className={styles.txt2}>
          Learn more about messenger and omnichanne
        </Text>
      </Box>
    </Box>
  );
};
