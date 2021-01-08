import React from 'react';
import {
    Text,
    TouchableOpacity
} from 'react-native';
import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';

const LOCATION_TASK_NAME = 'background-location-task';

export default class HomeScreen extends React.Component {
    componentDidMount(){
        this.onPress()
    }

    onPress = async () => {
        const { status } = await Location.requestPermissionsAsync();
        if (status === 'granted') {
          await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
            accuracy: Location.Accuracy.Balanced,
            timeInterval: 1
          });
        }
      };
    
      render() {
        return (
          <Text>Tracking Enabled</Text>
        );
      }
}

TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
    if (error) {
      // Error occurred - check `error.message` for more details.
      console.log(error);
      return;
    }
    if (data) {
      const { locations } = data;
      // do something with the locations captured in the background
      console.log(locations);
    }
  });