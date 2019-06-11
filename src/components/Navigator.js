import { createStackNavigator,createAppContainer } from 'react-navigation';

import signUp from './signUp';
import signIn from './signIn';

import Home from './Home';

// import asss_ex from './asss_ex';




 const Navigator = createStackNavigator
(	{

		signUp: { screen: signUp },
		signIn:{screen: signIn},
		Home :{screen :Home},

		
		
		


	
	},
	{
    	initialRouteName: 'Home',
  	}

);

export default  createAppContainer(Navigator);
