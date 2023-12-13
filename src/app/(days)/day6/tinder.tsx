import { Stack } from 'expo-router'
import { useSharedValue } from 'react-native-reanimated'
import { StyleSheet, Text, View } from 'react-native'

import TinderCard from '@/components/day6/TinderCard'

const users = [
  {
    id: 1,
    image: 'https://via.placeholder.com/300',
    name: 'Lake1',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/300',
    name: 'Lake2',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/300',
    name: 'Lake3',
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/300',
    name: 'Lake4',
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/300',
    name: 'Lake4',
  },
]

const TinderScreen = () => {
  const activeIndex = useSharedValue(0)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Stack.Screen options={{ headerShown: false }} />

      {users.map((user, index) => (
        <TinderCard
          key={user.id}
          user={user}
          numOfCards={users.length}
          index={index}
          activeIndex={activeIndex}
        />
      ))}
    </View>
  )
}

export default TinderScreen
