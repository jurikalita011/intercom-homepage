import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";

import styles from "../css/Testimonial1.module.css";
export const Testimonial2 = () => {
  return (
    <Box className={styles.main}>
      <Image src="https://images.ctfassets.net/xny2w179f4ki/6Ywh4OBTPAKofZpj95HF0F/b804afdef555c5a55dd7573ffa4bf6c3/Linktree-Logo-Black_small_2.png?fm=webp" />
      <Text className={styles.txt}>
        <Box as="span" fontWeight={700}>
          Within six days, Fin is successfully resolving 42% of conversations.
        </Box>{" "}
        It’s truly surpassed my expectations.
      </Text>
      <Box className={styles.infoCont}>
        <Image
          className={styles.img}
          src="https://images.ctfassets.net/xny2w179f4ki/5h4QuSmxg2FdWky9gPGxJm/95c7aed9696a61b5bcb5da880cb6871a/Linktree_-_Dane_Burgess.png?w=176&fm=webp"
        />
        <Box>
          <Text className={styles.txt2}>Dane Burgess</Text>
          <Text className={styles.txt3}>
            Customer Support Director, Linktree
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
