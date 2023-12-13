import BottomSheet, {
  BottomSheetFlatList,
  useGestureEventsHandlersDefault,
} from '@gorhom/bottom-sheet'
import { Stack } from 'expo-router'
import { useMemo, useRef, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'

import apartments from '@/assets/data/day5/apartments.json'
import ApartmentListItem from '@/components/day5/ApartmentListItem'
import CustomMarker from '@/components/day5/CustomMarker'

export type Apartment = {
  id: string
  latitude: number
  longitude: number
  price: string
  title: string
  numberOfStars: number
  rating: number
  image: string
}

const AirbnbScreen = () => {
  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(null)
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })

  const gestureHandler = useGestureEventsHandlersDefault()

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null)

  // variables
  const snapPoints = useMemo(() => [75, '50%', '90%'], [])

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <MapView style={styles.map} provider={PROVIDER_GOOGLE} region={mapRegion}>
        {apartments.map((apartment) => (
          <CustomMarker
            onPress={() => setSelectedApartment(apartment)}
            key={apartment.id}
            apartment={apartment}
          />
        ))}
      </MapView>

      {/* display selected Apartment */}
      {selectedApartment && (
        <ApartmentListItem
          apartment={selectedApartment}
          containerStyle={{
            position: 'absolute',
            left: 10,
            right: 10,
            bottom: typeof snapPoints[0] === 'number' ? snapPoints[0] + 10 : 100,
          }}
        />
      )}

      <BottomSheet ref={bottomSheetRef} index={0} snapPoints={snapPoints}>
        <View style={{ flex: 1 }}>
          <Text style={styles.listTitle}>Over {apartments.length} places</Text>

          <BottomSheetFlatList
            data={apartments}
            contentContainerStyle={{ gap: 10, padding: 10 }}
            renderItem={({ item }) => <ApartmentListItem key={item.id} apartment={item} />}
          />
        </View>
      </BottomSheet>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  listTitle: {
    textAlign: 'center',
    fontFamily: 'InterSemi',
    fontSize: 16,
    marginVertical: 10,
    marginBottom: 20,
  },
})

export default AirbnbScreen
