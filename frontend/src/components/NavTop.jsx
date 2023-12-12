import React, { useState } from "react";
import { Box, Image, Button, Text, Flex, Spacer } from "@chakra-ui/react";
import { ImArrowRight2 } from "react-icons/im";
import { FaArrowRightLong } from "react-icons/fa6";

import styles from "../css/NavTop.module.css";
import logo from "../assets/logo.png";
export const NavTop = () => {
  const [isHovered, setHovered] = useState(false);
  return (
    <Box className={styles.container}>
      <Box w={"80%"} margin={"auto"}>
        <Flex>
          <Image src={logo} className={styles.logo} />
          <Spacer />
          <Box>
            <Text className={styles.txt1} style={{ marginBottom: "5px" }}>
              Meet Fin, a breakthrough AI bot.
            </Text>
            <Text className={styles.txt2} style={{ marginTop: "5px" }}>
              Resolve 50% of your support questions. Instantly.
            </Text>
          </Box>
          <Spacer />

          <Button
            className={styles.btn}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Learn More
            {isHovered ? (
              <FaArrowRightLong
                style={{ fontSize: "20px", paddingTop: "3px", width: "100px" }}
              />
            ) : (
              <ImArrowRight2
                style={{ fontSize: "20px", paddingTop: "3px", width: "100px" }}
              />
            )}
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};
