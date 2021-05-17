<template>
  <div class="play-off">
    <input
      v-model="count"
      placeholder="2, 4, 8, 16 и т.д."
      type="number"
      class="play-off__input"
    >
    <div class="play-off__players">
      <div
        v-for="player in players"
        :key="player.id"
        class="play-off__player"
      >
        {{ player.name }}
      </div>
    </div>
    <button
      class="play-off__random-btn"
      :disabled="!(calculateCount >= 1 && Number.isInteger(calculateCount))"
      @click="randomDistribution"
    >
      Random distribution
    </button>
    <!-- <div class="play-off__players">
      <div
        v-for="player in gridData"
        :key="player.id"
        class="play-off__player"
      >
        {{ player.name }}
      </div>
    </div> -->
    <TournamentGrid
      :item-width="itemWidth"
      :count="calculateCount"
      :data="gridData.length ? gridData : null"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TournamentGrid from '@/components/PairOfElements.vue';

import { GET_PLAYERS } from '@/store/consts';

export default {
  name: 'Index',
  components: {
    TournamentGrid,
  },
  data() {
    return {
      count: 8,
      innerWidth: window.innerWidth,
      gridData: [],
    };
  },
  computed: {
    ...mapGetters({
      players: 'players',
    }),
    itemWidth() {
      return `${(this.innerWidth - (this.calculateCount - 1) * 50 - 40) / this.calculateCount}px`;
    },
    calculateCount() {
      return Number(Math.log2(this.count)) + 1;
    },
  },
  watch: {
    count() {
      this.reset();
    },
  },
  async mounted() {
    const request = [
      this.$store.dispatch(`${GET_PLAYERS}`),
    ];
    await Promise.all(request);
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
  methods: {
    async randomDistribution() {
      await this.reset();
      let players = this.players.concat();
      for (let i = this.count; i > 0; i -= 1) {
        const randomPlayer = players[Math.floor(Math.random() * players.length)];
        this.gridData.push(randomPlayer);
        players = players.filter((player) => player.id !== randomPlayer.id);
      }
      this.$store.commit('setPlayers', players);
    },
    reset() {
      this.$store.dispatch(`${GET_PLAYERS}`);
      this.gridData = [];
    },
  },
};
</script>

<style lang="scss" scoped>
.play-off {
  display: grid;
  gap: 25px;
  &__input {
    max-width: 250px;
    width: 100%;
  }
  &__players {
    display: flex;
    flex-wrap: wrap;
  }
  &__player {
    padding: 3px 5px;
    margin: 2px 5px;
    cursor: pointer;
    font-size: 18px;
    &:hover {
      font-weight: bold;
    }
  }
  &__random-btn {
    width: 170px;
    height: 45px;
    padding: 0 10px;
    font-size: 16px;
    line-height: 1.25;
    transition: .35s;
    background-color: #105BED;
    color: #fff;
    border-radius: 4px;
    &:hover {
      background-color: #052489;
    }
    &:disabled {
      cursor: default;
      background-color: rgba(#105BED, .75);
      &:hover {
        background-color: rgba(#105BED, .75);
      }
    }
  }
}
</style>
