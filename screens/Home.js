import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import styles from './Home.Style'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Welcome from './Welcome'
import Carousel from '../components/home/Carousel'
import Headings from '../components/home/Headings'
import ProductRow from '../components/products/ProductRow'

const Home = () => {
  return (
   <SafeAreaView>
     <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 80 }} showsVerticalScrollIndicator={true} >
    <View style={styles.appBarWrapper}>
      <View style={styles.appBar}>
        <Ionicons name='location-outline' size={24} />
        <Text style={styles.location}>Shangai China</Text>
         <View style={{alignItems: 'flex-end'}}>
          <View style={styles.cartCount}>
            <Text style={styles.cartNumber}>8</Text>
            <TouchableOpacity>
             <Fontisto name="shopping-bag" size={28}  />
            </TouchableOpacity>
        


          </View>

         </View>
      </View>

    </View>
   
      <Welcome />
      <Carousel />
      <Headings />
      <ProductRow />
    </ScrollView>
   </SafeAreaView>
  )
}

export default Home