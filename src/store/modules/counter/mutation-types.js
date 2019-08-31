export default [
  'resetState',
  'increment'
].reduce((acc, value) => {
  acc[value] = value
  return acc
}, {})
