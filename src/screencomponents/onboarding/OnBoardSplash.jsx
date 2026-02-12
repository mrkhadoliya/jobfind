import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import onboardImage from '../../assets/onboarding_img/onboarding-imgs.png'
import AntDesign from 'react-native-vector-icons/AntDesign'


const OnBoardSplash = ({navigation}) => {
  return (
    <SafeAreaView style={styles.Container}>
    <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View>
        <View>
          <Text style={styles.JobspotTitle}>Jobspot</Text>
        </View>
        <View style={styles.ImageContainer}>
          <Image source={onboardImage} style={styles.Image} resizeMode='contain' />
        </View>
          <View style={{marginTop:20}}>
            <Text style={styles.TitleMain}>Find Your <Text style={{color:'#4EC133', fontSize:45}}> Dream Job</Text> Here!</Text>
            <Text style={styles.SubTitle}>Explore all the most exciting job roles based on your interest and study major.</Text>
          </View>
          <View style={{alignSelf:'flex-end', marginTop:10}}>
            <TouchableOpacity onPress={() => navigation.navigate('logged in')} style={styles.TouchableOpacityButton}>
              <AntDesign name="arrowright" size={30} color="#fff" />
            </TouchableOpacity>
          </View>
      </View>
    </SafeAreaView>
  )
}

export default OnBoardSplash

const styles = StyleSheet.create({
  Container:{
    backgroundColor:'#fff',
    paddingHorizontal:15,
    paddingVertical:15,
    // padding:15,
    // paddingLeft:15,
    flex:1,
  },
  JobspotTitle:{
    textAlign:'right',
    fontSize:18,
    fontWeight:'700',
    color:'#000000'
  },
  ImageContainer:{ 
    width:'100%',
    height:300,
    marginVertical:50,
    alignSelf:'center',
    textAlign:'center',
    marginHorizontal:'auto',
  },
  Image:{
    width:'100%',
    height:'100%',
    aspectRatio:1
  },
  TitleMain:{
    fontSize:40,
    color:'#000',
    fontWeight:'700',
    lineHeight:50,
  },
  SubTitle:{
    fontSize:14,
    fontWeight:'500',
    color:'#524B6B',
    paddingVertical:10,
    lineHeight:20
  },
  TouchableOpacityButton:{
    width:60,
    height:60,
    backgroundColor:'#4EC133',
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center', 
  }
})