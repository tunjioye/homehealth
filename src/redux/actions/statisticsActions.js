/*
 * action types
 */

// list of possible actions
export const UPDATE_NG_STATS = 'UPDATE_NG_STATS'
export const UPDATE_WORLD_STATS = 'UPDATE_WORLD_STATS'
export const UPDATE_NG_STATES_STATS = 'UPDATE_NG_STATES_STATS'

/*
 * action creators
 */

export function updateNigeriaStats (ng_stats) {
  return {
    type: UPDATE_NG_STATS,
    payload: ng_stats
  }
}

export function updateWorldwideStats (world_stats) {
  return {
    type: UPDATE_WORLD_STATS,
    payload: world_stats
  }
}

export function updateNigeriaStatesStats (ng_states_stats) {
  return {
    type: UPDATE_NG_STATES_STATS,
    payload: ng_states_stats
  }
}
