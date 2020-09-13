import React from 'react';
import {
    Text,
    View
} from 'react-native';


export default class MainScreen extends React.Component {
    render() {
        return (
            <View
                style = {{
                    flex: 1,
                    backgroundColor: '#000',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Text style = {{ color: '#fff' }}>Some Random Text</Text>
                
            </View>
        )
    }
}