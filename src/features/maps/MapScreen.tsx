// import { View } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import Geolocation from '@react-native-community/geolocation';
// import MapView, { Marker } from 'react-native-maps';
// import { MAP_STYLES } from './MapScreen.styles';

// type Rationale = {
//     title: string;
//     message: string;
//     buttonPositive?: string;
//     buttonNegative?: string;
//     buttonNeutral?: string;
// };

// const MapScreen = () => {
//     const tokyoRegion = {
//         latitude: 35.6762,
//         longitude: 139.6503,
//         latitudeDelta: 0.01,
//         longitudeDelta: 0.01,
//     };
//     const [position, setPosition] = useState({
//         latitude: 10,
//         longitude: 10,
//         latitudeDelta: 0.001,
//         longitudeDelta: 0.001,
//     });

//     useEffect(() => {
//         Geolocation.getCurrentPosition((pos) => {
//             const crd = pos.coords;
//             console.log('LOCATION', crd);

//             setPosition({
//                 latitude: crd.latitude,
//                 longitude: crd.longitude,
//                 latitudeDelta: 0.0421,
//                 longitudeDelta: 0.0421,
//             });
//         });
//     }, []);
//     return (
//         <View style={{ ...MAP_STYLES.container }}>
//             <MapView
//                 style={{ left: 0, right: 0, top: 0, bottom: 0, position: 'absolute' }}
//                 initialRegion={tokyoRegion}
//                 showsUserLocation={true}
//                 showsMyLocationButton={true}
//                 followsUserLocation={true}
//                 showsCompass={true}
//                 scrollEnabled={true}
//                 zoomEnabled={true}
//                 pitchEnabled={true}
//                 rotateEnabled={true}
//                 mapType={'standard'}>
//                 <Marker coordinate={tokyoRegion} title='Yor are here' description='This is a description' />
//             </MapView>
//         </View>
//     );
// };

// export default MapScreen;
