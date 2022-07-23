<template>
  <div>
    <p>{{ outText }}</p>
    <button :disabled="isLoading" @click="increment">Increment</button>
    <button :disabled="isLoading" @click="asyncIncrement">Async increment</button>
    <button :disabled="isLoading || count === 0" @click="reset">Reset</button>
  </div>
</template>

<script>
import ActionConstants from '@/core/ActionConstants'

export default {
  emits: ['action'],
  data: () => ({
    isLoading: false,
  }),
  props: {
    count: {
      type: Number,
      required: true,
    },
  },
  computed: {
    outText() {
      return this.isLoading
        ? "Loading..."
        : `Times clicked: ${this.count}`;
    },
  },
  methods: {
    increment() { this._emitIncrement(ActionConstants.INCREMENT, 1 ) },
    asyncIncrement() {
      this._toggleLoader(true)
      this._emitIncrement(ActionConstants.ASYNC_INCREMENT.START)
      setTimeout(() => {
        this._toggleLoader(false)
        this._emitIncrement(ActionConstants.ASYNC_INCREMENT.END, 1)
      }, 1000)
    },
    reset() { this._emitReset(ActionConstants.RESET_COUNT) },
    _toggleLoader(val) { this.isLoading = val },
    _emitIncrement(name, val = 0) { this._emitAction(name, this.count + val) },
    _emitReset(name) { this._emitAction(name, 0 ) },
    _emitAction(name, count) { this.$emit('action', { name, count }) },
  }
};
</script>