import mongoose from 'mongoose';

import EmailPreferences from './models/EmailPreferences.js';
import UserSettings from './models/UserSettings.js';

mongoose.connect(process.env.DB_ADDRESS, {  useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;


export default {EmailPreferences, UserSettings}


// ============= Create ===================
export const createUserSettings = ({uid, firstName, lastname, photoURL, displayName, email}) => {
    return UserSettings.find({uid})
        .then(data=>{
            if(data.length > 0){
                return UserSettings.create({uid, primaryEmail: email, emails: [email], displayName: displayName})
                    .catch(e=>console.error(e))
            }else{
                return data[0]
            }
        })
        .catch(e=>console.error(e))
}

export const createEmailPreferences = ({uid}) => {
    // check if document exists already
    return EmailPreferences.find({uid})
        .then(data=>{
            if(data.length > 0){
                return EmailPreferences.create({uid})
                    .catch(e=>console.error(e))
            }else{
                return data[0]
            }
        })
        .catch(e=>console.error(e))
}




// ============= Read By UID ===============
export const getUserSettingsByUid = uid => {
    return UserSettings.find({'uid': uid}).catch(err=> console.log(err))
};

export const getEmailPreferencesByUid = uid => {
    return EmailPreferences.find({'uid': uid}).catch(err => console.log(err))
};