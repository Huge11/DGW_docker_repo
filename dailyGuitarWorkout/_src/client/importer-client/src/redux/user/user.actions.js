 import { UserActionTypes } from './user.types';

 export const setCurrentUser = user => ({
     type: UserActionTypes.SET_CURRENT_USER,
     payload: user
 })

 export const setUserData = data => ({
     type: UserActionTypes.SET_USER_DATA,
     payload: data
 })

 export const setTimeData = data => ({
     type: UserActionTypes.SET_TIME_DATA,
     payload: data
 })