import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import styles from "../css/Grid1.module.css";

export const Grid1 = () => {
  const card = [
    {
      title: "AI-enhanced",
      heading: "Maximize productivity with the fastest shared inbox",
      para: "Our shared inbox is AI-enhanced and designed for speed and efficiency—so your team can work smarter and collaborate faster.",
      img: "https://images.ctfassets.net/xny2w179f4ki/3FTxMGNF5ZpGo9jXOuOOkw/9cb9494f992ff41aa259f247ce2ad280/Inbox_AI_assist.png?fm=webp",
    },
    {
      title: "Omnichannel",
      heading: "Better tickets for your team and your customers",
      para: "Resolve complex issues quickly with tickets optimized for team collaboration and real-time customer updates.",
      img: "https://images.ctfassets.net/xny2w179f4ki/2xY69NMSGQdEpJb1343QKP/87634129f7425e86055b53176d619aee/Inbox_Ticketing_tabm.png?fm=webp",
    },
    {
      title: "Designed for efficiency",
      heading: "Help your customers help themselves",
      para: "Connect your help center across the whole platform—so your customers can find the most accurate answers when and where they need them.",
      img: "https://images.ctfassets.net/xny2w179f4ki/5vo0SmYlCZBwR2tFrr689D/56490a8b72d1b44293e582967081107b/Help_Desk_help-center.png?fm=webp",
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
          <Box className={styles.cards}>
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
