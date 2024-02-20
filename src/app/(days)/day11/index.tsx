import { Link, Stack } from 'expo-router'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import MarkdownDisplay from '@/components/day3/MarkdownDisplay'

const description = `
# Camera app
Take photos and record videos with React Native Vision Camera
`

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Day 10: Camera' }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/day11/camera" asChild>
        <Text style={styles.buttonText}>Go to Camera Page</Text>
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
