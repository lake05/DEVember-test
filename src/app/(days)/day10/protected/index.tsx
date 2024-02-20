import { Stack } from 'expo-router'
import { Text, View } from 'react-native'

// import * as LocalAuthentication from 'expo-local-authentication';

const ProtectedScreen = () => {
  return (
    <View style={{ padding: 10 }}>
      <Stack.Screen options={{ title: 'Private Info' }} />

      <Text style={{ fontFamily: 'InterBold', fontSize: 30 }}> This is private info.</Text>
    </View>
  )
}

export default ProtectedScreen
