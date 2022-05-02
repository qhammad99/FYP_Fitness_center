import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {URL} from '@env';
import styles from './styles';
import Rating from '../Rating';
import moment from 'moment';

const CoachCard = ({coach, onPress}) =>{
    return(
        <View style={styles.root}>
            <Image
                source={{uri:URL+'/public/userImages/'+coach.img_file}}
                style={styles.image}
            />

            <View style={styles.rightContainer}>
                <Text style={styles.name}>{coach.name}</Text>
                <Rating rating={coach.avg_rating} rated_count={coach.rated_count}/>
                <Text style={styles.experience} numberOfLines={2}>experience: {coach.coaching_experience}</Text>
                <Text style={styles.charges}>Charges: {coach.charges}$</Text>
                <View style={styles.bottomRowContainer}>
                    <Text style={styles.joiningDate}>joined on: {moment(coach.joining_date).format('DD MMMM, YYYY      ')}</Text>
                    <TouchableOpacity style={styles.buttonContainer} onPress={()=>onPress(coach)}>
                        <Text style={styles.buttonText}>
                            Hire
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default CoachCard;