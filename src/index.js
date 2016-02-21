import Sandbox from './Sandbox'
import 'babel-polyfill'

const main = async () => {
  const sandbox = new Sandbox
  console.log('0 second')
  await sandbox.delay(1000)
  console.log('1 second')
}

main()
