<template>
  <div
    class="grid-item"
    :style="`width:${width}`"
  />
</template>

<script>
export default {
  name: 'GridItem',
  props: {
    width: {
      type: String,
      default: '150px',
    },
  },
};
</script>

<style lang="scss" scoped>
.grid-item {
  height: 40px;
  min-width: 150px;
  border: 1px solid green;
}
</style>
