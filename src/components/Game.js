import React, { useState } from "react";
import { View, ImageBackground, TouchableOpacity } from "react-native";

const Game = () => {
  const [clickedCards, setClickedCards] = useState([]);

  const handleCardClick = (index) => {
    if (!clickedCards.includes(index)) {
      setClickedCards([...clickedCards, index]);
    }
  };

  const isCardClicked = (index) => {
    return clickedCards.includes(index);
  };

  return (
    <View className="w-full h-full bg-white justify-center items-center">
      <ImageBackground
        source={require("../../assets/bg.jpg")}
        className="w-[100%] h-[100%]"
      >
        <View className="flex flex-wrap justify-center items-center w-full h-full">
          {[...Array(25)].map((_, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleCardClick(index)}
              className="w-24 h-32 m-[1px] rounded-lg"
            >
              <View
                className="w-full h-full bg-white rounded-lg flex justify-center items-center"
                style={{
                  display: isCardClicked(index) ? "none" : "flex",
                }}
              ></View>
            </TouchableOpacity>
          ))}
        </View>
      </ImageBackground>
    </View>
  );
};

export default Game;
