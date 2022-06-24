import { render, fireEvent, waitFor } from '@testing-library/vue'
import '@testing-library/jest-dom'
import SimpleCounter from './'

test('increments value on click', async () => {
  const { getByText, queryByText } = render(SimpleCounter)

  // Fails test if the element is not found
  getByText('Times clicked: 0')
  // Works as a normal querySelector
  expect(queryByText('Something that does not exist')).not.toBeInTheDocument()

  const button = getByText('Increment')
  const asyncButton = getByText('Async increment')
  // No need to write expect(button).toBeTruthy()
  // the test will fail by itself if the element is not found

  await fireEvent.click(button)
  getByText('Times clicked: 1')

  await fireEvent.click(asyncButton)
  expect(queryByText('Times clicked: 2')).not.toBeInTheDocument()
  await waitFor(() => getByText('Times clicked: 2'), { timeout: 1500 })
})