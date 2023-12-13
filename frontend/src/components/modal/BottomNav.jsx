import { Box, Button, Text } from "@chakra-ui/react"; // Assuming you are using Chakra UI
import { RiHomeSmile2Fill } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { HiOutlineSpeakerphone } from "react-icons/hi";

import { NavLink } from "react-router-dom";

import styles from "../../css/Modal/FaqModal.module.css";

export const BottomNav = ({
  iconColor,
  iconColor1,
  iconColor2,
  iconColor3,
}) => {
  return (
    <Box className={styles.iconBox}>
      <NavLink to={"/"}>
        <Button className={styles.iconBtn}>
          <Box>
            <RiHomeSmile2Fill size={25} color={iconColor} />
            <Text color={iconColor} fontWeight={600}>
              Home
            </Text>
          </Box>
        </Button>
      </NavLink>
      <NavLink to={"/messages"}>
        <Button className={styles.iconBtn}>
          <Box>
            <MdOutlineMessage size={25} color={iconColor1} />
            <Text color={iconColor1}>Messages</Text>
          </Box>
        </Button>
      </NavLink>
      <NavLink to={"/help"}>
        <Button className={styles.iconBtn}>
          <Box>
            <IoIosHelpCircleOutline size={25} color={iconColor2} />
            <Text color={iconColor2}>Help</Text>
          </Box>
        </Button>
      </NavLink>
      <NavLink to={"/news"}>
        <Button className={styles.iconBtn}>
          <Box>
            <HiOutlineSpeakerphone size={25} color={iconColor3} />
            <Text color={iconColor3}>News</Text>
          </Box>
        </Button>
      </NavLink>
    </Box>
  );
};
