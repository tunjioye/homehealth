/*
 * action types
 */

// list of possible actions
export const UPDATE_RISK_ASSESSMENTS = 'UPDATE_RISK_ASSESSMENTS'

/*
 * action creators
 */

export function updateRiskAssessments (risk_assessments) {
  return {
    type: UPDATE_RISK_ASSESSMENTS,
    payload: risk_assessments
  }
}
