import { useNavigation } from "@react-navigation/core";
import React, { useRef } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import useAuth from "../hooks/useAuth";
import tw from "tailwind-rn";
import { Ionicons, Entypo, AntDesign } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";

let DUMMY_DATA = [
  {
    firstName: "Mario",
    lastName: "Bros",
    job: "Game Starr",
    photoUrl: require("../assets/mario.jpg"),
    age: "33",
    id: 123,
  },
  {
    firstName: "Woman",
    lastName: "Random",
    job: "Fashion",
    photoUrl: require("../assets/woman.jpg"),
    age: "22",
    id: 456,
  },
  {
    firstName: "John",
    lastName: "Travolta",
    job: "Hero",
    photoUrl: require("../assets/pic.png"),
    age: "44",
    id: 789,
  },
];

const HomeScreen = () => {
  let navigation = useNavigation();
  let { logout, user } = useAuth();
  let swipeRef = useRef(null);

  return (
    <SafeAreaView style={tw("flex-1")}>
      <View style={tw("flex-row items-center justify-between px-5")}>
        <TouchableOpacity onPress={logout}>
          <Image
            source={{ uri: user.photoURL }}
            style={tw("h-10 w-10 rounded-full")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Modal")}>
          <Image
            source={require("../assets/logo-tinder.png")}
            style={tw(" w-10 h-10 rounded-full")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="chatbubbles-sharp" size={30} color="#ff5864" />
        </TouchableOpacity>
      </View>
      <View style={tw("flex-1 -mt-6")}>
        <Swiper
          ref={swipeRef}
          cardIndex={0}
          stackSize={5}
          animateCardOpacity
          containerStyle={{ backgroundColor: "transparent" }}
          cards={DUMMY_DATA}
          verticalSwipe={false}
          onSwipedLeft={() => {
            console.log("Swipe pass");
          }}
          onSwipedRight={() => {
            console.log("Swipe Match");
          }}
          backgroundColor={"#4fd0e9"}
          overlayLabels={{
            left: {
              title: "NOPE",
              style: {
                label: {
                  textAlign: "right",
                  color: "red",
                },
              },
            },
            right: {
              title: "MATCH",
              style: {
                label: {
                  color: "#3ded30",
                },
              },
            },
          }}
          renderCard={(card) => (
            <View
              key={card.id}
              style={tw("relative bg-white h-3/4 rounded-xl")}
            >
              <Image
                source={card.photoUrl}
                style={tw("absolute top-0 h-full w-full rounded-xl")}
              />
              <View
                style={[
                  tw(
                    "absolute bottom-0 bg-white w-full h-20 flex-row justify-between items-center px-6 py-2 rounded-b-xl"
                  ),
                  styles.cardShadow,
                ]}
              >
                <View>
                  <Text style={tw("text-xl font-bold")}>
                    {card.firstName} {card.lastName}
                  </Text>
                  <Text>{card.job}</Text>
                </View>
                <Text style={tw("font-bold text-2xl")}>{card.age}</Text>
              </View>
            </View>
          )}
        />
      </View>
      <View style={tw("flex-row justify-evenly")}>
        <TouchableOpacity
          onPress={() => swipeRef.current.swipeLeft()}
          style={tw(
            "justify-center items-center rounded-full w-16 h-16 bg-red-200"
          )}
        >
          <Entypo name="cross" size={24} color="red" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => swipeRef.current.swipeRight()}
          style={tw(
            "justify-center items-center rounded-full w-16 h-16 bg-green-200"
          )}
        >
          <AntDesign name="heart" size={24} color="green" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

let styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
