import { View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Home");
  };

  return (
    <View className="flex-1 justify-center gap-[25px] mt-[36px] bg-[#EBEDDF] items-center">
      <TextInput
        className=" p-[20px] w-[80%] rounded-[8px] px-[12px] py-[5px] text-black bg-[#D9DED6]"
        placeholder="Email"
        placeholderTextColor="#888"
      />
      <TextInput
        className="p-5 w-4/5 rounded-lg px-3 py-2 text-black bg-[#D9DED6]"
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry={true}
      />

      <TouchableOpacity
        onPress={handlePress}
        className="bg-gray-800 py-3 px-6 rounded-lg flex items-center justify-center w-4/5"
      >
        <Text className=" text-white font-bold">Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
