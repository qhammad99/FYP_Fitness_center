import React, {useState, useContext} from 'react';
import {
    Text, 
    View, 
    TextInput, 
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import { AuthContext } from '../../../Context/Providers/AuthProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';
import Colors from '../../../colors/Colors';
import Urls from '../../../config/env';
import axios from 'axios';

const InfoSignup = props =>{
    const authentication = useContext(AuthContext);
    const [price, setPrice] = useState(0);
    const [account, setAccount] = useState(0);
    const [years, setYears] = useState(0);
    const [loading, setLoading] = useState(false);

    const addInfoLocal = async()=>{
        let userObj;
        try{
            userObj= await AsyncStorage.getItem('USER');
        }catch(e){
            console.log("error in reading local storage: ", e);
        }
        userObj = JSON.parse(userObj)
        userObj = {...userObj, isParameters: 1}
        userObj = JSON.stringify(userObj);
    
        try{
            await AsyncStorage.setItem('USER', userObj);
        }catch(e){
            console.log("error in writing local storage: ", e);
        }
        authentication.dispatch({type:'ADD_LOCAL_DATA', payload:userObj});
    }

    const addInfo = async() => {
        let user = JSON.parse(authentication.state.user);
        let token = user.token;

        if(!loading)
            setLoading(true);
      
        var API_URL=Urls.CoachDetailAdd;
        axios.post(API_URL,{
            charges: price,
            coaching_experience: `${years} years`,
            account_number: account
        },{
            headers:{
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
            }
        })
        .then((response)=>{
            if(response.data.success){
                addInfoLocal();
            }
        })
        .catch((error)=>{
            if(error.response.status == 401){
              alert("not added, try again!");
              setLoading(false);
            }else
              alert(" "+ error);
          });
    }

    const afterPress = () =>{
        addInfo();
    }

    return(
        <View style={styles.container}>

            {/* heading label */}
            <Text style={{
                fontWeight:'bold', 
                textAlign:'center',
                marginTop:30,
                fontSize:22,
                color: Colors.selectedColor
                }}>
                Coach Info
            </Text>

            <Text style={{color:Colors.lightDark, alignSelf:'center', marginTop:10}}>
                add the following details to proceed
            </Text>

            {/* monthly charges */}
            <View style={styles.itemContainer}>
                <Text style={styles.itemLabel}>
                    Monthly Charges:
                </Text>

                <View style={styles.inputValueContainer}>
                    <TextInput
                        style={[styles.itemValueText, {width:35}]}
                        keyboardType={'numeric'}
                        onChangeText={text=>setPrice(text)}
                        maxLength={2}
                        placeholder="00"
                        placeholderTextColor={Colors.lightDark}
                        />

                    <Text style={styles.unit}>
                        $
                    </Text>
                </View>
            </View>

            {/* account number */}
            <View style={styles.itemContainer}>
                <Text style={styles.itemLabel}>
                    Account number:
                </Text>

                <View style={[styles.inputValueContainer, {width:'75%'}]}>
                    <TextInput
                        style={[styles.itemValueText, {flex:1}]}
                        keyboardType={'numeric'}
                        onChangeText={text=>setAccount(text)}
                        maxLength={20}
                        placeholder="00000000000000000000"
                        placeholderTextColor={Colors.lightDark}
                        multiline
                        />
                </View>
            </View>

            {/* experience */}
            <View style={styles.itemContainer}>
                <Text style={styles.itemLabel}>
                    Coaching Experience:
                </Text>

                <View style={styles.inputValueContainer}>
                    <TextInput
                        style={[styles.itemValueText, {width:35}]}
                        keyboardType={'numeric'}
                        onChangeText={text=>setYears(text)}
                        maxLength={2}
                        placeholder="00"
                        placeholderTextColor={Colors.lightDark}
                        />

                    <Text style={styles.unit}>
                        years
                    </Text>
                </View>
            </View>

            <TouchableOpacity 
                style={styles.buttonContainer} 
                onPress={afterPress} 
                isabled={loading}
                >
                {
                    loading 
                    ?
                    <ActivityIndicator color={'#fff'} size={22}/>
                    :
                    <Text style={styles.buttonText}>
                        Continue
                    </Text>
                }
            </TouchableOpacity>
        </View>
    )
}

export default InfoSignup;