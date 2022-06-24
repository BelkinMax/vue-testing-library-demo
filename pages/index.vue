<template>
  <div class="test-elements--list">
    <div class="test-elements--item">
      <SimpleCounter />
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
