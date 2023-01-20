import React from "react";
import { SafeAreaView, Text, Button } from 'react-native';

const ProfileEdit = ({ navigation }) => {

    const goToMemberPage = () => {
        navigation.navigate('Member', { screen: 'MemberScreen' })
        {/* Farklı tablar arasındaki ekranlara ulaşmak istersek bu şekilde ulaşabiliriz */ }

    }

    return (
        <SafeAreaView>
            <Text>ProfileEdit Page</Text>
            <Button title="Go To Member Page!" onPress={goToMemberPage} />
        </SafeAreaView>
    )
}

export default ProfileEdit;