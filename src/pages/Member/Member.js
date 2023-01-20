import React from "react";
import { SafeAreaView, Text, Button } from 'react-native';

const Member = ({ navigation }) => {

    const goToMemberDetail = () => {
        navigation.navigate('MemberDetailScreen');
    }

    const goToMemberUpdate = () => {
        navigation.navigate('MemberUpdateScreen');
    }

    return (
        <SafeAreaView>
            <Text>Member Page</Text>
            <Button title="Go To Member Detail Page!" onPress={goToMemberDetail} />
            <Button title="Go To Member Update Page!" onPress={goToMemberUpdate} />
        </SafeAreaView>
    )
}

export default Member;