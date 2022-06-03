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
    Dimensions, 
    TextInput 
} from 'react-native';
// import { AuthContext } from '../../../Context/Providers/AuthProvider';
import moment from 'moment';
const { height, width } = Dimensions.get('screen');

export default Home = (props) => {
    // const authentication = useContext(AuthContext);
    // const [users, setUsers] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [selectedUser, setSelectedUser] = useState("")
    const [userheight, setUserHeight] = useState("")
    const [userWeight, setUserWeight] = useState("")

    useEffect(() => {
        console.log("get clients, and set array: ");
    }, [])

    return (
        <SafeAreaView style={{ height: '100%' }}>
            <SafeAreaView style={{ backgroundColor: '#E26F1E' }} >
                <ScrollView style={{ padding: 20 }}>
                    <View>
                        <View style={{ flexDirection: 'row',justifyContent:'space-between',alignItems:'center' }}>
                            <TouchableOpacity
                                onPress={()=>{
                                    props.navigation.openDrawer()
                                }}
                            >
                                <Image
                                source={require('./../../../Assets/menu.png')}
                                style={{
                                    height:30,
                                    width:30,
                                    tintColor:'white'
                                }}
                                />
                            </TouchableOpacity>
                            <Image
                                source={require('./../../../Assets/logo.png')}
                                style={{
                                    height:40,
                                    width:40,
                                    resizeMode:'contain'
                                }}
                                />
                            <View/>
                        </View>
                        {/* <View style={{ paddingTop: 20, flexDirection: 'row', marginHorizontal: 50 }}>
                            <View >
                                <Image
                                    source={require('../Assets/userAvatar.png')}
                                    style={{
                                        height: 60, width: 60,
                                        opacity: 100,
                                        borderRadius: 40, marginBottom: 10,
                                    }}
                                />
                                <Text style={{ paddingLeft: 10, color: "#ffffff", fontSize: 18 }}>Users</Text>
                            </View>
                            <View style={{ paddingLeft: 40 }} >
                                <Image
                                    source={require('../Assets/tasks.jpg')}
                                    style={{
                                        height: 60, width: 60,
                                        opacity: 100,
                                        borderRadius: 40, marginBottom: 10,
                                    }}
                                />
                                <Text style={{ paddingLeft: 0, color: "#ffffff", fontSize: 18 }}>Tasks</Text>
                            </View>
                            <View style={{ paddingLeft: 30 }} >
                                <Image
                                    source={require('../Assets/diet.jpg')}
                                    style={{
                                        height: 60, width: 60,
                                        opacity: 100,
                                        borderRadius: 40, marginBottom: 10,
                                    }}
                                />
                                <Text style={{ paddingLeft: 10, color: "#ffffff", fontSize: 18 }}>Plans</Text>
                            </View>

                        </View> */}
                    </View>


                </ScrollView>
            </SafeAreaView>

            
            <ScrollView>
                {/* <FlatList
                    data={Coach.state.subscribedUsers}
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
                /> */}
                <Modal
                    visible={showModal}
                    transparent
                >
                    <View
                        style={{
                            backgroundColor: 'rgba(0,0,0,0.3)',
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <View
                            style={{
                                height: height * 0.8,
                                width: width * 0.8,
                                backgroundColor: 'white',
                                borderRadius: 10
                            }}
                        >
                            <ScrollView
                                style={{
                                    flex: 1,
                                    marginBottom: 10
                                }}
                            >
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 30 }}>
                                    <Text style={{ fontSize: 16, paddingTop: 5, color: '#E26F1E', width: 80 }}>Name:</Text>
                                    <TextInput
                                        style={{ fontSize: 14, borderColor: '#E26F1E', borderWidth: 1, borderRadius: 10 }}
                                        width={200}
                                        height={40}
                                        placeholder='Enter your old password'
                                        color="#E26F1E"
                                        value={selectedUser.name}
                                        editable={false}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 30 }}>
                                    <Text style={{ fontSize: 16, paddingTop: 5, color: '#E26F1E', width: 80 }}>Email:</Text>
                                    <TextInput
                                        style={{ fontSize: 14, borderColor: '#E26F1E', borderWidth: 1, borderRadius: 10 }}
                                        width={200}
                                        height={40}
                                        placeholder='Enter your old password'
                                        color="#E26F1E"
                                        value={selectedUser.email}
                                        editable={false}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 30 }}>
                                    <Text style={{ fontSize: 16, paddingTop: 5, color: '#E26F1E', width: 80 }}>Gender:</Text>
                                    <TextInput
                                        style={{ fontSize: 14, borderColor: '#E26F1E', borderWidth: 1, borderRadius: 10 }}
                                        width={200}
                                        height={40}
                                        placeholder='Enter your old password'
                                        color="#E26F1E"
                                        value={selectedUser.gender === 1 ? "Male" : "Female"}
                                        editable={false}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 30 }}>
                                    <Text style={{ fontSize: 16, paddingTop: 5, color: '#E26F1E', width: 80 }}>Gender:</Text>
                                    <TextInput
                                        style={{ fontSize: 14, borderColor: '#E26F1E', borderWidth: 1, borderRadius: 10 }}
                                        width={200}
                                        height={40}
                                        placeholder='Enter your old password'
                                        color="#E26F1E"
                                        value={moment(selectedUser.dob).format("MMM DD,YYYY")}
                                        editable={false}
                                    />
                                </View>
                                <Text
                                    style={{
                                        marginLeft: 10,
                                        fontSize: 18,
                                        marginVertical: 10,
                                        textDecorationLine: 'underline'
                                    }}
                                >Parameters</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 30 }}>
                                    <Text style={{ fontSize: 16, paddingTop: 5, color: '#E26F1E', width: 80 }}>User height:</Text>
                                    <TextInput
                                        style={{ fontSize: 14, borderColor: '#E26F1E', borderWidth: 1, borderRadius: 10 }}
                                        width={200}
                                        height={40}
                                        placeholder='Enter your new password'
                                        color="#E26F1E"
                                        value={userheight}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 30 }}>
                                    <Text style={{ fontSize: 16, paddingTop: 5, color: '#E26F1E', width: 80 }}>User Weight</Text>
                                    <TextInput
                                        style={{ fontSize: 14, borderColor: '#E26F1E', borderWidth: 1, borderRadius: 10, }}
                                        width={200}
                                        height={40}
                                        placeholder='Enter your new password'
                                        color="#E26F1E"
                                        value={userWeight}
                                        onChangeText={(text) => { setUserWeight(text) }}
                                    />
                                </View>
                                <Text
                                    style={{
                                        marginLeft: 10,
                                        fontSize: 18,
                                        marginVertical: 10,
                                        textDecorationLine: 'underline'
                                    }}
                                >Goals</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 30 }}>
                                    <Text style={{ fontSize: 16, paddingTop: 5, color: '#E26F1E', width: 80 }}>Number of days:</Text>
                                    <TextInput
                                        style={{ fontSize: 14, borderColor: '#E26F1E', borderWidth: 1, borderRadius: 10 }}
                                        width={200}
                                        height={40}
                                        placeholder='Enter your new password'
                                        color="#E26F1E"
                                        value={selectedUser?.number_of_days ? selectedUser?.number_of_days.toString() : ""}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 30 }}>
                                    <Text style={{ fontSize: 16, paddingTop: 5, color: '#E26F1E', width: 80 }}>BMI:</Text>
                                    <TextInput
                                        style={{ fontSize: 14, borderColor: '#E26F1E', borderWidth: 1, borderRadius: 10, }}
                                        width={200}
                                        height={40}
                                        placeholder='Enter your new password'
                                        color="#E26F1E"
                                        value={selectedUser?.target_type}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 30 }}>
                                    <Text style={{ fontSize: 16, paddingTop: 5, color: '#E26F1E', width: 80 }}>Goal</Text>
                                    <TextInput
                                        style={{ fontSize: 14, borderColor: '#E26F1E', borderWidth: 1, borderRadius: 10, }}
                                        width={200}
                                        height={40}
                                        placeholder='Enter your new password'
                                        color="#E26F1E"
                                        value={selectedUser?.target_value?.toString() ? selectedUser.target_value.toString() + " kg" : ""}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginTop: 30 }}>
                                    <Text style={{ fontSize: 16, paddingTop: 5, color: '#E26F1E', width: 80 }}>Status</Text>
                                    <TextInput
                                        style={{ fontSize: 14, borderColor: '#E26F1E', borderWidth: 1, borderRadius: 10, }}
                                        width={200}
                                        height={40}
                                        placeholder='Enter your new password'
                                        color="#E26F1E"
                                        value={selectedUser.status}
                                    />
                                </View>
                                {/* <TouchableOpacity
                                    style={{
                                        backgroundColor: '#E26F1E',
                                        padding: 10,
                                        width: 170,
                                        borderRadius: 10,
                                        alignSelf: 'center',
                                        marginTop: 10
                                    }}
                                    onPress={() => {
                                        onChangePassword()
                                    }}
                                >
                                    <Text style={{ fontSize: 18, textAlign: 'center', color: '#ffff' }}>Change</Text>
                                </TouchableOpacity> */}
                                <TouchableOpacity
                                    style={{
                                        backgroundColor: '#E26F1E',
                                        padding: 10,
                                        width: 170,
                                        borderRadius: 10,
                                        alignSelf: 'center',
                                        marginTop: 10
                                    }}
                                    onPress={() => {
                                        setShowModal(false)
                                    }}
                                >
                                    <Text style={{ fontSize: 18, textAlign: 'center', color: '#ffff' }}>Close</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>

                    </View>
                </Modal>
            </ScrollView>
        </SafeAreaView>
    );
};

