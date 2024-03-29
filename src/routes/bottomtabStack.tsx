import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { Text, Spacer } from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DashboardStack from './homeStack';
import { FindMyCar } from '../features/findmycar';
import { Profile } from '../features/profile';
// import { StyleSheet } from 'react-native';

import CustomTab from './customtab';
const Tab = createBottomTabNavigator();

export const TabNavigator: React.FC = () => {
    return (
        <Tab.Navigator
            screenOptions={() => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarVisible: false,
                tabBarStyle: {
                    backgroundColor: '#FFF',
                    // position: 'absolute',
                    // bottom: 25,
                    // left: 20,
                    // right: 20,
                    // borderRadius: 15,
                    // height: 90,
                    // ...styles.shadow,
                },
                tabBarInactiveTintColor: 'lightgray',
                tabBarActiveTintColor: '#FED94D',
            })}>
            <Tab.Screen
                name='Dashboard'
                component={DashboardStack}
                options={() => ({
                    tabBarIcon: ({ focused, color, size }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 15 }}>
                            <Ionicons name='home-outline' color={color} size={size} />
                            <Spacer size='sm' />
                            <Text variant='body' style={{ color: focused ? '#FED94D' : 'lightgray' }}>
                                Home
                            </Text>
                        </View>
                    ),
                })}
            />
            <Tab.Screen
                name='FindMyCar'
                component={FindMyCar}
                options={{
                    // tabBarBadge: 3,
                    tabBarIcon: ({ color, size }) => <FontAwesome name='shopping-bag' color={color} size={size} />,
                    tabBarButton: (props) => <CustomTab {...props} />,
                }}
            />
            <Tab.Screen
                name='Profile'
                component={Profile}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 15 }}>
                            <FontAwesome name='user-circle' color={color} size={size} />
                            <Spacer size='sm' />
                            <Text variant='body' style={{ color: focused ? '#FED94D' : 'lightgray' }}>
                                Profile
                            </Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

// const styles = StyleSheet.create({
//     shadow: {
//         shadowColor: '#7F5DF0',
//         shadowOffset: {
//             width: 0,
//             height: 10,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.5,
//         elevation: 5,
//     },
// });
