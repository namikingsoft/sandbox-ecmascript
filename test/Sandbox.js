import Sandbox from 'Sandbox'
import assert from 'power-assert'
import 'babel-polyfill'

describe('Sandbox', function() {

  before(() => {
    this.instance = new Sandbox()
  })

  describe('new', () => {
    it('should be return new instance', () => {
      assert(this.instance instanceof Sandbox)
    })
  })

  describe('hello', () => {
    it('should be return world', () => {
      assert(this.instance.hello('world') === 'hello world')
    })
  })

  describe('delay', done => {
    context('when using promise', () => {
      before(done => {
        this.instance.delay(50).then(() => done());
      })
      it('should be wait by milli second', () => {
        assert(true)
      })
    })
    context('when using async/await', () => {
      before(async () => {
        await this.instance.delay(50)
      })
      it('should be wait by milli second', async () => {
        assert(true)
      })
    })
  })
})
