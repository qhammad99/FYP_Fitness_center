import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Rating=({rating, rated_count})=>{
    return(
        <View style={styles.ratingContainer}>
        {
            [0,0,0,0,0].map((star, index)=>
                index < Math.floor(rating)
                    ?
                    <FontAwesome key={`${index}_star`} name='star' style={styles.star} color={'#F05827'} size={14} />
                    :(
                        ((index==(Math.floor(rating)))&&((rating%1)>=0.1))
                        ?
                        <FontAwesome key={`${index}_star`} name='star-half-o' style={styles.star} color={'#F05827'} size={14} />
                        :
                        <FontAwesome key={`${index}_star`} name='star-o' style={styles.star} color={'#F05827'} size={14} />
                    )
            )
        }
        <Text style={styles.ratingCount}>({rated_count})</Text>
    </View>

    );
};

export default Rating;