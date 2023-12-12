import React from "react";
import { Box } from "@chakra-ui/react";

import styles from "../css/Vid1.module.css";

export const Vid1 = () => {
  return (
    <Box className={styles.cont}>
      <Box className={styles.vidCont}>
        <video controls muted>
          <source
            src="https://videos.ctfassets.net/xny2w179f4ki/3qp0qLfCQJWYrL4jN44VVm/ece9ffe7b105f763a9b5d12ab16f603c/Homepage_hero_video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </Box>
    </Box>
  );
};
