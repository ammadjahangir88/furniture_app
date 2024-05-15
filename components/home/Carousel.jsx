import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

const Carousel = () => {
    const images = [
        { uri: "https://source.unsplash.com/1024x768/?nature" },
        { uri: "https://source.unsplash.com/1024x768/?water" },
        { uri: "https://source.unsplash.com/1024x768/?girl" },
        { uri: "https://source.unsplash.com/1024x768/?tree" },
        require('../../assets/images/profile.jpeg'), // Ensure this image is correctly placed in your assets folder
    ];

    // Adjusting dimensions to use the full width and a fixed height
    const { width } = Dimensions.get('window');
    const itemHeight = height * 0.3; // 30% of screen height

    return (
        <View style={styles.container}>
            <SwiperFlatList
                autoplay
                autoplayDelay={2}
                autoplayLoop
                index={0}
                showPagination
                paginationStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', borderRadius: 5 }}
                paginationStyleItem={{ width: 18, height: 5, borderRadius: 5 }}
                paginationDefaultColor="white"
                paginationActiveColor="blue"
                data={images}
                renderItem={({ item }) => (
                    <View style={[styles.child, { height: itemHeight }]}>
                        <Image source={item} style={styles.image} />
                    </View>
                )}
                itemWidth={width} // Set itemWidth to full width of the screen
                itemHeight={itemHeight} // Optional if you want to control the height

            />
        </View>
    );
};

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    child: {
        width: width, // Set width to 100% of screen width
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '95%', // Ensure image fills the view
        height: '100%', // Ensure image fills the view
        resizeMode: 'cover', // Cover the entire area of view
        borderRadius: 16
    },
});

export default Carousel;
