import 'babel-polyfill'

export default class Sandbox {

  constructor() {}

  hello(...rest) {
    return `hello ${rest.shift()}`
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}
