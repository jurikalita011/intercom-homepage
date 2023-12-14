import React, { useEffect } from "react";
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
import { FaAngleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getHelp } from "../redux/postReducer/action";

export const Help = () => {
  const help = useSelector((store) => store.help);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHelp());
  }, []);
  return (
    <>
      <Box
        className={styles.cont}
        style={{
          overflowY: "scroll",
          maxHeight: "100vh",
          overflowX: "hidden",
        }}
        borderRadius={"20px 20px 0px 0px"}
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
        <Box>
          <Text className={styless.topHeading}>{help.length} collections</Text>
          {help?.map((el) => (
            <Box key={el._id} className={styless.hCont}>
              <hr border="1px solid #EFEBE9" />
              <Text className={styless.heading}>{el.heading}</Text>
              <Box className={styless.cont2}>
                <Box w={"80%"}>
                  <Text className={styless.content}>{el.content}</Text>
                  <Text className={styless.total}>{el.total}</Text>
                </Box>
                <FaAngleRight style={{ color: "#0057FF" }} />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <BottomNav iconColor2="#0057FF" />
    </>
  );
};
