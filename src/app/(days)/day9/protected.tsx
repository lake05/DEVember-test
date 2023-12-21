import { useQuery } from '@tanstack/react-query'
import { Text, View } from 'react-native'

const getTodos = async () => {
  const result = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) =>
    response.json(),
  )

  return result
}

const ProtectedScreen = () => {
  // Queries
  const { isLoading, data, isFetching } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos,
  })

  // will be true whenever a request is in-flight.
  if (isFetching) {
    return <Text>Feting...</Text>
  }

  if (isLoading) {
    return <Text>Loading...</Text>
  }

  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontFamily: 'InterBold', fontSize: 30 }}>{data.title}</Text>
    </View>
  )
}

export default ProtectedScreen
