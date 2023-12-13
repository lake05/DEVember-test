import { Text, View } from 'react-native'
import { Marker } from 'react-native-maps'

import { Apartment } from '@/app/(days)/day5/airbnb'

const CustomMarker = ({ apartment, onPress }: { apartment: Apartment; onPress: () => void }) => {
  return (
    <Marker
      onPress={onPress}
      coordinate={{
        latitude: apartment.latitude,
        longitude: apartment.longitude,
      }}
      title={apartment.title}
      description="This is a description">
      <View
        style={{
          backgroundColor: 'white',
          padding: 5,
          paddingHorizontal: 10,
          borderWidth: 1,
          borderColor: 'gray',
          borderRadius: 20,
        }}>
        <Text style={{ fontFamily: 'InterBold' }}>{apartment.price}</Text>
      </View>
    </Marker>
  )
}

export default CustomMarker
