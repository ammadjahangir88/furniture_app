import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../assets/constants'
import ProductCardView from './ProductCardView'

const ProductRow = () => {
    const products = [1, 2, 3, 4]
    return (
        <View style={{marginTop:SIZES.medium}}>
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductCardView />}
                horizontal
                contentContainerStyle={{ columnGap: SIZES.medium }}
            />
        </View>
    )
}

export default ProductRow

const styles = StyleSheet.create({

})