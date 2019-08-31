import types from './mutation-types'

export default {
  resetState({
    commit
  }) {
    commit(types.resetState);
  },
  increment({
    commit
  }) {
    commit(types.increment);
  }
}
