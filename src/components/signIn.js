import React from 'react';
import { StyleSheet, Text,TextInput,Button,TouchableOpacity,ScrollView,FlatList,TouchableHighlight,Image,View,AsyncStorage,Keyboard} from 'react-native';
import FormData from 'FormData';
import Icon from 'react-native-ionicons';
import {   Item, Picker  } from 'native-base';


const ACCESS_TOKEN = 'access_token';

export default class signIn extends React.Component {
  static navigationOptions = {
       header: null,
    };
    constructor(props)
    {
    super(props);
    this.state =
      {
          showPassword: true,
          mobileNumber: '',
          name :'',
          password:'',
                    
          icEye: 'visibility-off',
          selected: "key1",
          

        }
    }
    saveData =() =>{
      const {name,password} =this.state;
      let array ={
         name :name,
        password :password,
      }
      AsyncStorage.setItem('array',JSON.stringify(array));
      alert('Your data successfully stored');
      Keyboard.dismiss();
   }
   showData =async()=>{
      let array =await AsyncStorage.getItem('array');
      let d = JSON.parse(array);
      alert('Stored data is:'+d.name+' '+d.password);
   }
  changePwdType = () => {
        let newState;
        if (this.state.showPassword)
         {
            newState =
            {
                icEye: 'visibility',
                showPassword: false,
                password: this.state.password
            }
        } else
        {
            newState =
            {
                icEye: 'visibility-off',
                showPassword: true,
                password: this.state.password
            }
        }
        this.setState(newState)
    };
  handlePassword = (password) =>
    {
        let newState = {
            icEye: this.state.icEye,
            showPassword: this.state.showPassword,
            password: password
        }
        this.setState(newState);
    };
     onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

pwdHideAndShow() {
    if (this.state.showPassword == false) {
      return (
        <Icon name='eye' size={24} color={'#999999'}  onPress={this.changePwdType}/>
      )
    } else if (this.state.showPassword == true) {
      return (
        <Icon name='eye-off' size={24} color={'#999999'}  onPress={this.changePwdType}/>

      )
    }
  }
  

 render()
 {
   return(
      <View style={{flex:1}}>
               <ScrollView>
                  <View style={styles.container}>
                      <View style={{marginBottom:60}}>
                            <Text style={styles.signInText}>SIGN IN WITH</Text>
                            <Text style={styles.signInText}>YOUR</Text>
                            <Text style={styles.signInText}>ACCOUNT</Text>
                      </View>
                      <View>

                          <View style={styles.mobileWrapper}>
                              <View style={styles.mobileText1}>
                                                            
                                
                                <TextInput
                                    style={styles.formInput}
                                    placeholder="Name"
                                    onChangeText={name =>this.setState({name})}
                                    returnKeyType = { "next" }
                                    blurOnSubmit={false}

                                />


                                </View>

                          </View>
                          <View style={{flexDirection:"row"}}>
                                 <TextInput
                                    placeholder="Password"
                                    placeholderTextColor="#A9A9A9"

                                    style={styles.passwordField}
                                    secureTextEntry={this.state.showPassword}
                                    onChangeText={password =>this.setState({password})}
                                    
                                  />
                                  <View style={styles.eyeView}>
                                        <TouchableOpacity onPress={this.changePwdType.bind(this)}>{this.pwdHideAndShow()}
                                    </TouchableOpacity>
                                  </View>
                          </View>
                          <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                                  <Text style={styles.forgotText}>Forgot Password?</Text>
                          </TouchableOpacity>
                          
                          <Button
                              style={styles.formButton}
                              onPress ={this.saveData}
                              title="saveData"
                              color="#2196f3"
                                                         />
                          <Button
                              style={styles.formButton1}
                              onPress ={this.showData}
                              title="showData"
                              color="green"
                           />
                      
                      

                    </View>


                </View>
                 </ScrollView>
                <TouchableOpacity style={styles.signInBtn2} onPress={() => this.props.navigation.navigate('signUp')}>
                    <View style={styles.loginWrapper}>
                        <Text style={styles.signInBtnText2}>Not an Account?</Text>
                        <View >
                            <Text style={styles.signInBtnText2}>  Sign Up</Text>
                        </View>
                    </View>
                </TouchableOpacity>
               

      </View>

   );
 }
}
const styles = StyleSheet.create({
  container:
  {
    padding:30
  },
  formButton: {
    borderWidth: 1,
    borderColor: "#555555",
    
  },
  formButton1: {
    borderWidth: 1,
    borderColor: "#555555",
    
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    marginTop: 5,
  },
  signInText:
  {
    fontSize:25,
    color:"#363f4d",
    fontFamily:"TwCenMTStd-Bold",
  },
   formInput: {
    paddingLeft: 5,
    height: 50,
    borderWidth: 1,
    borderColor: '#dadada',
    borderRadius:2
  },
  forgotText:
  {
    fontSize:18,
    color:"#7f7f7f",
    fontFamily:"TwCenMTStd",
    marginTop:20,
    marginBottom:40
  },
  mobileWrapper:
  {
    flexDirection:"row",
    
    marginBottom:20
  },
  mobileText1:
  {
    borderColor: '#dadada',
    borderBottomWidth: 1,
    fontSize:18,
    fontFamily:"TwCenMTStd",
    width:"100%",
  },
  mobileText2:
  {
    borderColor: '#dadada',
    
    fontSize:18,
    
    fontFamily:"TwCenMTStd",
  },
  passwordField:
  {
    borderColor: '#dadada',
    fontSize:18,
    borderWidth: 1,
    fontFamily:"TwCenMTStd",
    width:"100%",
    marginBottom:20,
    borderRadius:2,
  },
  eyeView:
  {
    marginLeft:'auto',
    marginTop:18,
    marginRight:10,
  },
  signInBtn:
  {
    backgroundColor:"#33cbf6",
    borderRadius:5,
  },
  signInBtnText:
  {
    fontSize:20 ,
    color:'#fff',
    textAlign:"center",
    padding:5,
    fontFamily:"TwCenMTStd"
  },
  loginWrapper:
  {
    flexDirection:"row",
    justifyContent:"center",
    padding:15,
  },
  signInBtn2:
  {
    backgroundColor:"#6740f2",
  },
  signInBtnText2:
  {
    fontSize:16 ,
    color:'#fff',
    textAlign:"center",
    fontFamily:"TwCenMTStd"
  },

});
