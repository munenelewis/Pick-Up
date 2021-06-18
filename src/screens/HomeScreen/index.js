import { StyleSheet, Text, View } from 'react-native'

import CovidMessage from '../../component/CovidMessage'
import HomeMap from '../../component/map'
import HomeSearch from '../../component/HomeSearch'
import React from 'react'

const HomeScreen = () => {
    return (
        <View >
            <HomeMap />
            <CovidMessage />
            <HomeSearch />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
