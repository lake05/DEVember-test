import { AmaticSC_700Bold, AmaticSC_400Regular } from '@expo-google-fonts/amatic-sc'
import {
  useFonts,
  Inter_900Black,
  Inter_600SemiBold,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter'
import { Stack } from 'expo-router'
import { useEffect, useState } from 'react'
import { Platform } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Animated, { FadeIn } from 'react-native-reanimated'
import AnimationSplashScreen from '@/components/day4/AnimationSplashScreen'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

const RootLayout = () => {
  const [appReady, setAppReady] = useState(false)
  const [splashAnimationFinished, setSplashAnimationFinished] = useState(false)

  const [fontsLoaded, fontError] = useFonts({
    Inter: Inter_400Regular,
    InterSemi: Inter_600SemiBold,
    InterBold: Inter_700Bold,
    InterBlack: Inter_900Black,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold,
  })

  useEffect(() => {
    if (fontsLoaded || fontError) {
      setAppReady(true)
    }
  }, [fontsLoaded, fontError])

  const showAnimationSplash = !appReady || !splashAnimationFinished

  if (showAnimationSplash && Platform.OS !== 'web') {
    return (
      <AnimationSplashScreen
        onAnimationFinish={() => {
          setSplashAnimationFinished(true)
        }}
      />
    )
  }

  return (
    <QueryClientProvider client={queryClient}>
      {Platform.OS === 'web' && <ReactQueryDevtools initialIsOpen={false} />}
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Animated.View style={{ flex: 1 }} entering={FadeIn}>
          <Stack
            screenOptions={{
              headerStyle: {
                backgroundColor: '#F9EDE3',
              },
              headerTitleAlign: 'center',
            }}>
            <Stack.Screen name="index" options={{ title: 'DEVember' }} />
          </Stack>
        </Animated.View>
      </GestureHandlerRootView>
    </QueryClientProvider>
  )
}

export default RootLayout
