import { Link, Stack } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const DayDetailsScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ title: 'Day 2' }} />
      <Text style={{ fontFamily: 'AmaticBold' }}>Tinder </Text>
      <Link href="/day6/tinder" asChild>
        <Text style={styles.buttonText}>CONTINUE</Text>
      </Link>
    </View>
  )
}

export default DayDetailsScreen

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 50,
    backgroundColor: '#302e38',
    borderRadius: 20,
    alignItems: 'center',
    flex: 1,
  },
  buttonText: {
    alignSelf: 'center',
    marginTop: 40,
    color: '#302e38',
    fontFamily: 'InterSemi',
    fontSize: 16,
    padding: 15,
    paddingHorizontal: 25,
  },
})
