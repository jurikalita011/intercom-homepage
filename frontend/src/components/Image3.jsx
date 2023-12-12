import React from "react";
import { Box, Image } from "@chakra-ui/react";

import styles from "../css/Image1.module.css";
export const Image3 = () => {
  return (
    <Box marginBottom={"35px"}>
      <Image
        className={styles.cont}
        src="https://images.ctfassets.net/xny2w179f4ki/65ktvTJmr4rlCXvY7dIlVB/9a054fa5bec40063973f52ba1bf9e100/mvp_hero_vertical_media.png?w=1240&fit=thumb&fm=webp"
      />
    </Box>
  );
};
