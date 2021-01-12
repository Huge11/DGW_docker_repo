import {combineReducers} from 'redux'

import userReducer from './user/user.reducer'
import importerReducer from './importer/importer.reducer'

export default combineReducers({
	user: userReducer,
	importer: importerReducer
})