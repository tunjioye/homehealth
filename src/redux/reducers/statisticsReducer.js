import {
  UPDATE_NG_STATS,
  UPDATE_WORLD_STATS,
} from '../actions/statisticsActions'

const initialState = {
  ng_stats: {},
  world_stats: {},
}

const statisticsReducer = (state = initialState, action) => {
  const { payload } = action

  switch (action.type) {
    case UPDATE_NG_STATS:
      return {
        ...state,
        ng_stats: payload
      }
    case UPDATE_WORLD_STATS:
      return {
        ...state,
        world_stats: payload
      }
    default:
      return state
  }
}

export default statisticsReducer
