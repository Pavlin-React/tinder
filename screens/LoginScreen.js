import React from 'react'
import { View, Text } from 'react-native'
import useAuth from '../hooks/useAuth'

const LoginScreen = () => {

  let {user} = useAuth()
  console.log(user);

  return (
    <View>
      <Text>Hello from Login Screen</Text>
    </View>
  )
}

export default LoginScreen
