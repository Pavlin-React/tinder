import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  View,
  Text,
  Button,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import useAuth from "../hooks/useAuth";
import tw from "tailwind-rn";

const LoginScreen = () => {
  let navigation = useNavigation();

  let { signInWithGoogle, loading } = useAuth();

  return (
    <View style={tw("flex-1")}>
      <ImageBackground
        source={{ uri: "https://tinder.com/static/tinder.png" }}
        style={tw("flex-1")}
        resizeMode="cover"
      >
        <TouchableOpacity
          onPress={signInWithGoogle}
          style={[
            tw("absolute bottom-40 w-52 bg-white p-4 rounded-2xl"),
            { marginHorizontal: "25%" },
          ]}
        >
          <Text style={tw("font-semibold text-center")}>
            Sign In & get swiping
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
