import { View, Text, StyleSheet, Image, ViewStyle } from 'react-native'

import { Apartment } from '@/app/(days)/day5/airbnb'

const ApartmentListItem = ({
  apartment,
  containerStyle,
}: {
  apartment: Apartment
  containerStyle?: ViewStyle
}) => {
  return (
    <View style={[styles.card, containerStyle]}>
      <Image source={{ uri: apartment.image }} style={styles.image} />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{apartment.title}</Text>
        <Text style={styles.description}>
          Stay in this apartmentStay in this apartmentStay in this apartment
        </Text>

        <View style={styles.footer}>
          <Text style={styles.price}>{apartment.price}</Text>
          <Text style={styles.price}>
            * {apartment.rating} ({apartment.numberOfStars})
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    // position: 'absolute',
    // bottom: 70,
    // left: 10,
    // right: 10,

    flexDirection: 'row',
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    width: 150,
    aspectRatio: 1,
  },
  title: {
    fontFamily: 'InterBold',
    marginBottom: 10,
  },
  description: {
    color: 'gray',
  },

  rightContainer: {
    padding: 10,
    flex: 1,
  },
  price: {
    fontFamily: 'InterBold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 'auto',
  },
})

export default ApartmentListItem
