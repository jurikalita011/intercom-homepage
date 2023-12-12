import React from "react";
import { Box, Image } from "@chakra-ui/react";
import img from "../assets/Image5.png";
import styles from "../css/Image1.module.css";
export const Image5 = () => {
  return (
    <Box marginBottom={"35px"}>
      <Image className={styles.cont} src={img} />
    </Box>
  );
};
