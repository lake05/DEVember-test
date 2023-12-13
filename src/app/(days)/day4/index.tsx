import { Link, Stack } from 'expo-router'
import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Day 3: Markdown' }} />

      <Link href="/day4/animation" asChild>
        <Text style={styles.buttonText}>Go to Animation</Text>
      </Link>
      <Link href="/day4/splash" asChild>
        <Text style={styles.buttonText}>Splash screen animation</Text>
      </Link>
    </SafeAreaView>
  )
}

export default DayDetailsScreen

const styles = StyleSheet.create({
  buttonText: {
    alignSelf: 'center',
    color: '#302e38',
    fontFamily: 'InterSemi',
    fontSize: 16,
    padding: 15,
    paddingHorizontal: 25,
  },
})
