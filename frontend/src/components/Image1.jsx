import React from "react";
import { Box, Image } from "@chakra-ui/react";

import styles from "../css/Image1.module.css";
export const Image1 = () => {
  return (
    <Box marginBottom={"35px"}>
      <Image
        className={styles.cont}
        src="https://images.ctfassets.net/xny2w179f4ki/4DMKKtMccL6eSYiGMN0YNe/e53214c3adedddc9e184cf02cdbc7b96/Header-Inbox__0-00-00-00_.png?w=1240&fit=thumb&fm=webp"
      />
    </Box>
  );
};
