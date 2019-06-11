import React from 'react';
import { StyleSheet, Text,TextInput,Button,TouchableOpacity,ScrollView,FlatList,TouchableHighlight,Image,View} from 'react-native';

export default class Home extends React.Component {
  static navigationOptions = {
       header: null,
    };
    
  

 render()
 {
   return(
   	
   	<View style ={styles.container}>
   	
 

   		<View style={{flex:1,width:'100%',height:'100%'}}>
   		
   		</View>
   		<View style={{flex:1,width:'100%',height:'100%',marginTop:55,marginLeft:-70}}>
   			<Text style ={styles.textContent1}> Student_MGS </Text>
   			
   			
   		</View>
   		<View style={{flex:1,width:'100%',height:'100%'}}>
   			
   			<View style={{flexDirection:'row',marginTop:40}}>
   						<View style={styles.signBtn}>
                              <TouchableOpacity onPress={() => this.props.navigation.navigate('signIn')}>
                                    <Text style={styles.signBtnText}>LOG IN</Text>
                              </TouchableOpacity>
                      	</View> 
                      <View style={styles.signBtn}>
                              <TouchableOpacity onPress={() => this.props.navigation.navigate('signUp')}>
                                    <Text style={styles.signBtnText}>SIGN UP</Text>
                              </TouchableOpacity>
                      	</View>
   			
   			</View>
   		</View>
   		
   		
   	</View>
   	
    
   );	
 }
}
const styles = StyleSheet.create({
  container: {
        
   flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue',width:'100%'
  },
  textContent1:{
  	fontSize :40,
  	fontWeight :'bold',
  	color:'white',
  	marginLeft :'27%',
  	marginTop:30,
  	

  },
  textContent:{
  	fontSize :40,

  	marginTop:-15,
  	color:'white',
  	marginLeft :'25%',
  	

  },
  signBtn:
  {   
    
  
    borderRadius:20,
    marginLeft:"10%",
    borderWidth :0.5,
    marginTop:75,
   width:'43%',marginLeft:11,
   marginRight :14,

   


   
  },
 signBtnText:
  {
    fontSize:15 ,
    color:'#fff',
    textAlign:"center",
    padding:10,
     fontFamily:"TwCenMTStd",
    
  },
});
