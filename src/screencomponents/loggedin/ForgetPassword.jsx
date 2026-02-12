import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import fotergetimage from '../../assets/icons/forget-password-icon.png'


const ForgetPassword = ({navigation}) => {
  return (
    <SafeAreaView style={styles.ContainerSafeView}>
        <StatusBar backgroundColor="#F9F9F9" barStyle="dark-content" />
        <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}>
            <View style={styles.ContainerWelcome}> 
                <Text style={styles.MainHeading}>Forgot Password?</Text>
                <Text style={styles.subTextTitle}>To reset your password, you need your email or mobile number that can be authenticated</Text>
            </View>
            <View style={{marginVertical:48}}>
                <Image source={fotergetimage} resizeMode='contain' style={{width:150, height:150, alignSelf:'center'}} />
            </View>
            <View> 
                <View style={{marginBottom:15}}>
                    <Text style={styles.emailTExt}>Email</Text>
                    <View> 
                        <TextInput style={styles.InputType} placeholder='user@gmail.com' keyboardType='email-address' />
                    </View>
                </View>  
                <View>
                    <TouchableOpacity style={styles.LoginBtn} activeOpacity={0.7} onPress={() => navigation.navigate('check your email')}>
                        <Text style={{color:'#fff', fontSize:16, fontWeight:'600'}}>Reset Password</Text>
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

export default ForgetPassword

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
    emailTExt:{
        fontSize:15,
        fontWeight:'500',
        color:'#000'
    },
    InputType:{
        width:'100%', 
        marginVertical:10,
        paddingHorizontal:15,
        borderRadius:6,
        backgroundColor:'#fff',
        height:55,
        borderWidth:1,
        borderColor:'#F9F9F9',
        fontSize:15
    }, 
    EyeICONS:{
        position:'absolute',
        top:0,
        right:20,
        bottom:0,
        alignItems:'center',
        justifyContent:'center'
    },
    ForgotPasswordBTN:{
        alignSelf:'flex-end',
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
    TextSignUp:{
        textAlign:'center',
        fontSize:16
    },
})