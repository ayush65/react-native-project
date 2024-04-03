import { View } from "react-native";
import React from "react";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";

const Footer = () => {
  return (
    <View className="bg-[#333A2F] w-full p-[16px] flex flex-row justify-evenly items-center absolute bottom-0">
      <MaterialIcons name="leaderboard" size={24} color="#ECEFEB" />
      <MaterialCommunityIcons name="account" size={24} color="#ECEFEB" />
      <Ionicons name="game-controller-sharp" size={24} color="#ECEFEB" />
    </View>
  );
};

export default Footer;
