import React from "react";
import { SafeAreaView, Text, Button } from 'react-native';

const Profile = ({ navigation }) => {

    const goToProfileEditScreen = () => {
        navigation.navigate('ProfileEditScreen');
    }

    return (
        <SafeAreaView>
            <Text>Profile Page</Text>
            <Button title="Go To Profile Edit Page!" onPress={goToProfileEditScreen} />
        </SafeAreaView>
    )
}

export default Profile;