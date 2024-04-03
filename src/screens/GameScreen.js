import { View, Text } from "react-native";
import React from "react";
import Game from "../components/Game";
import Footer from "../components/Footer";

const GameScreen = () => {
  return (
    <View className="flex-1 w-full bg-[#EBEDDF] justify-center items-center">
      <Game />
      <Footer />
    </View>
  );
};

export default GameScreen;
