import {URL} from '@env';

const Urls = {
    LoginURL: URL+'/user-login',
    SignupURL: URL+'/user-register',
    ParametersAdd: URL+'/parameters-add',
    ParametersGet: URL+'/parameters-detail',
    GoalAdd: URL+'/goal-add',
    GoalCompleted: URL+'/goal-total',
    GoalCurrent: URL+'/goal-current',
    ScheduleToday: URL+'/schedule-today',
    ScheduleByDay: URL+'/schedule/day/',
    ProgressByGoal: URL+'/progress-goal/',
    ProgressTasks: URL+'/progress-tasks/',
    WorkoutProgress: URL+'/progress-attachWorkout',
    DietProgress: URL+'/progress-attachDiet'
};

export default Urls;