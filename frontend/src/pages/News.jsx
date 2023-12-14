import React, { useEffect } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import stylesss from "../css/Modal/News.module.css";
import styless from "../css/Modal/FaqModal.module.css";
import styles from "../css/Modal/Messages.module.css";
import { BottomNav } from "../components/modal/BottomNav";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../redux/postReducer/action";
import { FaAngleRight } from "react-icons/fa";

export const News = () => {
  const news = useSelector((store) => store.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
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
        <Box className={styles.topCont}>
          <Text className={styles.txtHeading}>News</Text>
        </Box>
        <Box className={stylesss.topCont}>
          <Box>
            <Text className={stylesss.txt1}>Latest from</Text>
            <Text className={stylesss.txt2}>Team Intercom</Text>
          </Box>
          <Box>
            <Image
              className={styless.img1}
              src="https://static.intercomassets.com/avatars/5523719/square_128/5523719-1665143542.jpg"
            />
            <Image
              className={styless.img1}
              src="https://static.intercomassets.com/avatars/5400877/square_128/5400877-1665143374.png"
            />
            <Image
              className={styless.img1}
              src="https://static.intercomassets.com/avatars/5108482/square_128/5108482-1665143083.jpg"
            />
          </Box>
        </Box>
        <Box className={stylesss.grid}>
          {news?.map((el) => (
            <Box key={el._id} className={stylesss.cont}>
              <Image src={el.img} alt={el.title} className={stylesss.img2} />
              <Box className={stylesss.box}>
                <Box className={stylesss.tagCont}>
                  <Text className={stylesss.tag1}>{el.tags[0]}</Text>
                  <Text className={stylesss.tag1}>{el.tags[1]}</Text>
                </Box>

                <Box className={stylesss.titleContIn}>
                  <Text className={stylesss.title}>
                    {el.title.substring(0, 65)}
                  </Text>
                </Box>
                <Box className={stylesss.titleCont}>
                  <Box w={"90%"}>
                    <Text className={stylesss.body}>
                      {el.body.substring(0, 80)}...
                    </Text>
                  </Box>
                  <FaAngleRight style={{ color: "#0057FF" }} />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <BottomNav iconColor3="#0057FF" />
    </>
  );
};
