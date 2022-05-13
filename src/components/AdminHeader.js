import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Colors from '../colors/Colors';
 import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomHeader = props => {
    return(
        <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
            <Text style={{fontSize:18, fontWeight:'bold', color:Colors.lightColor, marginLeft:10}}>
                {props.title}
            </Text>

            <TouchableOpacity onPress={()=>props.drawer.openDrawer()}>
                <Ionicons name={"ios-menu-outline"} color={Colors.lightColor} size={35}/>
            </TouchableOpacity>
        </View>
    );
};

export default CustomHeader;