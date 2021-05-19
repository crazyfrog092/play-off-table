<template>
  <div
    :data-id="data ? data.id: ''"
    :data-name="data ? data.name: ''"
    :data-round="round"
    :class="{ 'droppable': droppable }"
    :style="`width:${width}`"
    class="grid-item"
  >
    {{ data ? data.name : '' }}
  </div>
</template>

<script>
export default {
  name: 'GridItem',
  props: {
    width: {
      type: String,
      default: '150px',
    },
    data: {
      type: Object,
      default: null,
    },
    droppable: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.grid-item {
  height: 50px;
  min-width: 150px;
  border: 1px solid green;
  padding: 0 10px;
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 1.25;
}
</style>
