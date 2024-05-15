import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS,SIZES } from '../../assets/constants'
import Ionicons from 'react-native-vector-icons/Ionicons'
const Headings = () => {
  return (
    <View style={styles.container}>
     <View style={styles.header}>
        <Text style={styles.headerTitle}>New Rivals</Text>
        <TouchableOpacity>
            < Ionicons name='grid' size={24} color={COLORS.primary} />
        </TouchableOpacity>

     </View>
    </View>
  )
}

export default Headings

const styles = StyleSheet.create({

    container:{
        marginTop: SIZES.medium,
        // marginBottom: -SIZES.xSmall,
        marginHorizontal: 12


    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    headerTitle:{
        fontFamily: "Poppins-SemiBold",
        fontSize: SIZES.xLarge,
        color: COLORS.black
    }
})