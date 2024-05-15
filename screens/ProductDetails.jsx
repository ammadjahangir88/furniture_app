import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import { COLORS, SIZES } from '../assets/constants'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
const ProductDetails = ({navigation}) => {
  const [count,setCount]=useState(1)
  
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
        <Ionicons name='chevron-back-circle' size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{}}>
        <Ionicons name='heart' size={30} color={COLORS.primary} />
        </TouchableOpacity>
      
      </View>
      <Image 
      source={{uri: "https://source.unsplash.com/1024x768/?nature"}}
      style={styles.image}
      />
      <View style={styles.details} >
        <View style={styles.titleRow}>

          <Text style={styles.title}>Product</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$ 660.88 </Text>


          </View>
        </View>
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1,2,3,4,5].map((index)=>(
              <Ionicons
              key={index}
              name='star'
              size={24}
              color='gold'
              />
            ))}

          

          </View>
          <View style={styles.rating}>
            <TouchableOpacity onPress={()=>{}}>
              <SimpleLineIcons 
              name='plus' size={20}
              />
            </TouchableOpacity>
            <Text style={styles.ratingtext}>  {count}  </Text>
            <TouchableOpacity onPress={()=>{}}>
              <SimpleLineIcons 
              name='minus' size={20}
              />
            </TouchableOpacity>
      


        </View>

        </View>
        

      </View>
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
   
  container:{
    flex:1,
  },
  upperRow:{
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: SIZES.xLarge,
    width: SIZES.width -44,
    zIndex: 99
  },
  image:{
    aspectRatio: 1,
    resizeMode: "cover",
  },
  details:{
    marginTop: -SIZES.large,
    backgroundColor: COLORS.lightWhite,
    width: SIZES.width,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium

  },
  titleRow:{
    marginHorizontal: 20,
    paddingBottom: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SIZES.width -44,
    top: 20

  },
  title:{
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.large,
    color: COLORS.black,

  },
  priceWrapper:{
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.large
  },
  price:{
    paddingHorizontal: 10,
    fontFamily: 'Poppins-SemiBold',
    fontSize: SIZES.large,
    color: COLORS.black
  },
  ratingRow:{
    marginHorizontal: 20,
    paddingBottom: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SIZES.width -10,
    top: 5

  },
  rating:{
    top: SIZES.large,
    flexDirection: "row",
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: SIZES.large
  }

})