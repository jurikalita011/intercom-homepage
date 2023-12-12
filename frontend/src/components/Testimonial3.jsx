import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

import styles from "../css/Testimonial1.module.css";
export const Testimonial3 = () => {
  return (
    <Box className={styles.main}>
      <Image src="https://images.ctfassets.net/xny2w179f4ki/3CE7Z8zEIOYzJ7kYh1YBsc/5f1364ae1e5672ac456bf388339459c6/TrueCommerce.svg" />
      <Text className={styles.txt}>
        Self-service and proactive support have helped us{" "}
        <Box as="span" fontWeight={700}>
          reduce inbound conversation volume by 20%
        </Box>{" "}
        over the past two years, even as our user base has continued to grow.
      </Text>
      <Box className={styles.infoCont}>
        <Image
          className={styles.img}
          src="https://images.ctfassets.net/xny2w179f4ki/43AnBUAujlUufk6s0PQEwP/58d84901cc05d1b55c3e6ce1481df07a/Avatar_Christian.png?w=176&fm=webp"
        />
        <Box>
          <Text className={styles.txt2}>Christian Parker</Text>
          <Text className={styles.txt3}>
            Director of Managed Services, TrueCommerce
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
