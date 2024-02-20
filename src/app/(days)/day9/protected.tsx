import { useQuery } from '@tanstack/react-query'
import { Text, View } from 'react-native'


const ProtectedScreen = () => {
 

  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontFamily: 'InterBold', fontSize: 30 }}></Text>
    </View>
  )
}

export default ProtectedScreen
