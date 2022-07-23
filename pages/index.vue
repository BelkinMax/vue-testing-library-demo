<template>
  <div class="test-elements--list">
    <div class="test-elements--item">
      <SimpleCounter
        :count="count"
        @action="handleCounterAction"
      />
    </div>
  </div>
</template>

<script>
import SimpleCounter from "@/components/SimpleCounter";

export default {
  name: "IndexPage",
  components: {
    SimpleCounter,
  },
  data() {
    return {
      count: 0,
      logs: [],
    };
  },
  methods: {
    handleCounterAction({ name, count }) {
      this.count = count;
      this.logs.push(`${count}: ${name}`);
    }
  },
};
</script>

<style lang="scss">
.test-elements {
  &--list {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  &--item {
    padding: 3rem;
    background-color: #e9e3e3;
    border-radius: 0.5rem;
  }
}
</style>
