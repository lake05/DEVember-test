import { Dimensions, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import { AVPlaybackStatus, ResizeMode, Video } from 'expo-av'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { useEffect, useRef, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'

interface VideoPostProps {
  post: {
    id: string
    video: string
    caption: string
  }
  activePostId: string
}

const VideoPost = ({ post, activePostId }: VideoPostProps) => {
  const videoRef = useRef<Video>(null)
  const [status, setStatus] = useState<AVPlaybackStatus>()

  const isPlaying = status?.isLoaded && status.isPlaying

  const { height } = useWindowDimensions()

  useEffect(() => {
    if (!videoRef.current) return

    if (activePostId !== post.id) {
      videoRef.current.pauseAsync()
    }
    if (activePostId === post.id) {
      videoRef.current.playAsync()
    }
  }, [activePostId, videoRef.current])

  const onPress = () => {
    if (!videoRef.current) {
      return
    }

    if (isPlaying) {
      videoRef.current.pauseAsync()
    } else {
      videoRef.current.playAsync()
    }
  }

  return (
    <View style={[styles.container, { height }]}>
      <Video
        ref={videoRef}
        style={styles.video}
        videoStyle={{ height: height }}
        source={{ uri: post.video }}
        resizeMode={ResizeMode.COVER}
        onPlaybackStatusUpdate={setStatus}
        isLooping
      />

      <Pressable onPress={onPress} style={styles.content}>
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,.8)']}
          style={[StyleSheet.absoluteFillObject, styles.overlay]}
        />
        {!isPlaying && (
          <Ionicons
            name="play"
            size={70}
            color="white"
            style={{
              position: 'absolute',
              alignSelf: 'center',
              top: '50%',
              color: 'rgba(255,255,255,0.6)',
            }}
          />
        )}

        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.footer}>
            <View style={styles.leftColumn}>
              <Text style={styles.caption}>{post.caption}</Text>
            </View>

            {/* right icon buttons */}
            <View style={styles.rightColumn}>
              <Ionicons name="heart" size={40} color="white" />
              <Ionicons name="share-social-sharp" size={40} color="white" />
              <Ionicons name="bookmark" size={40} color="white" />
            </View>
          </View>
        </SafeAreaView>
      </Pressable>
    </View>
  )
}

export default VideoPost

const styles = StyleSheet.create({
  container: {},
  video: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  overlay: {
    top: '50%',
  },
  footer: {
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  leftColumn: {
    flex: 1,
  },
  caption: {
    color: 'white',
    fontFamily: 'Inter',
    fontSize: 18,
  },
  rightColumn: {
    gap: 10,
  },
})
