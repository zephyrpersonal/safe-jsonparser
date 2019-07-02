const safeJsonParse = require('../index')

it('should return json object with valid jsonstring', () => {
  expect(safeJsonParse('{"a":1}')).toStrictEqual({ a: 1 })
})

it('should return undefined with invalid jsonstring', () => {
  expect(safeJsonParse('{"a:1}')).toBe(undefined)
})

it('should catch error when passed onError Callback', () => {
  let error
  safeJsonParse('{"a:1}', (e) => {
    error = e
  })
  expect(error).toBeInstanceOf(Error)
  expect(error.message).toBe('Unexpected end of JSON input')
})
