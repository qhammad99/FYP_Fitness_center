import React, { useState } from 'react';
import {Text, View, Image, useWindowDimensions, UseState, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../../../colors/Colors';


const ItemDetailShow = props =>{
    const window = useWindowDimensions();

    return(
        <ScrollView style={{flex:1, backgroundColor:'#e0e0e0'}}>
            {/* first container */}
            <View style={{width:'100%', backgroundColor:'#fff', paddingBottom:5, borderBottomEndRadius:10, borderBottomStartRadius:10}}>
                {/* cover photo */}
                <View style={{ width:'100%'}}>
                    <Image source={props.route.params.image} style={{resizeMode:'stretch', width:'100%', height:200,}}/>
                </View>        
                
                {/* name */}
                <View style={{justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                    <Text style={{color:'black', fontSize:20, fontStyle:'italic'}}>{
                        props.route.params.item.workoutID != null
                        ?
                            props.route.params.item.workoutName
                        :
                        props.route.params.item.dietID != null
                        ?
                            props.route.params.item.dietName
                        :
                            props.route.params.item.extraName
                    }</Text>
                </View>
            </View>
            
            {/* container for Description*/}
            <View style={{
                width:'100%', 
                backgroundColor:'#fff', 
                borderRadius:10, 
                marginTop:7, 
                padding:10, 
                flexDirection:'row', 
                alignItems:'center'
            }}>
                <Text style={{color:Colors.darkColor, fontSize:15, fontWeight:'bold'}}>Category: </Text>
                <Text style={{color:'black', fontSize:14}} >{
                    props.route.params.item.category
                }</Text>
            </View>

            {/* container for Items*/}
            <View style={{width:'100%', backgroundColor:'#fff', borderRadius:10, marginTop:7, padding:10}}>
                <Text style={{color:'black', fontSize:18, fontWeight:'bold', marginBottom:5}}>Items</Text>
                <Text style={{color:'black', fontSize:15, lineHeight:20}} >ok</Text>
            </View>
        </ScrollView>

    );
};

export default ItemDetailShow;