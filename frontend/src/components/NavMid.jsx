import React from "react";
import { Box, Button } from "@chakra-ui/react";
import styles from "../css/NavMid.module.css";
export const NavMid = () => {
  return (
    <Box bg={"#041527"}>
      <Box className={styles.btnCont}>
        <Button className={styles.btn}>Contact Sales</Button>
        <Button className={styles.btn}>Sign In</Button>
      </Box>
    </Box>
  );
};
