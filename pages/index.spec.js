import { render } from '@testing-library/vue'
import '@testing-library/jest-dom'
import IndexPage from './'
import ActionConstants from '@/core/ActionConstants'

const renderCounter = (props = {}) => {
  const utils = render(IndexPage, { props })

  return {
    ...utils
  }
}

describe('IndexPage has to', () => {
  it('increment value', async () => {
    const { debug } = renderCounter()
    debug()
    expect(true).toBe(false)
  })
})