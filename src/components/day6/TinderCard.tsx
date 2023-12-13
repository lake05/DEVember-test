import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated'

export const tinderCardWidth = Dimensions.get('screen').width * 0.8

interface TinderCardProps {
  user: {
    image: string
    name: string
  }
  numOfCards: number
  index: number
  activeIndex: SharedValue<number>
}

const TinderCard = ({ user, numOfCards, index, activeIndex }: TinderCardProps) => {
  const animatedCard = useAnimatedStyle(() => {
    return {
      opacity: interpolate(activeIndex.value, [index - 1, index, index + 1], [1 - 1 / 5, 1, 1]),
    }
  })

  return (
    <Animated.View
      style={[
        styles.card,
        animatedCard,
        {
          zIndex: numOfCards - index,
          transform: [{ translateY: -index * 30 }, { scale: 1 - index * 0.05 }],
        },
      ]}>
      <Image source={{ uri: user.image }} style={[StyleSheet.absoluteFillObject, styles.image]} />

      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={[StyleSheet.absoluteFillObject, styles.overlay]}
      />

      <View style={styles.footer}>
        <Text style={styles.name}>{user.name}</Text>
      </View>
    </Animated.View>
  )
}

export default TinderCard

const styles = StyleSheet.create({
  card: {
    width: tinderCardWidth,
    aspectRatio: 1 / 1.67,
    borderRadius: 15,
    justifyContent: 'flex-end',

    position: 'absolute',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    textShadowRadius: 2.22,

    elevation: 3,
  },
  overlay: {
    top: '50%',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  image: {
    borderRadius: 15,
  },
  footer: { padding: 10 },
  name: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'InterBold',
  },
})
