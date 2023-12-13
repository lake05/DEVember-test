import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'

const profile = {
  id: 1,
  image: 'https://via.placeholder.com/300',
  name: 'Lake',
}

export const tinderCardWidth = Dimensions.get('screen').width * 0.8

const TinderCard = () => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: profile.image }}
        style={[StyleSheet.absoluteFillObject, styles.image]}
      />

      <Text style={styles.name}>{profile.name}</Text>
    </View>
  )
}

export default TinderCard

const styles = StyleSheet.create({
  card: {
    width: tinderCardWidth,
    aspectRatio: 1 / 1.67,
    borderRadius: 15,
    overflow: 'hidden',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    textShadowRadius: 2.22,

    elevation: 3,
  },
  image: {},
  name: {},
})
