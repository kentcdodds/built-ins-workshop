test('capitalize a string with spread and destructuring', () => {
  const name = 'joe'
  const [first, ...rest] = name
  expect(first.toUpperCase() + rest.join('')).toBe('Joe')
})
test('I submitted my elaboration and feedback', () => {
  const submitted = true
  expect(true).toBe(submitted)
})

//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests,
// then file a pull request to add them to the extra credit!
// Learn more here: http://kcd.im/built-ins-workshop-contributing
