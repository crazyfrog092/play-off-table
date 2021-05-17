<template>
  <div class="pair">
    <template v-if="count > 1">
      <div class="pair__wrap">
        <div class="pair__item">
          <PairOfElements
            :item-width="itemWidth"
            :count="localCount"
          />
          <div class="line">
            <div class="line__horizontal" />
            <div class="line__vertical line__vertical_bottom" />
          </div>
        </div>
        <div class="pair__item">
          <PairOfElements
            :item-width="itemWidth"
            :count="localCount"
          />
          <div class="line">
            <div class="line__horizontal" />
            <div class="line__vertical line__vertical_top" />
          </div>
        </div>
      </div>
      <div class="pair__winner">
        <div class="pair__item">
          <div class="line">
            <div class="line__vertical" />
            <div class="line__horizontal" />
          </div>
          <GridItem :width="itemWidth" />
        </div>
      </div>
    </template>

    <template v-else-if="count === 1">
      <GridItem :width="itemWidth" />
    </template>

    <template v-else-if="count === 0" />

    <template v-else>
      Число должно быть 2, 4, 8, 16 и т.д.
    </template>
  </div>
</template>

<script>
// eslint-disable-next-line
import PairOfElements from '@/components/PairOfElements.vue';
import GridItem from '@/components/GridItem.vue';

export default {
  name: 'PairOfElements',
  components: {
    GridItem,
    PairOfElements,
  },
  props: {
    itemWidth: {
      type: String,
      default: '150px',
    },
    count: {
      type: Number,
      default: 2,
    },
  },
  computed: {
    localCount() {
      return this.count - 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.pair {
  display: flex;
  align-items: center;
  &__wrap {
    display: grid;
    gap: 20px;
  }
  &__item {
    display: flex;
    align-items: center;
  }
  &__winner {
    display: grid;
  }
  &__line {
    width: 25px;
    height: 4px;
    background-color: pink;
  }
}
.line {
  height: 100%;
  display: flex;
  align-items: center;
  &__horizontal {
    width: 25px;
    height: 4px;
    background-color: pink;
  }
  &__vertical {
    width: 4px;
    height: 100%;
    background-color: pink;
    margin-left: -4px;
    &_top {
      height: 50%;
      align-self: flex-start;
    }
    &_bottom {
      height: 50%;
      align-self: flex-end;
    }
  }
}
</style>
