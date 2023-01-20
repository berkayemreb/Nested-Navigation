import React from "react";
import { SafeAreaView, Text, Button } from 'react-native';

const MemberDetail = ({ navigation }) => {
    return (
        <SafeAreaView>
            <Text>MemberDetail Page</Text>
            <Button title="Go To Member Update Page!" onPress={() => navigation.navigate('MemberUpdateScreen')} />
        </SafeAreaView>
    )
}

export default MemberDetail;