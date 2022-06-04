import React, { useEffect, useState, useContext } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Image, 
    SafeAreaView, 
    ScrollView, 
    FlatList, 
    Modal, 
    TextInput,
    ActivityIndicator 
} from 'react-native';
import { AuthContext } from '../../../Context/Providers/AuthProvider';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import styles from './styles';
import Colors from '../../../colors/Colors';
import Urls from '../../../config/env';
import axios from 'axios';

export default Home = (props) => {
    const authentication = useContext(AuthContext);
    const [users, setUsers] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState("");
    const [userheight, setUserHeight] = useState("");
    const [userWeight, setUserWeight] = useState("");
    const [loading, setLoading] = useState(true);

    const addUsers = async() => {
        let user = JSON.parse(authentication.state.user);
        let token = user.token;

        if(!loading)
            setLoading(true);
      
        var API_URL=Urls.CoachClients;
        axios.get(API_URL,{
            headers:{
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
            }
        })
        .then((response)=>{
            if(response.data.success){
                setUsers(response.data.clients);
            }
            setLoading(false);
        })
        .catch((error)=>{
            if(error.response.status == 401)
              setLoading(false);
            else
              alert(" "+ error);
          });
    }

    useEffect(() => {
        addUsers();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            {/* client detail modal */}
            <Modal visible={showModal} transparent>
                <View style={styles.modalContainer}>
                    <ScrollView style={styles.modalSubContainer}>

                        {/* name */}
                        <View style={styles.itemContainer}>
                            <Text style={styles.itemLabel}>Name:</Text>
                            <TextInput
                                style={styles.itemValueContainer}
                                placeholder='Name'
                                value={selectedUser.name}
                                editable={false}
                                placeholderTextColor={Colors.lightDark}
                                multiline
                            />
                        </View>

                        {/* email */}
                        <View style={styles.itemContainer}>
                            <Text style={styles.itemLabel}>Email:</Text>
                            <TextInput
                                style={styles.itemValueContainer}
                                placeholder='email'
                                value={selectedUser.email}
                                editable={false}
                                placeholderTextColor={Colors.lightDark}
                                multiline
                            />
                        </View>

                        {/* Gender */}
                        <View style={styles.itemContainer}>
                            <Text style={styles.itemLabel}>Gender:</Text>
                            <TextInput
                                style={styles.itemValueContainer}
                                placeholder='gender'
                                value={selectedUser.gender == 1 ? "Male" : "Female"}
                                editable={false}
                                placeholderTextColor={Colors.lightDark}
                            />
                        </View>

                        {/* DOB */}
                        <View style={styles.itemContainer}>
                            <Text style={styles.itemLabel}>DOB:</Text>
                            <TextInput
                                style={styles.itemValueContainer}
                                placeholder='dob'
                                value={moment(selectedUser.dob).format("MMM DD,YYYY")}
                                editable={false}
                                placeholderTextColor={Colors.lightDark}
                            />
                        </View>

                    {/* parameters section */}
                    <Text style={styles.itemsSecton}>Parameters</Text>

                        {/* height */}
                        <View style={styles.itemContainer}>
                            <Text style={styles.itemLabel}>User height:</Text>
                            <TextInput
                                style={styles.itemValueContainer}
                                placeholder='height'
                                value={userheight}
                                editable={false}
                                placeholderTextColor={Colors.lightDark}
                            />
                        </View>

                        {/* weight */}
                        <View style={styles.itemContainer}>
                            <Text style={styles.itemLabel}>User Weight</Text>
                            <TextInput
                                style={styles.itemValueContainer}
                                placeholder='weight'
                                value={userWeight}
                                editable={false}
                                placeholderTextColor={Colors.lightDark}
                            />
                        </View>

                    {/*Goal section  */}
                    <Text style={styles.itemsSecton}>Goals</Text>

                        {/* goal days */}
                        <View style={styles.itemContainer}>
                            <Text style={styles.itemLabel}>Number of days:</Text>
                            <TextInput
                                style={styles.itemValueContainer}
                                placeholder='goal days'
                                value={
                                    selectedUser?.number_of_days ? 
                                    selectedUser?.number_of_days.toString() : 
                                    ""}
                                editable={false}
                                placeholderTextColor={Colors.lightDark}
                            />
                        </View>

                        {/* bmi */}
                        <View style={styles.itemContainer}>
                            <Text style={styles.itemLabel}>BMI:</Text>
                            <TextInput
                                style={styles.itemValueContainer}
                                placeholder='bmi'
                                value={selectedUser?.target_type}
                                editable={false}
                                placeholderTextColor={Colors.lightDark}
                            />
                        </View>

                        {/* goal */}
                        <View style={styles.itemContainer}>
                            <Text style={styles.itemLabel}>Goal</Text>
                            <TextInput
                                style={styles.itemValueContainer}
                                placeholder='goal'
                                value={selectedUser?.target_value?.toString() ? selectedUser.target_value.toString() + " kg" : ""}
                                editable={false}
                                placeholderTextColor={Colors.lightDark}
                            />
                        </View>

                        {/* status */}
                        <View style={styles.itemContainer}>
                            <Text style={styles.itemLabel}>Status</Text>
                            <TextInput
                                style={styles.itemValueContainer}
                                placeholder='status'
                                value={selectedUser.status}
                                editable={false}
                                placeholderTextColor={Colors.lightDark}
                            />
                        </View>
                        
                        {/* close button */}
                        <TouchableOpacity
                            style={styles.modalButtonContainer}
                            onPress={() => setShowModal(false)}
                        >
                            <Text style={styles.modalButtonText}>Close</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </Modal>

            {/* header */}
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={()=>props.navigation.openDrawer()}>
                    <Image
                        source={require('./../../../Assets/menu.png')}
                        style={styles.menuIcon}
                    />
                </TouchableOpacity>
                <Image
                    source={require('./../../../Assets/logo.png')}
                    style={styles.logo}
                />
                <TouchableOpacity onPress={()=>addUsers()}>
                    <Ionicons name={'refresh'} size={22} color={'white'} />
                </TouchableOpacity>
            </View>

            {
                !loading
                ?
                //flat list to show users 
                <FlatList
                    data={users}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20, marginHorizontal: 20 }}
                                onPress={() => {
                                    setShowModal(true)
                                    setSelectedUser(item)
                                    setUserHeight(item.height.toString())
                                    setUserWeight(item.weight.toString())
                                }}
                            >
                                <View>
                                    <Image
                                        source={require('../../../Assets/userAvatar.png')}
                                        style={{
                                            height: 80, width: 80, alignContent: 'center',
                                            opacity: 100,
                                            borderRadius: 40, marginBottom: 10,
                                            // tintColor: 'red'
                                        }}
                                    />
                                </View>
                                <View style={{ paddingLeft: 20, paddingTop: 15 }}>
                                    <Text>{item?.name}</Text>
                                    <Text>{item.email}</Text>
                                    <Text>Subscription end date: {moment(item.payment_date).format("DD/MM/yyyy")}</Text>

                                </View>
                            </TouchableOpacity>
                        )
                    }}
                    ListEmptyComponent = {()=> 
                    <Text style={{
                        color: Colors.darkColor, 
                        alignSelf:'center', 
                        fontSize:18
                    }}>
                        No clients
                    </Text>
                    }
                />
                :
                <ActivityIndicator />
            }
        </SafeAreaView>
    );
};

