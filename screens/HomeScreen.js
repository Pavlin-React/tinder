import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import useAuth from "../hooks/useAuth";
import tw from "tailwind-rn";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {
  let navigation = useNavigation();
  let { logout, user } = useAuth();

  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 20,
        }}
      >
        <TouchableOpacity>
          <Image
            source={{ uri: user.photoURL }}
            style={tw("h-10 w-10 rounded-full")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/logo-tinder.png")}
            style={tw("w-10 h-10 rounded-full")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="chatbubbles" size={30} color="black" />
        </TouchableOpacity>
      </View>
      {/* <Text>Hello from Home Screen</Text>
      <Button
        title="Go to Chat Screen"
        onPress={() => navigation.navigate("Chat")}
      />
      <Button title="Log Out" onPress={logout} /> */}
    </SafeAreaView>
  );
};

export default HomeScreen;
