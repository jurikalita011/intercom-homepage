import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

import styles from "../css/Testimonial1.module.css";
export const Testimonial4 = () => {
  return (
    <Box className={styles.main}>
      <Image src="https://images.ctfassets.net/xny2w179f4ki/1yqtgn83czjnBnfFMaKAMS/af97aec9acda57655791b87af9e486fe/Rebag.svg" />
      <Text className={styles.txt}>
        Intercom powers our customer communications, delivering conversions,
        customer engagement, and personalized support.{" "}
        <Box as="span" fontWeight={700}>
          The messenger is the heart of this strategy.
        </Box>
      </Text>
      <Box className={styles.infoCont}>
        <Image
          className={styles.img}
          src="https://images.ctfassets.net/xny2w179f4ki/1JJkq7OxSnPOqbmY1KAjwI/ac85fc831087f6ae33de41a214852abe/Avatar_Geronimo.png?w=176&fm=webp"
        />
        <Box>
          <Text className={styles.txt2}>Geronimo Chala</Text>
          <Text className={styles.txt3}>Chief Consumer Officer, Rebag</Text>
        </Box>
      </Box>
    </Box>
  );
};
