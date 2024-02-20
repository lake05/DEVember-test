import { FlatList, StyleSheet, View } from 'react-native'
import { Stack } from 'expo-router'

import { StatusBar } from 'expo-status-bar'
import VideoPost from '@/components/day12/VideoPost'
import { useState } from 'react'

const posts = [
  {
    id: '1',
    video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm',
    caption: 'Caption Of the post0',
  },
  {
    id: '2',
    video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm',
    caption: 'Caption Of the post1',
  },
  {
    id: '3',
    video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm',
    caption: 'Caption Of the post2',
  },
  {
    id: '4',
    video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm',
    caption: 'Caption Of the post3',
  },
  {
    id: '5',
    video: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm',
    caption: 'Caption Of the post4',
  },
]

const FeedScreen = () => {
  const [activePost, setActivePost] = useState(posts[0].id)

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />

      <FlatList
        data={posts}
        pagingEnabled
        renderItem={({ item }) => <VideoPost post={item} activePostId={activePost} />}
      />
    </View>
  )
}

export default FeedScreen

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black' },
})
