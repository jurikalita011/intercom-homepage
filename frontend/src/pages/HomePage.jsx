import React from "react";
import { Box } from "@chakra-ui/react";
import { NavTop } from "../components/NavTop";
import { NavMid } from "../components/NavMid";
import { Navbar } from "../components/Navbar";
import { TopHeading } from "../components/TopHeading";
import { Vid1 } from "../components/Vid1";
import { HelpDesk } from "../components/HelpDesk";
import { Image1 } from "../components/Image1";
import { Grid1 } from "../components/Grid1";
import { Testimonial1 } from "../components/Testimonial1";
import { ChatbotHeading } from "../components/ChatbotHeading";
import { Image2 } from "../components/Image2";
import { Grid2 } from "../components/Grid2";
import { SupportHeading } from "../components/SupportHeading";
import { Image3 } from "../components/Image3";
import { Grid3 } from "../components/Grid3";
import { Testimonial3 } from "../components/Testimonial3";
import { MessengerHeading } from "../components/MessengerHeading";
import { Image4 } from "../components/Image4";
import { Testimonial4 } from "../components/Testimonial4";
import { PlatformHeading } from "../components/PlatformHeading";
import { Testimonial5 } from "../components/Testimonial5";
import { BottomHeading } from "../components/BottomHeading";

export const HomePage = () => {
  return (
    <Box>
      <NavTop />
      <NavMid />
      <Navbar />
      <TopHeading />
      <Vid1 />
      <HelpDesk />
      <Image1 />
      <Grid1 />
      <Testimonial1 />
      <ChatbotHeading />
      <Image2 />
      <Grid2 />
      <SupportHeading />
      <Image3 />
      <Grid3 />
      <Testimonial3 />
      <MessengerHeading />
      <Image4 />
      <Testimonial4 />
      <PlatformHeading />
      <Testimonial5 />
      <BottomHeading />
    </Box>
  );
};
