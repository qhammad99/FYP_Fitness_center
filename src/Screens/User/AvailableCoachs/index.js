import React, {useContext, useEffect} from 'react';
import {Text, View, TextInput, ActivityIndicator, FlatList} from 'react-native';
import Colors from '../../../colors/Colors';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CoachCard from '../../../components/CoachCard';
import {AuthContext} from '../../../Context/Providers/AuthProvider';
import {CoachContext} from '../../../Context/Providers/CoachProvider';
import availableCoachs from '../../../Context/Actions/availableCoachs';
import { useIsFocused } from '@react-navigation/native';

const AvailableCoachs = () =>{
    const authentication = useContext(AuthContext);
    const Coach = useContext(CoachContext);

    const focused = useIsFocused();

    useEffect(()=>{
        if(focused)
            availableCoachs(Coach)(authentication);
    },[focused]);

    return (
        <>
        {/* search bar */}
        <View style={styles.searchBarContainer}>
            <View style={styles.searchBar}>
                <Icon 
                    name={"account-search"} 
                    size={25} 
                    color={Colors.lightDark} 
                    style={{marginHorizontal:5}}
                    />

                <TextInput 
                    placeholder='Search'
                    style={styles.searchBarInput}
                    />
            </View>
        </View>

        {Coach.state.availableCoachsLoading &&
            <View 
                style={{
                    width:'100%', 
                    height: '100%', 
                    alignItems:'center',
                    marginTop: 20
                    }}
            >
                <ActivityIndicator size={30} color={Colors.primary}/>
            </View>
        }
        {!Coach.state.availableCoachsLoading &&
        <View style={{ width: '100%', height: '100%'}}>
            {
                !Coach.state.availableCoachs.empty
                ?
                <FlatList 
                    data={Coach.state.availableCoachs}
                    renderItem={
                        ({item, index})=>
                            <CoachCard coach={item}/>
                    }
                    keyExtractor={(item, index)=>`coach-${index}`}
                    ListFooterComponent={
                        <View style={{marginBottom:50}} />
                    }
                />
                :
                <Text>
                    No coach available
                </Text>
            }
        </View>
        }
        </>
    );
}

export default AvailableCoachs;