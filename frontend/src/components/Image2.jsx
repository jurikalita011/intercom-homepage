import React from "react";
import { Box, Image } from "@chakra-ui/react";

import styles from "../css/Image1.module.css";
export const Image2 = () => {
  return (
    <Box marginBottom={"35px"}>
      <Image
        className={styles.cont}
        src="https://images.ctfassets.net/xny2w179f4ki/uu0jmMNUUunVSwu5tmnOq/2a90fe4865a53ff619d18895340511ca/1-Automation_Hero-51523.png?w=1240&fit=thumb&fm=webp"
      />
    </Box>
  );
};
