import {URL} from '@env';

const Urls = {
    LoginURL: URL+'/user-login',
    SignupURL: URL+'/user-register',
    UserPhoto: URL+'/user-photo',
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
    DietProgress: URL+'/progress-attachDiet',
    ExtraProgress: URL+'/progress-attachExtra',
    ClientsCoach: URL+'/client-coach',
    AvailableCoachs: URL+ '/coach-all',
    AddMyCoach: URL+'/client-coach',
    GetMessages: URL+'/get-messages/', // this is not used in context directly called at MyCoachChat screen   
    GiveRating: URL+'/client-rating', // called at my coach info to rate coach
};

export default Urls;