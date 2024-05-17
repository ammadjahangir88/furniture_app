import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../assets/constants'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useRoute } from '@react-navigation/native'
const NewRivals = ({navigation}) => {
  return (
   <View style={styles.container}>
    <View style={styles.wrapper}>
      <View style={styles.upperRow}>
      <TouchableOpacity onPress={()=>{navigation.goBack()}}>
        <Ionicons name='chevron-back-circle' size={30} color={COLORS.lightWhite} />
        </TouchableOpacity>

        <Text style={styles.heading} > Products  </Text>
      </View>

    </View>

   </View>
  )
}

export default NewRivals

const styles = StyleSheet.create({

  wrapper:{
    flex:1,
    backgroundColor: COLORS.lightWhite
  },
  upperRow: {
    width: SIZES.width- 50,
    marginHorizontal: SIZES.large,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.large,
    top: SIZES.large,
    zIndex: 999
  },
  heading:{
    fontFamily: 'Poppins-SemiBold',
    fontSize: SIZES.medium,
    color: COLORS.white,
    marginLeft: 5,
  }

})