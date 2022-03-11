import React, { useState } from 'react';
import {Text, View, Image, useWindowDimensions, UseState, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../../../colors/Colors';


const ItemDetailShow = props =>{
    const window = useWindowDimensions();
    const [detail, setDetail] = useState({
        about: 'This breakfast is prepared by maadi, and it is very great for health',

    });
    return(
        <ScrollView style={{flex:1, backgroundColor:'#e0e0e0'}}>
            {/* first container */}
            <View style={{width:'100%', backgroundColor:'#fff', paddingBottom:5, borderBottomEndRadius:10, borderBottomStartRadius:10}}>
                {/* cover photo */}
                <View style={{ width:'100%'}}>
                    <Image source={require('../../../../images/breakfast.jpg')} style={{resizeMode:'stretch', width:'100%', height:200,}}/>
                </View>        
                
                {/* name */}
                <View style={{justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                    <Text style={{color:'black', fontSize:20, fontStyle:'italic'}}>BreakFast</Text>
                </View>
            </View>
            
            {/* container for Description*/}
            <View style={{width:'100%', backgroundColor:'#fff', borderRadius:10, marginTop:7, padding:10}}>
                <Text style={{color:'black', fontSize:18, fontWeight:'bold', marginBottom:5}}>Description</Text>
                <Text style={{color:'black', fontSize:15, lineHeight:20}} >{detail.about}</Text>
            </View>

            {/* container for Items*/}
            <View style={{width:'100%', backgroundColor:'#fff', borderRadius:10, marginTop:7, padding:10}}>
                <Text style={{color:'black', fontSize:18, fontWeight:'bold', marginBottom:5}}>Items</Text>
                <Text style={{color:'black', fontSize:15, lineHeight:20}} >{detail.about}</Text>
            </View>
        </ScrollView>

    );
};

export default ItemDetailShow;