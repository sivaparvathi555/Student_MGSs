import React, {Component} from 'react';

import Navigator from './src/components/Navigator';


type Props = {};
export default class App extends Component<Props> {
  static navigationOptions = {
       header: null,
    };
  
  render() {
    return <Navigator />;
  }
}

