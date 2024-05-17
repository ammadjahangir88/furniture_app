import { ActivityIndicator, Text, View, FlatList,StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../assets/constants'
import ProductCardView from './ProductCardView'
import useFetch from '../../hooks/useFetch'

const ProductRow = () => {
    const {data,isLoading,error}=useFetch()
    const products = [1, 2, 3, 4]
    return (
        <View>
      {isLoading ? (
            <ActivityIndicator size={SIZES.large} color={COLORS.primary} />
        ): error ? (
            <Text style={styles.errorText}>Something went wrong: {error.message}</Text>
        ): (
            <FlatList
            data={data}
            keyExtractor={(item)=>item._id}
            renderItem={({item})=> <ProductCardView item={item}/>}
            horizontal
            contentContainerStyle={{columnGap: SIZES.medium}}



            />
        )
      }
      
     </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1, // Adjust based on your layout needs
    },
    errorText: {
        color: COLORS.alert, // Ensure you have this color defined, or use a default color
        fontSize: SIZES.body2, // Ensure this size is defined, or use a default size
    },
    listContent: {
        paddingRight: 10, // Example to add spacing between items
    }
});

export default ProductRow

