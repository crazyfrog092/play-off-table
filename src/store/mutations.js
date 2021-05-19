export default {
  setPlayers(state, players) {
    state.players = players;
  },
  setGridData(state, data) {
    state.gridData = data;
  },
  dropElemToGrid(state, data) {
    const temp = state.gridData.concat();
    temp[data.drop.number] = data.drag;
    state.gridData = temp;
    state.players = state.players.filter((player) => player.id !== data.drag.id);
    if (data.drop.id) state.players.push(data.drop);
  },
};
