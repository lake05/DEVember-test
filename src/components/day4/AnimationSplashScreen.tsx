import LottieView from 'lottie-react-native'
import { useRef } from 'react'
import { View } from 'react-native'
import Animated, { ZoomOut } from 'react-native-reanimated'

const AnimationLottieView = Animated.createAnimatedComponent(LottieView)

const AnimationSplashScreen = ({
  onAnimationFinish = () => {},
}: {
  onAnimationFinish: () => void
}) => {
  const animation = useRef<LottieView>(null)

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
      }}>
      <AnimationLottieView
        exiting={ZoomOut}
        ref={animation}
        onAnimationFinish={onAnimationFinish}
        loop={false}
        autoPlay
        style={{
          width: '80%',
          maxWidth: 400,
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('@/assets/lottie/netflix.json')}
      />
    </View>
  )
}

export default AnimationSplashScreen
