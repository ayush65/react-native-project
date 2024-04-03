import React from "react";
import { View, Text } from "react-native";
import HomepageNavbar from "../components/HomepageNavbar";
import Footer from "../components/Footer";
import HomepageCards from "../components/HomepageCards";

const HomepageScreen = () => {
  return (
    <View className="flex-1 bg-[#EBEDDF]">
      <HomepageNavbar />
      <HomepageCards />
      <Footer />
    </View>
  );
};

export default HomepageScreen;
