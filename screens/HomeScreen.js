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
import Swiper from "react-native-deck-swiper";

let DUMMY_DATA = [
  {
    firstName: "Mario",
    lastName: "Bros",
    occupation: "Game Starr",
    photoUrl: require('../assets/mario.jpg'),
    age: "33",
    id: 123
  },
  {
    firstName: "Woman",
    lastName: "Random",
    occupation: "Fashion",
    photoUrl: require('../assets/woman.jpg'),
    age: "22",
    id: 456
  },
  {
    firstName: "John",
    lastName: "Travolta",
    occupation: "Hero",
    photoUrl: require('../assets/pic.png'),
    age: "44",
    id: 789
  },
];

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
        <TouchableOpacity onPress={logout}>
          <Image
            source={{ uri: user.photoURL }}
            style={tw("h-10 w-10 rounded-full")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
          <Image
            source={require("../assets/logo-tinder.png")}
            style={tw("w-10 h-10 rounded-full")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="chatbubbles" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={tw('flex-1 -mt-6')} >  
        <Swiper
          containerStyle={{backggroundColor: 'transparent'}}
          cards={DUMMY_DATA}
          renderCard={(card) => (
            <View key={card.id} style={tw('bg-white h-3/4 rounded-xl')} >
              <Image source={card.photoUrl} style={{width: '100%', height: '100%'}}/>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
