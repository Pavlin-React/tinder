import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, Button, SafeAreaView, TouchableOpacity, Image } from "react-native";
import useAuth from "../hooks/useAuth";
import tw from 'tailwind-rn'

const HomeScreen = () => {
  let navigation = useNavigation();
  let { logout, user } = useAuth();
  console.log(user);

  return (
    <SafeAreaView>
    <View>
      <TouchableOpacity style={tw('absolute left-5 top-3')} >
        <Image source={{uri: user.photoURL}} style={tw('h-10 w-10 rounded-full')} />
      </TouchableOpacity>
    </View>
      <Text>Hello from Home Screen</Text>
      <Button
        title="Go to Chat Screen"
        onPress={() => navigation.navigate("Chat")}
      />
      <Button title="Log Out" onPress={logout} />
    </SafeAreaView>
  );
};

export default HomeScreen;
