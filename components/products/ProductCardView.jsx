import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../assets/constants'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const ProductCardView = () => {
    const navigation= useNavigation()
  return (
   <TouchableOpacity onPress={()=>{navigation.navigate('ProductDetails')}}>
        <View style={styles.container}>
            <View style={styles.imageContainer}>
              <Image  
              source={{uri: "https://source.unsplash.com/1024x768/?nature"}}
              style={styles.image}
              />
            </View>
            <View style={styles.details}>
                <Text style={styles.title} numberOfLines={1}>Products</Text>
                <Text style={styles.supplier}>Products</Text>
                <Text style={styles.title}>$23443</Text>

            </View>
            <TouchableOpacity style={styles.addBtn}>
                <Ionicons name='add-circle' size={35} color={COLORS.primary}/>
            </TouchableOpacity>

        </View>
    </TouchableOpacity>
  )
}

export default ProductCardView

const styles = StyleSheet.create({

    container:{
        width:182,
        height: 240,
        marginEnd: 22,
        borderRadius: SIZES.medium,
        backgroundColor: COLORS.secondary
    },
    imageContainer:{
        flex: 1,
        width: 170,
        marginLeft: SIZES.small/2,
        marginTop: SIZES.small/2,
        borderRadius: SIZES.small,
        overflow: "hidden",
        backgroundColor: COLORS.gray2
    },
    image:{
        aspectRatio:1,
        resizeMode: 'cover',
    },
    details:{
        padding: SIZES.large
    },
    title:{
        fontFamily: 'Poppins-Bold',
        fontSize: SIZES.large,
        marginBottom:2,
        color:COLORS.black,
    },
    supplier:{
        fontFamily: 'Poppins-Regular',
        fontSize: SIZES.small,
        marginBottom:2
    },
    price:{
        fontFamily: 'Poppins-Bold',
        fontSize: SIZES.medium,
      
    },
    addBtn:{
        position: 'absolute',
        bottom: SIZES.xSmall,
        right: SIZES.xSmall

    }

})