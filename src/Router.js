import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Profile from './pages/Profile/Profile';
import ProfileEdit from './pages/Profile/ProfileEdit';

import Member from './pages/Member/Member';
import MemberDetail from './pages/Member/MemberDetail';
import MemberUpdate from './pages/Member/MemberUpdate';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ShowProfilePage = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileScreen" component={Profile} />
      <Stack.Screen name="ProfileEditScreen" component={ProfileEdit} />
    </Stack.Navigator>
  )
}

const ShowMemberPage = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='MemberScreen' component={Member} />
      <Stack.Screen name='MemberDetailScreen' component={MemberDetail} />
      <Stack.Screen name='MemberUpdateScreen' component={MemberUpdate} />
    </Stack.Navigator>
  )
}

export default function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Member'>
        {/* initialRouteName ile başlangıcta hangi sayfa ile baslaması gerektiğini söylüyoruz, default olarak sıraya göre en üstte olanı baz alır */}
        <Tab.Screen name="Profile" component={ShowProfilePage} />
        <Tab.Screen name="Member" component={ShowMemberPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


