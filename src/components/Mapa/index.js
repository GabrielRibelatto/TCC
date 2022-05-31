import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity  } from 'react-native';
import React, { useEffect, useState } from "react";

import MapView, {Marker} from "react-native-maps";
import * as Location from 'expo-location';




export default function Mapa() {

    const [location, setLocation] = useState(null);
    const [marker, setMarker] = useState([]);
  
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.log('Permission to acess location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    }, []);
  
    const handleNewMarker = (coordinate) => {
      setMarker([...marker, coordinate]);
  
    }
    const [titulo , setTitulo] = useState();
    const [descricao, setDescricao] = useState();
    return (
      <View style={styles.container}>
        <MapView 
          onPress={(e) => handleNewMarker(e.nativeEvent.coordinate)}
          style={styles.map} 
          initialRegion={{
            latitude: -22.35453,
            longitude: -47.38647,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}
        showsUserLocation
        loadingEnabled
        mapType='terrain'
        >
          {marker.length > 0 && 
            marker.map((m) => {
              return <Marker coordinate={m} key={Math.random().toString()}/>;            
            })}
        </MapView>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
    },
    map: {
      flex: 1,
    },
});