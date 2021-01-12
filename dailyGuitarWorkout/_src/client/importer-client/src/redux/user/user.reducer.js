import { UserActionTypes } from './user.types';

let INITIAL_STATE = {
    currentUser: null,
    userData: null,
    timeData: null
}

if(process.env.NODE_ENV !== 'production'){
    const dummyUserData = {
        uid: 'dsafjdsalkfdsalkflkdsjflkds',
        displayName: 'Huge M.',
        firstName: "Hugh",
        lastName: 'McNamara',
        photoUrl: 'https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_1280.png',
        coverPhotoUrl: 'https://cdn.pixabay.com/photo/2020/01/15/17/38/fireworks-4768501_960_720.jpg',
        emails: ['huge.mcnamara.dev@gmail.com'],
        primaryEmail: 'huge.mcnamara.dev@gmail.com',
        aboutMe: "I'm a straight up bad ass bitch yall.....",
        created: new Date()
    }

    const dummyTimeData = {
        timeZone: 'US/Eastern',
        time: '21:45'
    }

    INITIAL_STATE = {
        currentUser: null,
        userData: dummyUserData,
        timeData: dummyTimeData
    }
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            };
        case UserActionTypes.SET_USER_DATA:
            return {
                ...state,
                userData: action.payload
            }
        case UserActionTypes.SET_TIME_DATA:
            return {
                ...state,
                timeData: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;



