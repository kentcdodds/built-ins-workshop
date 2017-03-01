import {oneLine} from 'common-tags'
import log from './pretty-log'

function searching() {
  const string = oneLine`
    The average hen lays one egg approximately every
    26 hours, which is about 265 eggs per year.
  `
  return {
    startsWithThe: string,
    endsWithYear: string,
    includesEveryAfter45: string,
    matchesEggRegex: string,
    includes26Regex: string,
    indexOfLastEgg: string,
  }
}
// log(searching())

function manipulation() {
  return {
    zeroPadded: '.2',
    spacer: '*',
    yellow: 'Red, Blue, and Yellow are great',
    reverse: 'sore was I ere I saw eros',
    trimmed: '   why the space?   ',
  }
}
// log(manipulation())

function manipulationWithReplace() {
  const camelCase = 'aCamelCaseString'
  const markdownLinks = oneLine`
    Search with [Google](https://google.com),
    tweet with [Twitter](https://twitter.com)
  `
  return {
    htmlLinks: markdownLinks,
    kebabCase: camelCase,
  }
}
// log(manipulationWithReplace())

function destructurable() {
  // how could we rewrite this to be more declarative?
  const string = 'Banana'
  const first = string[0]
  const third = string[2]
  return {first, third}
}
// log(destructurable())

function iterable() {
  // how could we rewrite this to be more declarative?
  const string = 'Apple'
  const first = string[0]
  const third = string[2]
  const rest = string.slice(3).split('')
  return {first, third, rest}
}
// log(iterable())

/*





SOLUTIONS BELOW





 */

function searchingSOLUTION() {
  const string = oneLine`
    The average hen lays one egg approximately every
    26 hours, which is about 265 eggs per year.
  `
  return {
    startsWithThe: string.startsWith('The'),
    endsWithYear: string.endsWith('year'),
    includesEveryAfter45: string.includes('every', 45),
    matchesEggRegex: string.match(/e(gg)/i),
    includes26Regex: string.search(/((twenty-six)|(26))/),
    indexOfLastEgg: string.lastIndexOf('egg'),
  }
}
// log(searchingSOLUTION())

function manipulationSOLUTION() {
  return {
    zeroPadded: '.2'.padStart(3, '0').padEnd(4, '0'),
    spacer: '*'.repeat(50),
    yellow: 'Red, Blue, and Yellow are great'.slice(-16, -10),
    reverse: 'sore was I ere I saw eros'.split('').reverse().join(''),
    trimmed: '   why the space?   '.trim(), // right and left as well
  }
}
// log(manipulationSOLUTION())

function manipulationWithReplaceSOLUTION() {
  const camelCase = 'aCamelCaseString'
  const markdownLinks = oneLine`
    Search with [Google](https://google.com),
    tweet with [Twitter](https://twitter.com)
  `
  return {
    htmlLinks: markdownLinks.replace(
      /\[(.*?)\]\((.*?)\)/g,
      '<a href="$2">$1</a>',
    ),
    kebabCase: camelCase.replace(/[A-Z]/g, upperToHyphenLower),
  }
  function upperToHyphenLower(match) {
    return `-${match.toLowerCase()}`
  }
}
// log(manipulationWithReplaceSOLUTION())

function destructurableSOLUTION() {
  const string = 'Banana'
  const [first, , third] = string
  return {first, third}
}
// log(destructurableSOLUTION())

function iterableSOLUTION() {
  const string = 'Apple'
  const [first, , third, ...rest] = string
  return {first, third, rest}
}
// log(iterableSOLUTION())
