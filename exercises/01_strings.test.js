import {oneLine} from 'common-tags'

test('can search for stuff in a string', () => {
  const string = 'Only 2% of Earth population naturally has green eyes.'

  // fill in the argument
  expect(string.startsWith()).toBe(true)
  expect(string.endsWith()).toBe(true)
  expect(string.includes()).toBe(true)
  // this next one's a little tricky
  // but the thing you get back from .match
  // is an array with a few extra properties on it...
  // you'll need to put those properties on it yourself
  // to make this assertion pass
  const match = []
  expect(string.match(/(\d+)%/)).toEqual(match)
})

test('can manipulate a string', () => {
  // use combination of trim, padEnd, repeat, slice,
  // split, reverse, and join to fix this
  // try to do so without creating any new variables!
  expect('   yeh ').toBe('hey-hey-hey')
})

test('can do advanced string replacement', () => {
  const string = oneLine`
    The 57 on Heinz ketchup bottles represents the
    number of varieties of pickles the company once had.
  `
  const regex = /(^|\s)(the)\s/ig
  function replacer() {
    // implement this...
  }
  expect(string.replace(regex, replacer)).toBe(
    oneLine`
      THE 57 on Heinz ketchup bottles represents THE
      number of varieties of pickles THE company once had.
    `,
  )

  const markdown = oneLine`
    **This is bold** and _this is italicized_
  `
  const strongRegex = /\*\*(.*?)\*\*/g
  const emphasisRegex = /_(.*?)_/g
  expect(
    markdown,
    // call replace with a replacement string
    // hint: call .replace twice
  ).toBe(
    oneLine`
      <strong>This is bold</strong> and <em>this is italicized</em>
    `,
  )
})

test('capitalize a string with spread and destructuring', () => {
  const name = 'joe'
  const first = name[0]
  const rest = name.slice(1).split('')
  expect(first.toUpperCase() + rest.join('')).toBe('Joe')
})
//////// Elaboration & Feedback /////////
/*
http://ws.kcd.im/?ws=Built-ins&e=Strings&em=
*/
test('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(true).toBe(submitted)
})
////////////////////////////////

//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests,
// then file a pull request to add them to the extra credit!
// Learn more here: http://kcd.im/built-ins-workshop-contributing
