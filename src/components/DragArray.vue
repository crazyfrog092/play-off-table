<template>
  <div class="players">
    <div
      v-for="(player, i) in players"
      :key="i"
      :data-id="player.id"
      :data-name="player.name"
      class="players__item draggable"
    >
      {{ player.name }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'DragArray',
  data() {
    return {
      dragObject: {},
    };
  },
  computed: {
    ...mapGetters({
      players: 'players',
    }),
  },
};
</script>

<style lang="scss" scoped>
.players {
  display: flex;
  flex-wrap: wrap;
  &__item {
    padding: 3px 5px;
    margin: 2px 5px;
    cursor: pointer;
    font-size: 18px;
    user-select: none;
    &:hover {
      font-weight: bold;
    }
  }
}
</style>
