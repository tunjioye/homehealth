import {
  UPDATE_RISK_ASSESSMENTS,
} from '../actions/riskassessmentsActions'

const initialState = {
  risk_assessmnets: [],
}

const riskAssessmentsReducer = (state = initialState, action) => {
  const { payload } = action

  switch (action.type) {
    case UPDATE_RISK_ASSESSMENTS:
      return {
        ...state,
        risk_assessmnets: payload
      }
    default:
      return state
  }
}

export default riskAssessmentsReducer
