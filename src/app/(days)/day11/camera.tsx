import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const CameraScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <Text>CameraScreen</Text>
    </View>
  )
}

export default CameraScreen

const styles = StyleSheet.create({})
