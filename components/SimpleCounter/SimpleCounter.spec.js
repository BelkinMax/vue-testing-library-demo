import { render, fireEvent, waitFor } from '@testing-library/vue'
import '@testing-library/jest-dom'
import SimpleCounter from './'
import ActionConstants from '@/core/ActionConstants'

const renderCounter = (props = {}) => {
  const utils = render(SimpleCounter, { props })

  const clickIncrement = async () => await fireEvent.click(utils.getByText('Increment'))
  const clickAsyncIncrement = async () => await fireEvent.click(utils.getByText('Async increment'))
  const clickReset = async () => await fireEvent.click(utils.getByText('Reset'))

  const actionEmitted = (actionName) => {
    const emittedAction = utils.emitted()['action']
    const incrementActions = emittedAction.filter(([{ name }]) => name === actionName)

    return {
      times: incrementActions.length,
      payload: incrementActions[incrementActions.length - 1][0]
    }
  }

  return {
    clickIncrement,
    clickAsyncIncrement,
    clickReset,
    actionEmitted,
    ...utils
  }
}

describe('SimpleCounter has to', () => {
  const props = {
    count: 0
  }

  it('increment value', async () => {
    const { clickIncrement, actionEmitted } = renderCounter(props)
    const incrementPayload = {
      name: ActionConstants.INCREMENT,
      count: props.count + 1
    }

    await clickIncrement()

    expect(actionEmitted(ActionConstants.INCREMENT).times).toBe(1)
    expect(actionEmitted(ActionConstants.INCREMENT).payload).toEqual(incrementPayload)
  })

  it('increment value after 1 sec', async () => {
    const { clickAsyncIncrement, actionEmitted } = renderCounter(props)
    const asyncIncrementStartPayload = {
      name: ActionConstants.ASYNC_INCREMENT.START,
      count: props.count
    }
    const asyncIncrementEndPayload = {
      name: ActionConstants.ASYNC_INCREMENT.END,
      count: props.count + 1
    }

    await clickAsyncIncrement()
    expect(actionEmitted(ActionConstants.ASYNC_INCREMENT.START).times).toBe(1)
    expect(actionEmitted(ActionConstants.ASYNC_INCREMENT.START).payload).toEqual(asyncIncrementStartPayload)

    await waitFor(() => {
      expect(actionEmitted(ActionConstants.ASYNC_INCREMENT.END).times).toBe(1)
      expect(actionEmitted(ActionConstants.ASYNC_INCREMENT.END).payload).toEqual(asyncIncrementEndPayload)
    }, { timeout: 1500 })
  })

  // it('reset value', async () => {
  //   const { getByText } = renderCounter()
  //   const incrementBtn = getByText('Increment')
  //   const resetBtn = getByText('Reset')

  //   for (let i = 0; i < 3; i++) {
  //     await fireEvent.click(incrementBtn)
  //   }

  //   getByText('Times clicked: 3')
  //   await fireEvent.click(resetBtn)
  //   getByText('Times clicked: 0')
  // })

  // it('show loading state', async () => {
  //   const { getByText } = renderCounter()
  //   const asyncIncrementBtn = getByText('Async increment')
  //   await fireEvent.click(asyncIncrementBtn)
  //   getByText('Loading...')
  // })

  // it('disable inputs while loading', async () => {
  //   const { getByText } = renderCounter()

  //   const asyncIncrementBtn = getByText('Async increment')
  //   await fireEvent.click(asyncIncrementBtn)

  //   expect(getByText('Increment')).toBeDisabled()
  //   expect(getByText('Async increment')).toBeDisabled()
  //   expect(getByText('Reset')).toBeDisabled()
  // })
})

/*
describe(''), () => {
  it('reset value', () => { })
  it('show loading state', () => { })
  it('disable inputs', () => { })
}
*/