import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react' 
import checkmailtimage from '../../assets/icons/mail-check_message_sent.png'


const CheckYourEmail = ({navigation}) => {
  return (
    <SafeAreaView style={styles.ContainerSafeView}>
        <StatusBar backgroundColor="#F9F9F9" barStyle="dark-content" />
        <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}>
            <View style={styles.ContainerWelcome}> 
                <Text style={styles.MainHeading}>Check Your Email</Text>
                <Text style={styles.subTextTitle}>We have sent the reset password to the email address brandonelouis@gmial.com</Text>
            </View>
            <View style={{marginVertical:48}}>
                <Image source={checkmailtimage} resizeMode='contain' style={{width:150, height:150, alignSelf:'center'}} />
            </View>
            <View>  
                <View>
                    <TouchableOpacity style={styles.LoginBtn} activeOpacity={0.7} onPress={() => navigation.navigate('successfully')}>
                        <Text style={{color:'#fff', fontSize:16, fontWeight:'600'}}>Open Your Email</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.LoginGoogleBtn} activeOpacity={0.7} onPress={() => navigation.navigate('logged in')}> 
                        <Text style={{color:'#4EC133', fontSize:16, fontWeight:'600'}}>Back to Login</Text>
                    </TouchableOpacity>
                </View> 
            </View>
            <View style={{marginTop:20}}>
                <Text style={styles.TextSignUp}>You have not received the email? <Text style={{color:'#4EC133', fontWeight:'600'}}>  Resend?</Text></Text>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default CheckYourEmail

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
    TextSignUp:{
        textAlign:'center',
        fontSize:16
    },
})