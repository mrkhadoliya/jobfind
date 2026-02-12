import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import logo from '../assets/logo/logo.png'


const Splash = ({navigation}) => {
  return (
    <SafeAreaView style={styles.SafeAreaViewContainer}>
        <StatusBar backgroundColor="#fff" barStyle={'light-content'} />
        <TouchableOpacity onPress={() => navigation.navigate('onboard splash')}>
            <View style={{marginBottom:10, alignItems:'center', justifyContent:'center',}}>
                <Image source={logo} style={styles.LogoImage} resizeMode='contain' />
            </View> 
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Splash

const styles = StyleSheet.create({
    SafeAreaViewContainer: {
        backgroundColor:'#fff',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:15,
        paddingVertical:15,
    },
    LogoImage:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        aspectRatio:0.4
    }, 

})