import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

import styles from "../css/Testimonial5.module.css";
export const Testimonial5 = () => {
  return (
    <Box bg={"#041527"}>
      <Box className={styles.main}>
        <Image src="https://images.ctfassets.net/xny2w179f4ki/3Stahl2Ya8nAJahU0l8Ilg/b1e9d48730750ba92f9cf01ba55c6ba8/Godtlevert.svg" />
        <Text className={styles.txt}>
          We have almost all of our support channels integrated into one system,
          making it easy for us to manage our support, as well as take a
          data-driven approach to continuously improving our service.
        </Text>
        <Box className={styles.infoCont}>
          <Image
            className={styles.img}
            src="https://images.ctfassets.net/xny2w179f4ki/4PvVkimgBBnBwF0lSUSC0g/6641c4bae0eb7553d270e195b8f79db7/Avatar_Oda.png?w=176&fm=webp"
          />
          <Box>
            <Text className={styles.txt2}>
              Nordic Customer Service Manager,
            </Text>
            <Text className={styles.txt3}>Godtlevert</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
