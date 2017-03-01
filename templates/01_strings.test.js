import {oneLine} from 'common-tags'

test('can search for stuff in a string', () => {
  const string = 'Only 2% of Earth population naturally has green eyes.'

  // WORKSHOP_START
  // fill in the argument
  expect(string.startsWith()).toBe(true)
  expect(string.endsWith()).toBe(true)
  expect(string.includes()).toBe(true)
  // WORKSHOP_END
  // FINAL_START
  expect(string.startsWith('Only')).toBe(true)
  expect(string.endsWith('eyes.')).toBe(true)
  expect(string.includes('population')).toBe(true)
  // FINAL_END
  // WORKSHOP_START
  // this next one's a little tricky
  // but the thing you get back from .match
  // is an array with a few extra properties on it...
  // you'll need to put those properties on it yourself
  // to make this assertion pass
  const match = []
  // WORKSHOP_END
  // FINAL_START
  const match = ['2%', '2']
  match.index = 5
  match.input = string
  // FINAL_END
  expect(string.match(/(\d+)%/)).toEqual(match)
})

test('can manipulate a string', () => {
  // WORKSHOP_START
  // use combination of trim, padEnd, repeat, slice,
  // split, reverse, and join to fix this
  // try to do so without creating any new variables!
  expect('   yeh ').toBe('hey-hey-hey')
  // WORKSHOP_END
  // FINAL_START
  expect(
    '   yeh '
      .trim()
      .padEnd(4, '-')
      .repeat(3)
      .slice(0, -1)
      .split('')
      .reverse()
      .join(''),
  ).toBe('hey-hey-hey')
  // FINAL_END
})

test('can do advanced string replacement', () => {
  const string = oneLine`
    The 57 on Heinz ketchup bottles represents the
    number of varieties of pickles the company once had.
  `
  const regex = /(^|\s)(the)\s/ig
  // WORKSHOP_START
  function replacer() {
    // implement this...
  }
  // WORKSHOP_END
  // FINAL_START
  function replacer(match) {
    return match.toUpperCase()
  }
  expect(string.replace(regex, replacer)).toBe(
    // FINAL_END
    // COMMENT_START
    'stuff', // needed for prettier formatting to not mess up the comments
  )
  // COMMENT_END
  // WORKSHOP_START
  expect(string.replace(regex, replacer)).toBe(
    // WORKSHOP_END
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
    markdown
      // WORKSHOP_START
      // call replace with a replacement string
      // hint: call .replace twice
      // WORKSHOP_END
      // FINAL_START
      .replace(strongRegex, '<strong>$1</strong>')
      .replace(emphasisRegex, '<em>$1</em>'),
    // FINAL_END
  ).toBe(
    oneLine`
      <strong>This is bold</strong> and <em>this is italicized</em>
    `,
  )
})

test('capitalize a string with spread and destructuring', () => {
  const name = 'joe'
  // WORKSHOP_START
  const first = name[0]
  const rest = name.slice(1).split('')
  // WORKSHOP_END
  // FINAL_START
  const [first, ...rest] = name
  // FINAL_END
  expect(first.toUpperCase() + rest.join('')).toBe('Joe')
})
// WORKSHOP_START
//////// Elaboration & Feedback /////////
/*
http://ws.kcd.im/?ws=Built-ins&e=Strings&em=
*/
test('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(true).toBe(submitted)
})
////////////////////////////////
// WORKSHOP_END
// FINAL_START
test('I submitted my elaboration and feedback', () => {
  const submitted = true
  expect(true).toBe(submitted)
})
// FINAL_END

//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests,
// then file a pull request to add them to the extra credit!
// Learn more here: http://kcd.im/built-ins-workshop-contributing
