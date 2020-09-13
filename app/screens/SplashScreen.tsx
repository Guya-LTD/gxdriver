import React from 'react';
import { 
    StyleSheet, 
    View, 
    Image,
    Text 
    }from 'react-native';

const SplashScreen = () => {
    return (
        <View style = {styles.container}>
            <Image 
                source = {{}}
            />
            <Text style = {styles.pathText}>
                Heloo
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    pathText: {
        flex: 2,
        justifyContent: 'flex-end'
    }
  });
  


export default SplashScreen;