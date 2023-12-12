import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import styles from "../css/Grid1.module.css";

export const Grid2 = () => {
  const card = [
    {
      title: "Dramatically reduce your support volume",
      heading: "An AI chatbot you can trust",
      para: "Built-in safeguards ensure Fin answers questions based solely on your support content. No misleading answers. No off-topic conversations.",
      img: "https://images.ctfassets.net/xny2w179f4ki/4zZZHWCbVtxbXAMdVjq8D2/5e68796d4c007812d01e93039aa0fab9/Homepage-Automation-Fin-mobile.png?fm=webp",
    },
    {
      title: "Provides safe, trustworthy answers",
      heading: "Seamless human handoff",
      para: "Fin can triage complex problems and pass them to your human support teams without interruption—so your customers get the best possible experience.",
      img: "https://images.ctfassets.net/xny2w179f4ki/7hzMzDgt69ds2GqynppQlm/3760a9b02a628706044ba20b2e064697/Homepage-Automation-handoff.png?fm=webp",
    },
    {
      title: "Solve issues anywhere, any time, in any language (coming soon)",
      heading: "Connect it all with Workflows",
      para: "Easily build powerful, no-code automations for your customers and your teammates with Fin, other bots, triggers, conditions, and rules—all in one place.",
      img: "https://images.ctfassets.net/xny2w179f4ki/yDE4vctuSSzBrTnTSHsfQ/fe6fc60f86460aca9257974e2e5e226a/Homepage-Automation-Workflows-mobile.png?fm=webp",
    },
  ];

  return (
    <Box className={styles.grids}>
      {card.map((el, index) => (
        <Box key={index}>
          <Box display={"flex"} h={"50px"}>
            <FaCheckCircle className={styles.icon} />
            <Text className={styles.title}>{el.title}</Text>
          </Box>
          <Box className={styles.cards2}>
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
