import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const HomepageNavbar = () => {
  return (
    <View className="bg-[#333A2F] w-full p-[16px] mt-[36px] flex flex-row justify-between items-center">
      <View className="flex-[0.9] flex-row items-center justify-center border-[1px] border-white px-[12px] rounded-[10px]">
        <FontAwesome name="search" size={24} color="#ECEFEB" />
        <TextInput
          className="flex-1 rounded-[8px] px-[12px] py-[5px] text-white"
          placeholder="Search..."
          placeholderTextColor="#888"
        />
      </View>
      <TouchableOpacity>
        <Text className="bg-[#697861] px-[12px] py-[8px] rounded-[20px] text-white">
          Search
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomepageNavbar;
