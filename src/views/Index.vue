<template>
  <div class="play-off">
    <input
      v-model="count"
      placeholder="2, 4, 8, 16 и т.д."
      type="number"
      class="play-off__input"
    >
    <TournamentGrid
      :item-width="itemWidth"
      :count="calculateCount"
    />
  </div>
</template>

<script>
import TournamentGrid from '@/components/PairOfElements.vue';

export default {
  name: 'Index',
  components: {
    TournamentGrid,
  },
  data() {
    return {
      count: 8,
      innerWidth: window.innerWidth,
    };
  },
  computed: {
    itemWidth() {
      return `${(this.innerWidth - (this.calculateCount - 1) * 50 - 40) / this.calculateCount}px`;
    },
    calculateCount() {
      return Number(Math.log2(this.count)) + 1;
    },
  },
  created() {
    window.addEventListener('resize', () => {
      this.innerWidth = window.innerWidth;
    });
  },
  destroyed() {
    window.removeEventListener('resize', () => {
      this.innerWidth = window.innerWidth;
    });
  },
};
</script>

<style lang="scss" scoped>
.play-off {
  display: grid;
  gap: 50px;
  &__input {
    max-width: 250px;
    width: 100%;
  }
}
</style>
