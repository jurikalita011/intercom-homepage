import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import styles from "../css/Grid1.module.css";

export const Grid3 = () => {
  const card = [
    {
      title: "Reduce inbound volume",
      heading: "Product tours",
      para: "Keep new users inside your product—and out of your inbox—using automated, interactive onboarding.",
      img: "https://images.ctfassets.net/xny2w179f4ki/5rDNov3EKc0C5DFKZ0j1GW/45eecfa4a0178bdaf19602e01684ea59/Proactive_product-tours_tabm.png?fm=webp",
    },
    {
      title: "Increase CSAT",
      heading: "Outbound messages",
      para: "Keep support volume low by letting customers know when issues arise with the largest selection of message types.",
      img: "https://images.ctfassets.net/xny2w179f4ki/3D0DytXcTv4bTn4GNdpLXZ/bb54ac50f624cc4f260c6eeb60299eac/Proactive_banners.png?fm=webp",
    },
    {
      title: "No engineering resources needed",
      heading: "Series",
      para: "Create cohesive targeted message sequences across channels with a no-code visual builder.",
      img: "https://images.ctfassets.net/xny2w179f4ki/6vHCSdUhkyq3eagoKgjgXF/7446ab8ecda891c0c469cfac15deed63/Proactive_Series.png?fm=webp",
    },
  ];

  return (
    <Box className={styles.grids}>
      {card.map((el, index) => (
        <Box key={index}>
          <Box display={"flex"} h={"50px"}>
            <FaCheckCircle className={styles.icon2} />
            <Text className={styles.title}>{el.title}</Text>
          </Box>
          <Box className={styles.cards3}>
            <Box className={styles.txtCont}>
              <Text className={styles.heading1}>{el.heading}</Text>
              <Text className={styles.para1}>{el.para}</Text>
            </Box>
            <Image src={el.img} className={styles.img} />
          </Box>
        </Box>
      ))}
    </Box>
  );
};
