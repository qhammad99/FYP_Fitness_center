import React from 'react';
import {Text, View} from 'react-native';

const Settings = props =>{
    // in settings i am thinking to add notification on off
    // change language
    // share with friends
    // change password
    // we can also goal screen in drawer to change goal days or delete or restart goal
    return(
        <View style={{justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:'#000'}}>
                Settings
                in settings i am thinking to add notification on off
                change language
                share with friends
                change password
                delete account
                change name
                we can also goal screen in drawer to change goal days or delete or restart goal
            </Text>
        </View>
    );
};

export default Settings;