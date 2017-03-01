import {oneLine} from 'common-tags'

test('can search for stuff in a string', () => {
  const string = 'Only 2% of Earth population naturally has green eyes.'

  expect(string.startsWith('Only')).toBe(true)
  expect(string.endsWith('eyes.')).toBe(true)
  expect(string.includes('population')).toBe(true)
  const match = ['2%', '2']
  match.index = 5
  match.input = string
  expect(string.match(/(\d+)%/)).toEqual(match)
})

test('can manipulate a string', () => {
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
})

test('can do advanced string replacement', () => {
  const string = oneLine`
    The 57 on Heinz ketchup bottles represents the
    number of varieties of pickles the company once had.
  `
  const regex = /(^|\s)(the)\s/ig
  function replacer(match) {
    return match.toUpperCase()
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
    markdown
      .replace(strongRegex, '<strong>$1</strong>')
      .replace(emphasisRegex, '<em>$1</em>'),
  ).toBe(
    oneLine`
      <strong>This is bold</strong> and <em>this is italicized</em>
    `,
  )
})

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
