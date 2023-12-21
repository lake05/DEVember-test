import { Stack } from 'expo-router'
import { PropsWithChildren } from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import Markdown from 'react-native-markdown-display'

const MarkdownDisplay = ({ children }: PropsWithChildren) => {
  return (
    <ScrollView style={styles.page} contentInsetAdjustmentBehavior="automatic">
      {/* @ts-ignore */}
      <Markdown style={markdownStyles}>{children}</Markdown>
      <Text>MarkdownDisplay</Text>
    </ScrollView>
  )
}

const markdownStyles = StyleSheet.create({
  heading1: {
    fontFamily: 'InterBlack',
    color: '#212020',
    marginTop: 15,
    marginBottom: 10,
    lineHeight: 40,
  },
  heading2: {
    fontFamily: 'InterBold',
    color: '#404040',
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 30,
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
  },
})

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
    borderRadius: 10,
  },
})

export default MarkdownDisplay
