import React, {useContext, useEffect, useState} from 'react';
import {Text, View, Dimensions} from 'react-native';
import Colors from '../../../colors/Colors';
import moment from 'moment';
import styles from './styles';
import {TaskContext} from '../../../Context/Providers/TaskProvider';
import {AuthContext} from '../../../Context/Providers/AuthProvider';
import { GoalContext } from '../../../Context/Providers/GoalProvider';
import progressByGoal from '../../../Context/Actions/progressByGoal';
import { Chart, VerticalAxis, HorizontalAxis, Area, Line } from 'react-native-responsive-linechart';

const Progress = () => {
    const authentication = useContext(AuthContext);
    const Goal = useContext(GoalContext);
    const Task = useContext(TaskContext);
    const [allDates, setAllDates] = useState([]);
    const [items, setItems] = useState([]);
      
    useEffect(()=>{
        if(allDates.length ==0 ){
            let nowDate = moment().local();
            let goalStartDate = moment(Goal.goal.data.start_date).local();
            let dayNumber = nowDate.diff(goalStartDate, 'days')+1;
            const lastDayNumber = Goal.goal.data.number_of_days;

            if(dayNumber>=lastDayNumber)
                for(i=0; i<Goal.goal.data.number_of_days; i++){
                    let date = moment(Goal.goal.data.start_date).local().add(i, 'day').format('YYYY-MM-DD');
                    setAllDates(recDates => [...recDates, date]);
                }
            else
                for(i=0; i<dayNumber; i++){
                    let date = moment(Goal.goal.data.start_date).local().add(i, 'day').format('YYYY-MM-DD');
                    setAllDates(recDates => [...recDates, date]);
                }
        }

        let testing = true;
        if(testing){
          if(Task.tasks.progress == null)
            progressByGoal(Goal)(Task)(authentication);
          else{
            let checkedIndex = 0;
            let collection = allDates.reduce((acc, currentItem, index)=>{
             const date = currentItem;
             if(Task.tasks.progress.length > 0 && Task.tasks.progress[checkedIndex]){
              //  compare date
              if(moment(date, "YYYY-MM-DD").local().isSame(moment(Task.tasks.progress[checkedIndex].day_date).local())){
                acc[index] = {
                  number: `${index+1}`, 
                  gain: Task.tasks.progress[checkedIndex].calories_gain,
                  loose: Task.tasks.progress[checkedIndex].calories_burn
                };
                checkedIndex++;
              }else
                acc[index] = {number: `${index+1}`, gain: 0, loose: 0};
             }else
              acc[index] = {number: `${index+1}`, gain: 0, loose: 0};
      
            return acc;
            },{});
            collection = Object.values(collection);
            setItems(collection);
          }
        }
        return () => {
          testing = false  
        }; 
      },[Task.tasks.progress]);

    const findMaxY = ()=>{
      const looseMax = items.reduce((acc, obj)=>
        acc < parseInt(obj.loose)?
          parseInt(obj.loose): acc  
      ,0);

      const gainMax = items.reduce((acc, obj)=>
        acc < parseInt(obj.gain)?
          parseInt(obj.gain): acc  
      ,0);

      if(looseMax > gainMax)
        return looseMax + 100;
      else
        return gainMax + 100;
    }

    return (
        <View style={styles.container}>
          <View style={styles.caloriesContainer}>
            <View>
              <Text style={styles.label}>
                Calories Burn
              </Text>
              <Text style={styles.value}>{items.length!=0 && items.reduce((acc, obj)=>acc+parseInt(obj.loose), 0)}</Text>
            </View>

            <View style={styles.verticalLine}/>

            <View>
              <Text style={styles.label}>
                Calories Gain
              </Text>
              <Text style={styles.value}>{items.length!=0 && items.reduce((acc, obj)=>acc+parseInt(obj.gain), 0)}</Text>
            </View>
          </View>
          {
            items.length>0 && 
             
            /*<LineChart 
                data={{
                    labels: items.map(obj=>obj.number),
                    datasets: [
                    {
                        data: items.map(obj => obj.gain),
                        color: ()=>`rgba(59, 166, 45, 1)`
                    },
                    {
                        data: items.map(obj=>obj.loose),
                        color: ()=>`rgba(59, 152, 173, 1)`
                    }
                    ]
                }}
                width={Dimensions.get("window").width -20} // from react-native
                height={320}
                withVerticalLabels={false}
                withInnerLines={false}
                yLabelsOffset={30}

                chartConfig={{
                    backgroundColor: "#fff",
                    backgroundGradientFrom: "#fff",
                    backgroundGradientTo: "#fff",
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 0) => `rgba(208, 55, 21, ${opacity})`,
                    labelColor: (opacity = 0) => `rgba(38, 45, 55, ${opacity})`,
                    style: {
                      borderRadius: 16
                    },
                    propsForDots: {
                      r: "",
                    },
                    useShadowColorFromDataset: true
                  }}
                  bezier
                  style={{
                    marginVertical: 8,
                    borderRadius: 16,
                    justifyContent:'center',
                    alignItems: 'center'
                  }}
              /> */
                <Chart
                    style={{ height: 300, width: '100%', backgroundColor: '#eee', marginTop:20 }}
                    xDomain={{ min: 0, max: 10 }}
                    yDomain={{ min: 0, max: findMaxY()}}
                    padding={{ left: 35, top: 15, bottom: 15, right: 15 }}
                >
                    <VerticalAxis tickCount={6} theme={{ 
                      axis: { stroke: { color: '#aaa', width: 2 } },
                      ticks: { stroke: { color: '#aaa', width: 2 } },
                      labels: { formatter: (v) => v.toFixed(2) } }}
                      />

                    <Line 
                      data={items.map(obj=>{return {x: obj.number, y: obj.loose}})} 
                      smoothing="bezier" 
                      tension={0.3} 
                      theme={{ stroke: { color: 'red', width: 2 } }} 
                    />
                    <Line 
                      data={items.map(obj=>{return {x: obj.number, y: obj.gain}})} 
                      smoothing="bezier " 
                      tension={0.3}
                      theme={{ stroke: { color: 'blue', width: 2 } }} 
                    />
                </Chart>
              }

              <View style={styles.chartLabelContainer}>
                <View>
                  <Text>x-axis: no of days</Text>
                  <Text>y-axis: no of calories</Text>
                </View>
                <View>
                  <View style={styles.colorLabel}>
                      <View style={{width:8, height: 8, marginRight:5, backgroundColor:'red'}} />
                      <Text>Calories Loose</Text>
                  </View>
                  <View style={styles.colorLabel}>
                      <View style={{width:8, height: 8, marginRight:5, backgroundColor:'blue'}} />
                      <Text>Calories Gain</Text>
                  </View>
                </View>
              </View>
        </View>
    );
    
}

export default Progress;