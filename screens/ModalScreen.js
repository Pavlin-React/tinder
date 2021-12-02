import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import tw from "tailwind-rn";
import useAuth from "../hooks/useAuth";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs()

const ModalScreen = () => {
  let { user } = useAuth();

  return (
    <View style={tw("flex-1 pt-1 items-center")}>
      <Image
        style={tw("w-full h-20")}
        resizeMode="contain"
        source={require("../assets/Tinder-Logo.png")}
      />
      <Text style={tw("text-gray-500 p-2 text-xl font-bold")}>
        Welcome {user.displayName}
      </Text>
      <Text style={tw("text-center p-4 font-bold text-red-400")}>
        Step 1: The Profile Pic
      </Text>
      <TextInput
        placeholder='Enter a Profile Pic URL'
      />
      <Text style={tw("text-center p-4 font-bold text-red-400")}>
        Step 2: The Job
      </Text>
      <TextInput
        placeholder='Enter your occupation'
      />
      <Text style={tw("text-center p-4 font-bold text-red-400")}>
        Step 3: The Age
      </Text>
      <TextInput
        placeholder='Enter your Age'
      />
      <TouchableOpacity style={tw('w-64 p-3 absolute bottom-10 rounded-xl bg-red-400')} >
        <Text style={tw('text-center text-white text-xl')} >Update Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModalScreen;
