import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../assets/constants'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {
    const navigation=useNavigation()
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.welcomeTxt(COLORS.black, SIZES.xSmall)}> {" "}Find The Most</Text>

                <Text style={styles.welcomeTxt(COLORS.primary, 0)}> {" "}Luxurious Furniture</Text>
            </View>
            <View style={styles.searchContainer}>
             <TouchableOpacity>
                 <Feather name="search" size={24} style={styles.searchIcon}          />
             </TouchableOpacity>
             <View style={styles.searchWrapper}>
                <TextInput  
                value=''
                onPressIn={()=>navigation.navigate("Search")}
                style={styles.searchInput}
                placeholder='What are you Looking for'
                />
                

            </View>
            <View>
                    <TouchableOpacity style={styles.searchBtn}>
                        
                        <Ionicons name='camera-outline' size={SIZES.xLarge} color={COLORS.offwhite} />
                    </TouchableOpacity>
                </View>
            </View>
               
          
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        width: '100%',

    },
    welcomeTxt: (color, top) => ({
        fontFamily: 'Poppins-Bold',
        fontSize: SIZES.xxLarge - 7,
        marginTop: top,
        color: color
    }),
    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.medium,
        marginVertical: SIZES.medium

    },
    searchIcon: {
        marginHorizontal: 10,
        color: COLORS.gray
    },
    searchWrapper:{
        flex: 1,
        
        backgroundColor: COLORS.secondary,
        marginRight:SIZES.small,
        borderRadius: SIZES.small,
    },
    searchInput:{
        fontFamily: 'Poppins-Regular',
        width: '100%',

        paddingHorizontal: SIZES.small
    },
    searchBtn:{
        width:50,
       
        borderRadius: SIZES.medium,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: COLORS.primary
    }
})