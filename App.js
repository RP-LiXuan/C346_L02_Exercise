import React from 'react';
import {View, Text} from 'react-native';

const Welcome = ({code, name})=> {
  return (
          <Text>Welcome to {code} - {name}</Text>
  );
};

class ModuleInfo extends React.Component {
    render() {
        return (
            <View>
                <Text></Text>
                <Text></Text>
                <Text>These are my modules this semester:</Text>
                <View style={{height:5}}/>
                <Welcome code="C346" name="Mobile App Development"/>
                <Welcome code="C105" name="Introduction to Programming"/>
                <Welcome code="C337" name="Immersive Technologies"/>
                <Welcome code="C300" name="Project"/>
            </View>
        );
    }
}

export default ModuleInfo;