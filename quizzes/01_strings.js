import {oneLine} from 'common-tags'
import log from './pretty-log'

function searching() {
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
// log(searching())

function destructurable() {
  const string = 'Banana'
  const [first, , third] = string
  return {first, third}
}
// log(destructurable())

function iterable() {
  const string = 'Apple'
  const [first, , third, ...rest] = string
  return {first, third, rest}
}
// log(iterable())

/*
String.prototype.padEnd()
String.prototype.padStart()
String.prototype.repeat()
String.prototype.replace()
String.prototype.slice()
String.prototype.split()
String.prototype.trim()
String.prototype.trimLeft()
String.prototype.trimRight()
 */
