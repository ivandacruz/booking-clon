import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const PropertyInfoScreen = () => {
    const route = useRoute();
    console.log(route.params)
  return (
    <SafeAreaView>
      <Text>PropertyInfoScreen</Text>
    </SafeAreaView>
  )
}

export default PropertyInfoScreen

const styles = StyleSheet.create({})