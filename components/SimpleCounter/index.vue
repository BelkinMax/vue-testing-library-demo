<template>
  <div>
    <p class="out-text">Times clicked: {{ count }}</p>
    <button id="sync-btn" @click="increment">Increment</button>
    <button id="async-btn" @click="asyncIncrement">Async increment</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    count: 0,
  }),

  methods: {
    increment() {
      this.count++;
    },
    asyncIncrement() {
      setTimeout(() => {
        this.increment();
      }, 1000);
    },
  },
};
</script>