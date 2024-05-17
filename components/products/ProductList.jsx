import {ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../assets/constants'
import ProductCardView from './ProductCardView'

const ProductList = () => {
    const {data,isLoading,error}=useFetch()
    console.log("Data is",data)
    if (isLoading){
        return(
            <View style={styles.loadingContainer}>
                <ActivityIndicator
                size={SIZES.xxLarge}
                color={COLORS.primary}       
                />

            </View>
        )
    }
  return (
    <View style={styles.container}>
      <FlatList
      data={data}
      numColumns={2}

      renderItem={(item)=>(<ProductCardView />)}
      contentContainerStyle={styles.container}
      ItemSeparatorComponent={()=> <View  style={styles.seperator}/>}



        />
    </View>
  )
}

export default ProductList

const styles = StyleSheet.create({
    loadingContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: "center"
    },
    container: {
        alignItems: 'center',
        paddingTop: SIZES.xxLarge,
        paddingLeft: SIZES.small/2
    },
    seperator:{
        height: 16
    }
})