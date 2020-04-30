import { combineReducers } from 'redux'
import statisticsReducer from './statisticsReducer'
import riskassessmentsReducer from './riskassessmentsReducer'

const reducers = () => combineReducers({
  statistics: statisticsReducer,
  riskassessments: riskassessmentsReducer,
})

export default reducers
