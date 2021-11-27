import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { View, Text, Button } from 'react-native'
import useAuth from '../hooks/useAuth'

const HomeScreen = () => {

  let navigation = useNavigation()
  let { logout } = useAuth()

  return (
    <View>
      <Text>Hello from Home Screen</Text>
      <Button title='Go to Chat Screen' onPress={() => navigation.navigate('Chat')} />
      <Button title='Log Out' onPress={logout} />
    </View>
  )
}

export default HomeScreen
