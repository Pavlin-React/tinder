import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import tw from "tailwind-rn";
import useAuth from "../hooks/useAuth";
import { LogBox } from "react-native";
import { setDoc, doc } from "@firebase/firestore";
import { db } from "../firebase";
import { useNavigation } from "@react-navigation/core";
LogBox.ignoreAllLogs();

const ModalScreen = () => {
  let { user } = useAuth();
  let [image, setImage] = useState(null);
  let [job, setJob] = useState(null);
  let [age, setAge] = useState(null);

  let navigation = useNavigation()

  let incompleteForm = !image || !job || !age

  let updateUserProfile = () => {
    setDoc(doc(db, 'users', user.uid), {
      id: user.uid,
      displayName: user.displayName,
      photoURL: image,
      job: job,
      age: age,
      // timestamp: serverTimestamp()
    }).then(() => {
      navigation.navigate('Home')
    }).catch(error => {
      alert(error.message)
    })
  }

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
        value={image}
        onChangeText={setImage}
        style={tw("text-center text-xl pb-2")}
        placeholder="Enter a Profile Pic URL"
      />
      <Text style={tw("text-center p-4 font-bold text-red-400")}>
        Step 2: The Job
      </Text>
      <TextInput
        value={job}
        onChangeText={setJob}
        style={tw("text-center text-xl pb-2")}
        placeholder="Enter your occupation"
      />
      <Text style={tw("text-center p-4 font-bold text-red-400")}>
        Step 3: The Age
      </Text>
      <TextInput
        value={age}
        onChangeText={setAge}
        style={tw("text-center text-xl pb-2")}
        placeholder="Enter your Age"
        maxLength={2}
        keyboardType='numeric'
      />
      <TouchableOpacity
        onPress={updateUserProfile}
        disabled={incompleteForm}
        style={[tw("w-64 p-3 absolute bottom-10 rounded-xl"),
          incompleteForm ? tw('bg-gray-400') : tw('bg-red-400')
        ]}
      >
        <Text style={tw("text-center text-white text-xl")}>Update Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModalScreen;
