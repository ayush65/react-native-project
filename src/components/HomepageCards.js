import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const HomepageCards = () => {
  const [data, setData] = useState([]);

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Game");
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    } else {
      return text;
    }
  }

  const renderItem = ({ item }) => (
    <View className="w-[50%] p-2">
      <View className="w-[100%] bg-white rounded-lg overflow-hidden shadow-lg flex-1 justify-center items-center">
        <Image
          source={{ uri: item.image }}
          className="w-[150px] h-[150px] object-cover"
        />

        <View className="p-4">
          {/* <Text className="text-sm font-bold mb-2 truncate">{item.title}</Text> */}
          <Text className="text-sm font-bold mb-2">
            {truncateText(item.title, 30)}
          </Text>

          <Text className="text-gray-600">${item.price}</Text>
        </View>

        <TouchableOpacity
          onPress={handlePress}
          className="bg-gray-800 py-3 px-6 rounded-lg flex items-center justify-center w-4/5 mb-3"
        >
          <Text className=" text-white font-bold">Shop Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View className="flex-1 mb-[60px]">
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
};

export default HomepageCards;
