import { Link, Stack } from 'expo-router'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import MarkdownDisplay from '@/components/day3/MarkdownDisplay'

const description = `
# Authentication
AWS Amplify v6 Authentication
`

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Day 9: Auth' }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href="/day9/protected" asChild>
        <Text style={styles.buttonText}>Go to Authentication Page</Text>
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
