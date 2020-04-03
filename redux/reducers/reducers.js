import { combineReducers } from 'redux'
import statisticsReducer from './statisticsReducer'

const reducers = () => combineReducers({
  statistics: statisticsReducer,
})

export default reducers
