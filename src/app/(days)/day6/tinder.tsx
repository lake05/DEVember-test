import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import TinderCard from '@/components/day6/TinderCard'

const TinderScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>TinderScreen</Text>
      <TinderCard />
    </View>
  )
}

const styles = StyleSheet.create({})

export default TinderScreen
