import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import type { WeatherForecast } from '@/app/(days)/day8/weather'
import dayjs from 'dayjs'
import { BlurView } from 'expo-blur'

const ForecastItem = ({ forecast }: { forecast: WeatherForecast }) => {
  return (
    <BlurView intensity={40} style={styles.container}>
      <Text style={styles.temp}>{Math.round(forecast.main.temp)}°</Text>
      <Text style={styles.date}>{dayjs(forecast.dt * 1000).format('ddd ha')}</Text>
    </BlurView>
  )
}

export default memo(ForecastItem)

const styles = StyleSheet.create({
  container: {
    padding: 10,
    aspectRatio: 3 / 4,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderColor: 'gainsboro',
    borderWidth: StyleSheet.hairlineWidth,
  },
  temp: {
    fontFamily: 'InterBlack',
    fontSize: 35,
    color: 'white',
    marginVertical: 15,
  },
  date: {
    fontFamily: 'Inter',
    fontSize: 16,
    color: 'ghostwhite',
  },
})
