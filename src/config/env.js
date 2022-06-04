 import {URL} from '@env';
const Urls = {

    coach_info_id: URL + '/coach-info/',
    edit_User_Details: URL + "/user-edit",
    LoginURL: URL+'/user-login',
    SignupURL: URL+'/user-register',
    user_change_password:URL+"/user-change-password",
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
    IngredientsCategory: URL+'/ingredients-category', //directly called in Admin Home
    Ingredients: URL+'/ingredients', //also in Admin Home
    IngredientsUpdate: URL+'/ingredient/update', //also in admin home
    ScheduleDelete: URL+'/schedule-delete/', // called in schedule screen
    MyDietPlans: URL+'/dietPlan', // called in schedule/add new task
    MyWorkoutPlans: URL+'/workoutPlan', //same up
    GeneralDietPlans: URL+'/dietPlan-general', //same up
    GeneralWorkoutPlans: URL+'/workoutPlan-general', //same up
    ScheduleAdd: URL+'/schedule-add', //same up
    CoachClients: URL+'/coach-clients', //calling it in subcribed user home
    CoachDetailAdd: URL+'/coach-detail-add', //calling in coach/ info signup
};

export default Urls;