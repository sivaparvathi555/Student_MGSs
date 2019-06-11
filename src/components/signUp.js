import React, {Component} from 'react';
import { StyleSheet, Text,TextInput,TouchableOpacity,ScrollView,FlatList,TouchableHighlight,Image,View, Switch,Keyboard} from 'react-native';
import { Item, Input } from 'native-base';
import Icon from 'react-native-ionicons';
import FormData from 'FormData';
import Hr from "react-native-hr-component";
import AsyncStorage from '@react-native-community/async-storage';
import {    Picker  } from 'native-base';
import DatePicker from 'react-native-datepicker';



export default class signUp extends Component<Props> {
  static navigationOptions = {
       header: null,
    };
  constructor(props)
  {
    super(props);
    this.SignUp = this.SignUp.bind(this);
    this.state =
            {
              showPassword: true,
              firstname: '',
              middlename :'',
              lastName :'',
              day: '',
              mon :'',
              year :'',
              email: '',
              password:'',
              deviceType:'android',
              deviceToken:'Testing',
              regType:'direct',
              icEye: 'visibility-off',
              selected1: '',
              selected2: '',
              selected3: '',
              
            };

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
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }


  SignUp = async () =>
    {

        await AsyncStorage.setItem('password',this.state.password)
      
        const {firstname,lastName,email,day,mon,year,password} = this.state;
        let reg = /^[a-zA-Z0-9 ](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9 ]){3,76}[a-zA-Z0-9 ]*$/;
        let reg1 = /^(\+\d{1,3}[- ]?)?\d{10}$/;
        let reg2 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let reg3 = /^.*(?=.{6,20})(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9!@#$%]+$/

        if(firstname=="")
        {
          this.setState({field:'Please enter first Name'})
        }
        else if(reg.test(firstname) === false)
        {
            this.setState({field:':#?@&%/ are not allowed and should enter 3-76 characters in the name'})
            return false;
        }
        else if(lastName=="")
        {
          this.setState({field:'Please enter last name'})
        }
        
        // else if(day=="")
        // {
        //   this.setState({field:'Please select date'})
        // }
        // else if(mon=="")
        // {
        //   this.setState({field:'Please select Month'})
        // }
        // else if(year=="")
        // {
        //   this.setState({field:'Please select year'})
        // }

        else if(reg.test(lastName) === false)
        {
            this.setState({field:'not allowed'})
            return false;
        }
        else if(email=="")
        {
          this.setState({field:'Please enter Email Id'})
        }
        else if(reg2.test(email) === false)
        {
            this.setState({field:'Please enter valid Email Id'})
            return false;
        }
        else if(password=="")
        {
          this.setState({field:'Please enter Password'})
        }
        else if(reg3.test(password) === false)
        {
            this.setState({field:'Password should contain at least one numeric digit,one alphabet and length of 6-20'})
            return false;
        }

        else
        {
          alert(success)
          this.setState({field:''})
        }

    }

  render() {
    return (

        <View style={{flex:1}}>
               <ScrollView>
                  <View style={styles.container}>
                      <View style={{marginBottom:20}}>
                            <Text style={styles.signInText}>Create an account</Text>
                      </View>
                      <View> 
                        <View style ={{flexDirection :'row',justifyContent :'space-between'}}>
                          <TextInput
                            placeholder="First Name"
                            style={styles.inputField}
                            onChangeText={(text) => this.setState({firstname:text})}
                            value={this.state.firstname}
                            returnKeyType = { "next" }
                            onSubmitEditing={() => { this.mobileNumber.focus(); }}
                            blurOnSubmit={false}
                          />
                          <TextInput
                            placeholder="Middle Name"
                            style={styles.inputField}
                            onChangeText={(text) => this.setState({middlename:text})}
                            value={this.state.middlename}
                            returnKeyType = { "next" }
                            onSubmitEditing={() => { this.mobileNumber.focus(); }}
                            blurOnSubmit={false}
                          />
                          <TextInput
                            placeholder="Last Name"
                            style={styles.inputField}
                            onChangeText={(text) => this.setState({lastName:text})}
                            value={this.state.lastName}
                            returnKeyType = { "next" }
                            onSubmitEditing={() => { this.mobileNumber.focus(); }}
                            blurOnSubmit={false}
                          />
                          </View>
                          <View>
                              <Text style={{marginBottom :10,fontFamily:"TwCenMTStd",fontSize:20}}>Birthday</Text>
                          </View>
                          <View style={styles.mobileWrapper}>
                              <View style={styles.mobileText1}>

                                 <Picker
                                    note
                                    mode="dropdown"
                                    returnKeyType = { "next" }
                                    selectedValue={this.state.selected1}
                                    onValueChange={(itemValue, itemIndex) => this.setState({selected1:itemValue})}>
                                    <Picker.Item label="Day" value="key0" />
                                    <Picker.Item label="1" value="key1" />
                                    <Picker.Item label="2" value="key2" />
                                    <Picker.Item label="3" value="key3" />
                                    <Picker.Item label="4" value="key4" />
                                    <Picker.Item label="5" value="key5" />
                                    <Picker.Item label="6" value="key6" />
                                    <Picker.Item label="7" value="key7" />
                                    <Picker.Item label="8" value="key8" />
                                    <Picker.Item label="9" value="key9" />
                                    <Picker.Item label="10" value="key10" />
                                    <Picker.Item label="11" value="key11" />
                                    <Picker.Item label="12" value="key12" />
                                    <Picker.Item label="13" value="key13" />
                                    <Picker.Item label="14" value="key14" />
                                    <Picker.Item label="15" value="key15" />
                                    <Picker.Item label="16" value="key16" />
                                    <Picker.Item label="17" value="key17" />
                                    <Picker.Item label="18" value="key18" />
                                    <Picker.Item label="19" value="key19" />
                                    <Picker.Item label="20" value="key20" />
                                    <Picker.Item label="21" value="key21" />
                                    <Picker.Item label="22" value="key22" />
                                    <Picker.Item label="23" value="key23" />
                                    <Picker.Item label="24" value="key24" />
                                    <Picker.Item label="25" value="key25" />
                                    <Picker.Item label="26" value="key26" />
                                    <Picker.Item label="27" value="key27" />
                                    <Picker.Item label="88" value="key28" />
                                    <Picker.Item label="29" value="key28" />
                                    <Picker.Item label="30" value="key30" />
                                    <Picker.Item label="31" value="key31" />
                                    
                                  </Picker>

                                
                              </View>
                                
                               <View style={styles.mobileText1}>

                                 <Picker
                                    note
                                    mode="dropdown"
                                    returnKeyType = { "next" }
                                    selectedValue={this.state.selected2}
                                    onValueChange={(itemValue, itemIndex) => this.setState({selected2:itemValue})}>
                                    <Picker.Item label="Month" value="key32" />
                                    <Picker.Item label="Jan" value="key41" />
                                    <Picker.Item label="Feb" value="key42" />
                                    <Picker.Item label="Mar" value="key43" />
                                    <Picker.Item label="Apr" value="key44" />
                                    <Picker.Item label="May" value="key45" />
                                    <Picker.Item label="Jun" value="key46" />
                                    <Picker.Item label="Jul" value="key47" />
                                    <Picker.Item label="Aug" value="key48" />
                                    <Picker.Item label="Sep" value="key49" />
                                    <Picker.Item label="Oct" value="key50" />
                                    <Picker.Item label="Nov" value="key51" />
                                    <Picker.Item label="Dec" value="key52" />
                                    
                                  </Picker>

                                
                              </View>
                                

                               <View style={styles.mobileText1}>

                                 <Picker
                                    note
                                    mode="dropdown"
                                    selectedValue={this.state.selected3}
                                    returnKeyType = { "next" }
                                    onValueChange={(itemValue, itemIndex) => this.setState({selected3:itemValue})}>
                                    <Picker.Item label="Year" value="key33" />
                                    <Picker.Item label="2010" value="key75" />
                                    <Picker.Item label="2011" value="key77" />
                                    <Picker.Item label="2019" value="key77" />
                                    <Picker.Item label="2012" value="key34" />
                                    <Picker.Item label="2013" value="key35" />
                                    <Picker.Item label="2014" value="key36" />
                                    <Picker.Item label="2015" value="key37" />
                                    <Picker.Item label="2016" value="key38" />
                                    <Picker.Item label="2017" value="key39" />
                                    <Picker.Item label="2018" value="key60" />
                                    <Picker.Item label="2009" value="key61" />
                                    <Picker.Item label="2008" value="key62" />
                                    <Picker.Item label="2007" value="key63" />
                                    <Picker.Item label="2006" value="key64" />
                                    <Picker.Item label="2005" value="key65" />
                                    <Picker.Item label="2004" value="key66" />
                                    <Picker.Item label="2003" value="key67" />
                                    <Picker.Item label="2002" value="key68" />
                                    <Picker.Item label="2001" value="key69" />
                                    <Picker.Item label="1995" value="key70" />
                                    <Picker.Item label="1996" value="key71" />
                                    <Picker.Item label="1997" value="key72" />
                                    <Picker.Item label="1998" value="key73" />
                                    <Picker.Item label="1999" value="key74" />
                                    
                                    
                                  </Picker>

                                
                              </View>
                                



                          </View>
                          <View style={{flexDirection:"row",marginBottom :10}}>
                                 <TextInput
                            placeholder="Email address"
                            style={styles.gmailField}
                            onChangeText={(text) => this.setState({email:text})}
                            value={this.state.email}
                            returnKeyType = { "next" }
                            onSubmitEditing={() => { this.mobileNumber.focus(); }}
                            blurOnSubmit={false}
                          />
                          </View>
                          
                          <View style={{flexDirection:"row"}}>
                                 <TextInput
                                    placeholder="New Password"
                                    style={styles.passwordField}
                                    secureTextEntry={this.state.showPassword}
                                    value={this.state.password}
                                    onChangeText={this.handlePassword}
                                    ref={(input) => { this.password = input; }}
                                  />
                                  <View style={styles.eyeView}>
                                    <TouchableOpacity onPress={this.changePwdType.bind(this)}>{this.pwdHideAndShow()}
                                    </TouchableOpacity>

                                  </View>
                          </View>
                          <View>
                              <TextInput
                                style={styles.textArea}
                                underlineColorAndroid="transparent"
                                placeholder="Address"
                                placeholderTextColor="#7f7f7f"
                                numberOfLines={4}
                                multiline={true}
                                maxLength = {1024}
                                value={this.state.value}
                                onChangeText={(value) => this.setState({value})}
                              />
                          
                          </View>
                          <View style ={{flexDirection :'row',marginBottom:15}}>
                          <TextInput
                            placeholder="City or Town"
                            style={styles.mobileText2}
                            
                            returnKeyType = { "next" }
                            onSubmitEditing={() => { this.mobileNumber.focus(); }}
                            blurOnSubmit={false}
                          />
                          </View>
                          <View style={{flexDiresction:"row",marginBottom :10}}>
                                 <TextInput
                                  placeholder="Pin Code"
                                  keyboardType={'phone-pad'}
                                  style={styles.mobileText2}
                                  maxLength = {6}
                                  onChangeText={(text) => this.setState({mobileNumber:text})}
                                  value={this.state.mobileNumber}
                                />
                          </View>

                          <View style={styles.mobileWrapper}>
                              <View style={styles.mobileText2}>

                                 <Picker
                                    note
                                    mode="dropdown"
                                    selectedValue={this.state.selected1}
                                    returnKeyType = { "next" }
                                    onValueChange={(itemValue, itemIndex) => this.setState({selected1:itemValue})}>
                                    <Picker.Item label="State" value="states" />
                                    <Picker.Item label="Andhra Pradesh" value="AP" />
                                    <Picker.Item label="Delhi" value="delhi" />
                                    <Picker.Item label="Kerala" value="kerala" />
                                    <Picker.Item label="Telangana" value="Telangana" />
                                    <Picker.Item label="Tamilnadu" value="Tamilnadu" />
                                    <Picker.Item label="Uttar Pradesh" value="Uttar Pradesh" />
                                    <Picker.Item label="Rajastan" value="Rajastan" />
                                    <Picker.Item label="Maharstra" value="Maharstra" />
                                    <Picker.Item label="West Bengal" value="West Bengal" />
                                    <Picker.Item label="Punjab" value="Punjab" />
                                    <Picker.Item label="Madhya Pradesh" value="mp" />
                                    <Picker.Item label="Bihar" value="Bihar" />
                                    <Picker.Item label="Haryana" value="Haryana" />
                                    <Picker.Item label="Odissa" value="odissa" />
                                    <Picker.Item label="Goa" value="Goa" />
                                    
                                  </Picker>

                                
                              </View>
                              </View>





                        <Text style={styles.errorText}>{this.state.field}</Text>
                        <View style={styles.signInBtn}>
                                  <TouchableOpacity onPress={this.SignUp} >
                                    <Text style={styles.signInBtnText}>SIGN UP</Text>
                                  </TouchableOpacity>
                        </View>


                        
                    </View>
                </View>
                </ScrollView>
                <TouchableOpacity style={styles.signInBtn2} onPress={() => this.props.navigation.navigate('signIn')}>
                    <View style={styles.loginWrapper}>
                        <Text style={styles.signInBtnText2}>Already have an Account?</Text>
                        <View>
                            <Text style={styles.signInBtnText2}>  Login</Text>
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
   textArea:
  {
    borderColor: '#dadada',
    fontSize:16,
    
    borderRadius:5,
    color:"#7f7f7f",
    textAlignVertical: 'top',
    borderWidth: 1,
    fontFamily:"TwCenMTStd",
    marginBottom:17,
    paddingLeft:10
  },
inputField:
  {
    borderColor: '#dadada',
    fontSize:15,
    
    borderWidth: 1,
    fontFamily:"TwCenMTStd",
    marginBottom:10,
    width:'32%',
    borderRadius :5,

  },
  gmailField:
  {
    borderColor: '#dadada',
    fontSize:15,
    borderWidth: 1,
    fontFamily:"TwCenMTStd",
    marginBottom:10,
    width :'100%',
    borderRadius :5,
  },

 
errorText:
  {
    marginLeft:'auto',
    marginRight:20,
    color:"red",
    fontFamily:'TwCenMTStd'
  },
  signInText:
  {
    fontSize:25,
    color:"#363f4d",
    fontFamily:"TwCenMTStd-Bold",
  },
  mobileWrapper:
  {
    flexDirection:"row",
    
    marginBottom:15,
      },
 mobileText1:
  {
    borderColor: '#dadada',
    fontSize:18,
    
    fontFamily:"TwCenMTStd",
    width:"26%",
    borderWidth:1,
    borderRadius :2,


  },
  
  mobileText2:
  {
    borderColor: '#dadada',
    fontSize:15,
    borderWidth: 1,
    fontFamily:"TwCenMTStd",
    width:"100%",
        borderRadius :5,


  },
  passwordField:
  {
    borderColor: '#dadada',
    fontSize:18,
    borderWidth: 1,
    fontFamily:"TwCenMTStd",    
    width:"100%",
    marginBottom:20,
    borderRadius :5,
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
    marginTop:20,
    marginBottom:20
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

  alignItems:'center',

  },
  signInBtn2:
  {
    backgroundColor:"#7e5bef"
  },
  signInBtnText2:
  {
    fontSize:16 ,
    color:'#fff',
    textAlign:"center",
    fontFamily:"TwCenMTStd",
    bottom : 0,
  },
});
