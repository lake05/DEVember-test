import { ActivityIndicator, ActivityIndicatorBase, FlatList, Text, View } from 'react-native'
import character from '@/data/character.json'
import React, { useEffect, useState } from 'react'
import { Stack } from 'expo-router'
import CharacterListItem from '@/components/day1/CharacterListItem'
import { join } from 'lodash-es'

const DayDetailsScreen = () => {
  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState<any[]>([])
  const [nextPage, setNextPage] = useState('https://rickandmortyapi.com/api/character')

  const fetchNextPage = async () => {
    if (loading) {
      return
    }

    console.log('fetching', nextPage)

    setLoading(true)
    const response = await fetch(nextPage)
    const json = await response.json()

    setItems((existingItems) => [...existingItems, ...json.results])
    setNextPage(json.info.next)
    setLoading(false)
  }

  useEffect(() => {
    fetchNextPage()
  }, [])

  return (
    <>
      <Stack.Screen options={{ title: 'Day 1' }} />
      <FlatList
        data={items}
        renderItem={({ item }) => <CharacterListItem character={item} />}
        contentContainerStyle={{ gap: 10 }}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={3}
        ListFooterComponent={() => loading && <ActivityIndicator />}
      />
    </>
  )
}

export default DayDetailsScreen
