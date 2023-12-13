import React from "react";
import {
  Box,
  Text,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import styles from "../css/Modal/Messages.module.css";
import styless from "../css/Modal/Help.module.css";
import { BottomNav } from "../components/modal/BottomNav";
import { FaSearch } from "react-icons/fa";

export const Help = () => {
  return (
    <>
      <Box
        className={styles.cont}
        style={{
          overflowY: "scroll",
          maxHeight: "100vh",
          overflowX: "hidden",
        }}
      >
        <Box className={styless.topCont}>
          <Text className={styles.txtHeading}>Help</Text>
          <Box>
            <InputGroup w={"350px"}>
              <Input
                w={"350px"}
                ml={"26px"}
                p={"12px"}
                outline={"none"}
                borderRadius={"10PX"}
                placeholder="Search for help"
              />
              <InputRightElement width="4.5rem">
                <FaSearch color="#0057FF" size={20} />
              </InputRightElement>
            </InputGroup>
          </Box>
        </Box>
      </Box>
      <BottomNav iconColor2="#0057FF" />
    </>
  );
};
