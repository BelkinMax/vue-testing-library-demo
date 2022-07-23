// import { mount } from '@vue/test-utils'
// import SimpleCounter from './'

// const renderCounter = () => {
//   const props = {
//     count: 0
//   }
//   return mount(SimpleCounter, {
//     props
//   })
// }

// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// describe('SimpleCounter has to', () => {
//   let wrapper, outTextEl, buttonIncrementEl, buttonAsyncIncrementEl, buttonResetEl;

//   beforeEach(() => {
//     wrapper = renderCounter()
//     buttonIncrementEl = wrapper.find('button.btn-increment')
//     buttonAsyncIncrementEl = wrapper.find('button.btn-async-increment')
//     buttonResetEl = wrapper.find('button.btn-reset')
//     outTextEl = wrapper.find('p.out-text')
//   })

//   it('increment value', async () => {
//     buttonIncrementEl.trigger('click')
//     await wrapper.vm.$nextTick()
//     expect(outTextEl.text()).toContain('Times clicked: 1')
//   })

//   it('increment value after 1 sec', async () => {
//     buttonAsyncIncrementEl.trigger('click')
//     await sleep(1500)
//     expect(outTextEl.text()).toContain('Times clicked: 1')
//   })

//   it('reset value', async () => {
//     for (let i = 0; i < 3; i++) {
//       buttonIncrementEl.trigger('click')
//       await wrapper.vm.$nextTick()      
//     }

//     expect(outTextEl.text()).toContain('Times clicked: 3')

//     buttonResetEl.trigger('click')
//     await wrapper.vm.$nextTick()

//     expect(outTextEl.text()).toContain('Times clicked: 0')
//   })

//   it('show loading state', async () => {
//     buttonAsyncIncrementEl.trigger('click')
//     await wrapper.vm.$nextTick()
//     expect(outTextEl.text()).toContain('Loading...')
//   })

//   it('disable inputs while loading', async () => {
//     buttonAsyncIncrementEl.trigger('click')
//     await wrapper.vm.$nextTick()

//     expect(buttonIncrementEl.attributes('disabled')).toBe('disabled')
//     expect(buttonAsyncIncrementEl.attributes('disabled')).toBe('disabled')
//     expect(buttonResetEl.attributes('disabled')).toBe('disabled')
//   })
// })