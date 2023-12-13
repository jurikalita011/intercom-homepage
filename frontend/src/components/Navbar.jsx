import React from "react";
import { Box, Image, Button } from "@chakra-ui/react";

import styles from "../css/Navbar.module.css";
import logo from "../assets/logo2.png";
export const Navbar = () => {
  return (
    <Box bg={"#041527"} position="sticky" top={0} zIndex={"1000"}>
      <Box className={styles.main}>
        <Box className={styles.cont}>
          <Box className={styles.leftCont}>
            <Image src={logo} w={"150px"} />
            <Button className={styles.leftBtn}>Products</Button>
            <Button className={styles.leftBtn}>Resources</Button>
            <Button className={styles.leftBtn}>Customers</Button>
            <Button className={styles.leftBtn}>Pricing</Button>
          </Box>
          <Box className={styles.rightCont}>
            <Button className={styles.rightBtn1}>Start free trial</Button>
            <Button className={styles.rightBtn2}>View Demo</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
