import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react' 
import successfullimage from '../../assets/icons/successfull-icons.png'


const Successfully = ({navigation}) => {
  return (
    <SafeAreaView style={styles.ContainerSafeView}>
        <StatusBar backgroundColor="#F9F9F9" barStyle="dark-content" />
        <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}>
            <View style={styles.ContainerWelcome}> 
                <Text style={styles.MainHeading}>Successfully</Text>
                <Text style={styles.subTextTitle}>Your password has been updated, please change your password regularly to avoid this happening</Text>
            </View>
            <View style={{marginVertical:48}}>
                <Image source={successfullimage} resizeMode='contain' style={{width:150, height:150, alignSelf:'center'}} />
            </View>
            <View>  
                <View>
                    <TouchableOpacity style={styles.LoginBtn} activeOpacity={0.7} onPress={() => navigation.navigate('check your email')}>
                        <Text style={{color:'#fff', fontSize:16, fontWeight:'600'}}>Continue</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.LoginGoogleBtn} activeOpacity={0.7} onPress={() => navigation.navigate('logged in')}> 
                        <Text style={{color:'#4EC133', fontSize:16, fontWeight:'600'}}>Back to Login</Text>
                    </TouchableOpacity>
                </View> 
            </View> 
        </ScrollView>
    </SafeAreaView>
  )
}

export default Successfully

const styles = StyleSheet.create({
    ContainerSafeView:{
        flex:1, backgroundColor:'#F9F9F9',
        padding:15
    },
    ContainerWelcome:{
        paddingVertical:20,
        marginBottom:15
    },
    MainHeading:{
        textAlign:'center',
        fontSize:30,
        fontWeight:'700',
        color:'#000',
        marginBottom:10
    },
    subTextTitle:{
        textAlign:'center',
        lineHeight:22,
        fontSize:15,
        color:'#524B6B',
        fontWeight:'500'
    },   
    forTextPass:{
        fontSize:16,
        fontWeight:'500',
        color:'#4EC133'
    },
    LoginBtn:{
        backgroundColor:'#4EC133',
        height:50,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        marginVertical:15
    },
    LoginGoogleBtn:{
        backgroundColor:'#4ec1333b',
        height:50,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        marginVertical:15,
        gap:15
    }, 
})