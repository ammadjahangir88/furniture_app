import { View, Text, TouchableOpacity, ScrollView,StyleSheet,TextInput } from 'react-native'
import { COLORS, SIZES } from '../assets/constants'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import React from 'react'

const Search = () => {
  return (
    <View style={styles.searchContainer}>
      <TouchableOpacity>
        <Ionicons name="camera" size={24} style={styles.searchIcon} />
      </TouchableOpacity>
      <View style={styles.searchWrapper}>
        <TextInput
          value=''
          onPressIn={() => {}}
          style={styles.searchInput}
          placeholder='What are you Looking for'
        />


      </View>
      <View>
        <TouchableOpacity style={styles.searchBtn}>

          <Feather name='search' size={24} color={COLORS.offwhite} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
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
  searchWrapper: {
    flex: 1,

    backgroundColor: COLORS.secondary,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
  },
  searchInput: {
    fontFamily: 'Poppins-Regular',
    width: '100%',

    paddingHorizontal: SIZES.small
  },
  searchBtn: {
    width: 50,

    borderRadius: SIZES.medium,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary
  }
})