import { Link, Stack } from 'expo-router'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import MarkdownDisplay from '@/components/day3/MarkdownDisplay'

const description = `
# TikTok Feed
Video feed similar to TikTok, IG Reels, Youtube Shorts
`

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Day 12: Video Feed' }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/day12/feed" asChild>
        <Text style={styles.buttonText}>Go to Feed</Text>
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
