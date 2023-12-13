import React from "react";
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";

import { FaQuestionCircle } from "react-icons/fa";
import styles from "../css/Modal/FaqModal.module.css";
import { FaChevronCircleDown } from "react-icons/fa";

import MainRoutes from "../AllRoutes/MainRoutes";

export const FaqModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = React.useState("inside");

  const btnRef = React.useRef(null);
  return (
    <>
      <Box position="fixed" bottom="20" right="40" zIndex="2000">
        {!isOpen ? (
          <Button onClick={onOpen} className={styles.faqBtn}>
            <FaQuestionCircle color="white" size={100} />
          </Button>
        ) : (
          <Button onClick={onClose} className={styles.faqBtn}>
            <FaChevronCircleDown color="white" size={100} />
          </Button>
        )}
      </Box>

      <Modal
        className={styles.modalCont}
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={scrollBehavior}
      >
        <Box
          position="fixed"
          top="40"
          left="1100"
          transform="translateY(-50%)"
          isCentered={"false"}
          zIndex="1100"
          isRight
        >
          <ModalOverlay />
          <ModalContent>
            <ModalBody>
              <MainRoutes />
            </ModalBody>
          </ModalContent>
        </Box>
      </Modal>
    </>
  );
};
