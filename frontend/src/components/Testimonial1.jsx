import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

import styles from "../css/Testimonial1.module.css";
export const Testimonial1 = () => {
  return (
    <Box className={styles.main}>
      <Image src="https://images.ctfassets.net/xny2w179f4ki/2xUzzQQsF8l9BTt6WbOc08/32d50a786b2de379139719fe1e946098/Wolt.svg" />
      <Text className={styles.txt}>
        "The thing I noticed most about the inbox is the speed. In a test, we
        saw a{" "}
        <Box as="span" fontWeight={700}>
          15% increase in the number of conversations handled.
        </Box>
        "
      </Text>
      <Box className={styles.infoCont}>
        <Image
          className={styles.img}
          src="https://images.ctfassets.net/xny2w179f4ki/7kZTr8se1QPFB14alEIiZl/b707a306318133c34d50cd63d76e0c98/Avatar_Pelle.png?w=176&fm=webp"
        />
        <Box>
          <Text className={styles.txt2}>Pelle Blarke</Text>
          <Text className={styles.txt3}>
            International Strategy and Operations Manager, Wolt
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
