import React from 'react'
import { View, Text, Button } from 'react-native'
import useAuth from '../hooks/useAuth'

const LoginScreen = () => {

  let {signInWithGoogle} = useAuth()

  let {user} = useAuth()
  console.log(user);

  return (
    <View>
      <Text>Hello from Login Screen</Text>
      <Button title='Login' onPress={signInWithGoogle} />
    </View>
  )
}

export default LoginScreen
