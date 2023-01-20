import React from "react";
import { SafeAreaView, Text, Button } from 'react-native';

const MemberUpdate = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Text>MemberUpdate Page</Text>
            <Button title="Go To Profile Page!" onPress={() => navigation.navigate('Profile', { screen: 'ProfileScreen' })} />
            {/* Farklı tablar arasındaki ekranlara ulaşmak istersek bu şekilde ulaşabiliriz */}
        </SafeAreaView>
    )
}

export default MemberUpdate;