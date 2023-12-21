import { QueryFunctionContext, useQuery } from '@tanstack/react-query'
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  ImageBackground,
  Platform,
} from 'react-native'

import * as Location from 'expo-location'
import { useEffect, useState } from 'react'
import ForecastItem from '@/components/day8/ForecastItem'
import { useNavigation } from 'expo-router'
import AnimatedLottieView from 'lottie-react-native'
import { StatusBar } from 'expo-status-bar'
import { BlurView } from 'expo-blur'

const BASE_URL = 'https://api.openweathermap.org/data/2.5'
const OPEN_WEATHER_KEY = process.env.EXPO_PUBLIC_OPEN_WEATHER_KEY

const fetchWeather = async (location: Location.LocationObject | null): Promise<Weather> => {
  if (!location) throw Error()

  const { coords } = location

  return await fetch(
    `${BASE_URL}/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${OPEN_WEATHER_KEY}&units=metric`,
  ).then((response) => response.json())
}

const fetchForecast = async (
  location: Location.LocationObject | null,
): Promise<WeatherForecast[]> => {
  if (!location) throw Error()

  const { coords } = location

  return await fetch(
    `${BASE_URL}/forecast?lat=${coords.latitude}&lon=${coords.longitude}&&appid=${OPEN_WEATHER_KEY}&units=metric`,
  )
    .then((response) => response.json())
    .then((data) => data.list)
}

type MainWeather = {
  feels_like: number
  humidity: number
  pressure: number
  sea_level: number
  temp: number
  temp_max: number
  temp_min: number
}

interface Weather {
  name: string
  main: MainWeather
  weather: {
    id: string
    main: string
    description: string
    icon: string
  }[]
}

export interface WeatherForecast {
  dt: number
  main: MainWeather
}

const WeatherScreen = () => {
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({ headerShown: false })
  }, [navigation])

  const [location, setLocation] = useState<Location.LocationObject | null>(null)
  const [errorMsg, setErrorMsg] = useState('')

  const {
    isLoading,
    data: weather,
    error,
  } = useQuery({
    queryKey: ['weather', location],
    queryFn: () => fetchWeather(location),
    staleTime: Infinity,
    enabled: !!location,
  })

  const { data: forecast } = useQuery({
    queryKey: ['forecast', location],
    queryFn: () => fetchForecast(location),
    staleTime: Infinity,
    enabled: !!location,
  })

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }

      let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Low })
      setLocation(location)
    })()
  }, [])

  // will be true whenever a request is in-flight.
  // if (isFetching) {
  //   return <Text>Feting...</Text>
  // }

  if (isLoading) {
    return <ActivityIndicator />
  }

  if (weather) {
    return (
      <ImageBackground
        source={{ uri: 'https://source.unsplash.com/random', cache: 'force-cache' }}
        style={styles.container}>
        <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.5)' }} />

        <StatusBar style="light" />

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          {Platform.OS !== 'web' && (
            <AnimatedLottieView
              source={
                weather.weather[0].main === 'Rain'
                  ? require('@/assets/lottie/rain.json')
                  : require('@/assets/lottie/sun.json')
              }
              style={{ width: 200, aspectRatio: 1 }}
              loop
              autoPlay
            />
          )}
          <Text style={styles.location}>{weather.name}</Text>
          <Text style={styles.temp}>{Math.round(weather.main.temp)}°</Text>
          <Text style={styles.location}>
            {weather.weather[0].main}
            {/* {weather.weather[0].icon} */}
          </Text>
        </View>

        <FlatList
          style={{ flexGrow: 0, marginBottom: 40, height: 150 }}
          horizontal
          data={forecast}
          contentContainerStyle={{ gap: 10, paddingHorizontal: 10 }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <ForecastItem forecast={item} />}
        />
        <BlurView />
      </ImageBackground>
    )
  }

  if (error) {
    return 'An error has occurred: ' + error.message
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    textAlign: 'center',
  },
  location: {
    fontFamily: 'InterSemi',
    fontSize: 30,
    color: 'lightgray',
  },
  temp: {
    fontFamily: 'InterBlack',
    fontSize: 100,
    color: 'snow',
  },
})

export default WeatherScreen
