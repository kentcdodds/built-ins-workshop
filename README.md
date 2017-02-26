# JavaScript Built-ins Workshop

_The practical bits of JavaScript's "standard library" that will make you more
productive with JavaScript_

[![slides-badge][slides-badge]][slides]
[![chat-badge][chat-badge]][chat]
[![Build Status][build-badge]][build]
[![Dependencies][dependencyci-badge]][dependencyci]
[![MIT License][license-badge]][LICENSE]
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

[![PRs Welcome][prs-badge]][prs]
[![Donate][donate-badge]][donate]
[![Code of Conduct][coc-badge]][coc]
[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

## Welcome

Welcome to the JavaScript Built-ins workshop. In this workshop, you'll learn
some of JavaScripts' standard, built-in objects. There are many built-in objects
specified in the [ECMAScript][ECMAScript] specification (the standard which
JavaScript implementations use to create runtimes for JavaScript), and we're
going to cover the most practical ones (and properties/methods) in this
workshop.

## Workshop workflow

The workflow of this workshop is fairly simple and based on
[Make It Stick][makeitstick] methodologies:

1. Learn a few concepts via quizzes (generation)
2. Apply the concepts via tests (desirable difficulties)
3. Write down three core concepts you learned and provide feedback on the
   exercise (elaboration and reflection)

## Project

### System Requirements

- [git][git] v2.10.2 or greater
- [NodeJS][node] v6.9.5 or greater
- [yarn][yarn] v0.20.3 or greater (or [npm][npm] v4.2.0 or greater)

All of these must be available in your `PATH`. To verify things are set up
properly, you can run this:

```
git --version
node --version
yarn --version
```

If you have trouble with any of these, learn more about the PATH environment variable and how to fix it here for
[windows][win-path] or [mac/linux][mac-path].

### Setup

After you've made sure to have the correct things (and versions) installed, you should be able to just run a few
commands to get set up:

```
git clone https://github.com/kentcdodds/built-ins-workshop.git
cd built-ins-workshop
yarn run --silent setup
yarn run --silent autofill-email YOUR_EMAIL@DOMAIN.COM
```

This may take a few minutes. If you get any errors, please read the error output and see whether there's any
instructions to fix things and try again. If you're still getting errors or need any help at all, then please
[file an issue][issue].

## System Requirements

- [git][git]
- [Node][node] (at least version 6)
- [yarn][yarn] (at least version 0.17.0)

## Setup

You will need to start by cloning this repo, then you'll run a `setup` script
which will install all the dependencies and validate that you're ready to go.
From your terminal, type (or copy/paste):

```
git clone https://github.com/kentcdodds/built-ins-workshop.git
cd built-ins-workshop
yarn run setup
yarn run autofill-email YOUR_EMAIL@DOMAIN.COM
```

> Replace `YOUR_EMAIL@DOMAIN.COM` with your email address

If this finishes without issues, great 👏! However, if you have problems, please
file an issue on this repo [here][setup-issue].

### Note on yarn

If you don't have `yarn` installed and don't want to use it for some reason, you
can use [`npm`][npm] as well. Instead of `yarn run setup`, run
`node ./scripts/install && npm run validate` and enjoy waiting (and hopefully
things don't break for you). May be a good idea to still run
`node ./scripts/verify` to verify you have the right version of other things
too.

## Running the workshop

_You wont be running the quizzes directly, those are intended to be part of the
instruction._

Once you have everything installed, you are ready to run some tests. There are
two directories with tests in them: `exercises` and `exercises-final`. The
`exercises-final` directory is like a cheat sheet (try to not use it). All of
the tests contain the required code to make the tests pass. You will need to
edit the tests in the `exercises` directory, and make the tests pass.

To run the tests, in your terminal run:

```
yarn test
```

If you want the tests to continue running as you make changes, run:

```
yarn run test:watch
```

This will start `jest` in its interactive watch mode ([learn more][watch-mode]).
If you see a bunch of failures, make sure you're in "only changed" mode by
clicking the <kbd>o</kbd> key. There should not be any tests run at this point.
Your job is to go into each test file in `exercises` and make the tests pass. As
you make changes, jest will run the file's tests. Once you have written the
required code, the tests will pass, and you can move on.

**Note:** You may prefer to run the `yarn run test:changed` script which will
run the tests only once. This will allow you to avoid the **learning crutch** of
immediate feedback that you get from the watch mode. But it's up to you!

### Contributing

If you have any questions, [let me know][issue].

If you want to edit/update anything in the exercises, please see (and follow)
the [contributing guidelines][contributing]!

## Events

If you use this workshop, please [make a Pull Request][makepr] this README with
a link to your event.

- [Kent C. Dodds][twitter-kentcdodds] at [Frontend Masters][fem] (in April 2017)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars.githubusercontent.com/u/1500684?v=3" width="100px;"/><br /><sub>Kent C. Dodds</sub>](https://kentcdodds.com)<br />[💻](https://github.com/kentcdodds/built-ins-workshop/commits?author=kentcdodds) [📖](https://github.com/kentcdodds/built-ins-workshop/commits?author=kentcdodds) 🚇 [⚠️](https://github.com/kentcdodds/built-ins-workshop/commits?author=kentcdodds) |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

# LICENSE

MIT

[npm]: https://www.npmjs.com/
[yarn]: https://yarnpkg.com/
[node]: https://nodejs.org
[git]: https://git-scm.com/
[slides]: http://kcd.im/built-in-slides
[slides-badge]: https://cdn.rawgit.com/kentcdodds/custom-badges/2/badges/slides.svg
[chat]: https://gitter.im/kentcdodds/built-ins-workshop
[chat-badge]: https://img.shields.io/gitter/room/nwjs/nw.js.svg?style=flat-square
[build-badge]: https://img.shields.io/travis/kentcdodds/built-ins-workshop.svg?style=flat-square
[build]: https://travis-ci.org/kentcdodds/built-ins-workshop
[dependencyci-badge]: https://dependencyci.com/github/kentcdodds/built-ins-workshop/badge?style=flat-square
[dependencyci]: https://dependencyci.com/github/kentcdodds/built-ins-workshop
[license-badge]: https://img.shields.io/badge/license-MIT%20License-blue.svg?style=flat-square
[license]: https://github.com/kentcdodds/built-ins-workshop/blob/master/other/LICENSE
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com
[donate-badge]: https://img.shields.io/badge/$-support-green.svg?style=flat-square
[donate]: http://kcd.im/donate
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/kentcdodds/built-ins-workshop/blob/master/other/CODE_OF_CONDUCT.md
[github-watch-badge]: https://img.shields.io/github/watchers/kentcdodds/built-ins-workshop.svg?style=social
[github-watch]: https://github.com/kentcdodds/built-ins-workshop/watchers
[github-star-badge]: https://img.shields.io/github/stars/kentcdodds/built-ins-workshop.svg?style=social
[github-star]: https://github.com/kentcdodds/built-ins-workshop/stargazers
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20built-ins-workshop%20by%20@kentcdodds%20https://github.com/kentcdodds/built-ins-workshop%20%F0%9F%91%8D
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/kentcdodds/built-ins-workshop.svg?style=social
[emojis]: https://github.com/kentcdodds/all-contributors#emoji-key
[all-contributors]: https://github.com/kentcdodds/all-contributors
[watch-mode]: https://egghead.io/lessons/javascript-use-jest-s-interactive-watch-mode?pl=testing-javascript-with-jest-a36c4074
[ECMAScript]: https://en.wikipedia.org/wiki/ECMAScript
[makeitstick]: http://makeitstick.net/
[win-path]: https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/
[mac-path]: http://stackoverflow.com/a/24322978/971592
[issue]: https://github.com/kentcdodds/built-ins-workshop/issues/new
[setup-issue]: https://github.com/kentcdodds/built-ins-workshop/issues/new?title=Issues%20Setting%20Up&body=Here%27s%20my%20node/yarn%20version%20and%20the%20output%20when%20I%20run%20the%20commands:
[makepr]: http://makeapullrequest.com
[twitter-kentcdodds]: https://twitter.com/kentcdodds
[fem]: https://frontendmasters.com/
[contributing]: https://github.com/kentcdodds/built-ins-workshop/blob/master/CONTRIBUTING.md
