import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View, ScrollView } from 'react-native'
import React,{useState} from 'react'
import { COLORS, SIZES } from '../assets/constants'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { useRoute } from '@react-navigation/native'

const ProductDetails = ({navigation}) => {
  const route=useRoute()
  const {item}=route.params
  console.log(item)
  const [count,setCount]=useState(1)
  const increment =()=>{
    setCount(count+1)
  }
  const decrement=()=>{
    if (count >1){
      setCount(count-1)
    }
   
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
        <Ionicons name='chevron-back-circle' size={30} col />
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

          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>$ {item.price} </Text>


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
            <TouchableOpacity onPress={()=>{increment()}}>
              <SimpleLineIcons 
              name='plus' size={20}
              />
            </TouchableOpacity>
            <Text style={styles.ratingtext}>  {count}  </Text>
            <TouchableOpacity onPress={()=>{decrement()}}>
              <SimpleLineIcons 
              name='minus' size={20}
              />
            </TouchableOpacity>
      


        </View>

        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Description</Text>

          <Text style={styles.descText}>
         {item.description}
          </Text>

        </View>
        <View style={{marginBottom: SIZES.small}}>
          <View style={styles.location}>
            <View style={{flexDirection: 'row'}}>
              <Ionicons style={{ color: COLORS.black}} name='locate-outline' size={20}/>
              <Text style={{ color: COLORS.black}}>{item.product_location}</Text>
             </View>
             <View style={{flexDirection: 'row', color: COLORS.black}}>
              <MaterialCommunityIcons style={{ color: COLORS.black}} name='truck-delivery-outline' size={20}/>
              <Text style={{ color: COLORS.black}} > Free Delivery</Text>
             </View>

          </View>

        </View>
        
      <View style={styles.cartRow}>
        <TouchableOpacity onPress={()=>{}} style={styles.cartBtn}>
          <Text style={styles.cartTitle}>  Buy Now </Text>

        </TouchableOpacity>
     
        <TouchableOpacity onPress={()=>{}} style={styles.addCart}>
          <Fontisto name="shopping-bag" size={22} color={COLORS.lightWhite}/>
        </TouchableOpacity>

      </View>
      </View>
    </ScrollView>
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
  },
  ratingText:{
    color: COLORS.gray,
    fontFamily: 'Poppins-Medium',
    paddingHorizontal: SIZES.xSmall

  },
  descriptionWrapper:{
    marginTop: SIZES.large*2,
    marginHorizontal: SIZES.large

  },
  description:{
    fontFamily: 'Poppins-Medium',
    fontSize: SIZES.large -2,
    color: COLORS.black
  },
  descText: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.small,
    textAlign: 'justify',
    marginBottom: SIZES.small,
    color: COLORS.black
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.secondary,
    padding: 5,
    color: COLORS.black
  },
  cartRow:{
    paddingBottom: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SIZES.width
  },
  cartBtn:{
    width: SIZES.width *0.7,
    backgroundColor: COLORS.black,
    padding: SIZES.small/2,
    borderRadius: SIZES.large,
    marginLeft: 12
  },
  cartTitle:{
    marginLeft: SIZES.small,
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.medium,
    color: COLORS.lightWhite
  },
  addCart: {
    width: 37,
    height: 37,
    borderRadius: 50,
    margin: SIZES.small,
    backgroundColor: COLORS.black,
    alignItems: 'center',
    justifyContent: "center"

  }

})