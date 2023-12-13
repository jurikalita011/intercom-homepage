import { Box, Button, Text } from "@chakra-ui/react"; // Assuming you are using Chakra UI
import { RiHomeSmile2Fill } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { HiOutlineSpeakerphone } from "react-icons/hi";

import styles from "../../css/Modal/FaqModal.module.css";

export const BottomNav = ({ iconColor }) => {
  return (
    <Box className={styles.iconBox}>
      <Button className={styles.iconBtn}>
        <Box>
          <RiHomeSmile2Fill size={25} color={iconColor} />
          <Text color={iconColor} fontWeight={600}>
            Home
          </Text>
        </Box>
      </Button>
      <Button className={styles.iconBtn}>
        <Box>
          <MdOutlineMessage size={25} />
          <Text>Messages</Text>
        </Box>
      </Button>
      <Button className={styles.iconBtn}>
        <Box>
          <IoIosHelpCircleOutline size={25} />
          <Text>Help</Text>
        </Box>
      </Button>
      <Button className={styles.iconBtn}>
        <Box>
          <HiOutlineSpeakerphone size={25} />
          <Text>News</Text>
        </Box>
      </Button>
    </Box>
  );
};
